import { useState, useEffect } from "react";
import { getDashboard, getUnidades, DashboardData } from "@/services/api";
import { useDDS } from "@/contexts/DDSContext";
import { useAuth } from "@/contexts/AuthContext";
import AppHeader from "@/components/AppHeader";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, Legend,
  Area, RadialBarChart, RadialBar, PolarAngleAxis, ComposedChart,
} from "recharts";

const META_POR_FUNCIONARIO = 25;

function getCurrentMonthRef() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

function getDaysInMonth(mesRef: string) {
  const [year, month] = mesRef.split("-").map(Number);
  return new Date(year, month, 0).getDate();
}

function getCurrentDayOfMonth(mesRef: string) {
  const now = new Date();
  const current = getCurrentMonthRef();
  if (mesRef === current) return now.getDate();
  return getDaysInMonth(mesRef);
}

const COLORS = ["hsl(var(--verde))", "hsl(var(--destructive))", "#60a5fa", "#f59e0b", "#a78bfa"];

const Dashboard = () => {
  const { user } = useAuth();
  const { lastSignedAt } = useDDS();
  const [mesRef, setMesRef] = useState(getCurrentMonthRef());
  const [setor, setSetor] = useState("TODOS");
  const [unidade, setUnidade] = useState("TODAS");
  const [unidades, setUnidades] = useState<string[]>([]);
  const [setores, setSetores] = useState<string[]>([]);
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUnidades().then((list) => setUnidades(list));
  }, []);

  // Carrega setores disponíveis (sem filtro de setor)
  useEffect(() => {
    getDashboard(mesRef, "TODOS", unidade, user?.cracha, user?.role).then((d) => {
      if (d?.dds_por_setor) {
        setSetores(d.dds_por_setor.map((s) => s.setor).filter(Boolean).sort());
      }
    });
  }, [mesRef, unidade]);

  useEffect(() => {
    setLoading(true);
    getDashboard(mesRef, setor, unidade, user?.cracha, user?.role).then((d) => {
      setData(d);
      setLoading(false);
    });
  }, [mesRef, setor, unidade, lastSignedAt]);

  const metaPorFuncionario = META_POR_FUNCIONARIO;
  const funcionariosAtivos = data?.funcionarios_ativos ?? 0;
  const previstoTotal = funcionariosAtivos * metaPorFuncionario;
  const realizadoTotal = data?.realizado_total ?? 0;
  const pendenteTotal = Math.max(0, previstoTotal - realizadoTotal);
  const concluintes = data?.concluintes_30_de_30 ?? 0;
  const progressPercent = previstoTotal > 0 ? Math.min(100, (realizadoTotal / previstoTotal) * 100) : 0;

  const daysInMonth = getDaysInMonth(mesRef);
  const currentDay = getCurrentDayOfMonth(mesRef);

  // Dados para gráfico de evolução diária (linha)
  const dailyEvolution = Array.from({ length: currentDay }, (_, i) => {
    const day = i + 1;
    const metaDiaria = previstoTotal > 0 ? Math.round((previstoTotal / daysInMonth) * day) : 0;
    const realizadoDiario = previstoTotal > 0 ? Math.round((realizadoTotal / currentDay) * day) : 0;
    return {
      dia: String(day).padStart(2, "0"),
      meta: metaDiaria,
      realizado: Math.min(realizadoDiario, realizadoTotal),
    };
  });

  // Dados para pizza: concluintes vs abaixo
  const pieData = [
    { name: "Concluintes", value: concluintes },
    { name: "Abaixo da Meta", value: Math.max(0, funcionariosAtivos - concluintes) },
  ];

  // Gauge (velocímetro) — % de conclusão geral
  const gaugeData = [{ name: "Conclusão", value: Math.round(progressPercent), fill: "hsl(var(--verde))" }];

  // Top 8 que mais precisam assinar (maior pendência)
  const topFaltam = (data?.abaixo_da_meta ?? [])
    .slice()
    .sort((a, b) => b.faltam_no_mes - a.faltam_no_mes)
    .slice(0, 8)
    .map((r) => ({ nome: r.nome?.split(" ")[0] || r.cracha, faltam: r.faltam_no_mes }));

  // Pendência agrupada por função
  const porFuncaoMap: Record<string, number> = {};
  (data?.abaixo_da_meta ?? []).forEach((r) => {
    const f = r.funcao || "—";
    porFuncaoMap[f] = (porFuncaoMap[f] || 0) + 1;
  });
  const porFuncao = Object.entries(porFuncaoMap)
    .map(([funcao, total]) => ({ funcao, total }))
    .sort((a, b) => b.total - a.total)
    .slice(0, 6);

  const kpis = [
    { label: "Funcionários", value: funcionariosAtivos },
    { label: "Meta/Func.", value: metaPorFuncionario },
    { label: "Previsto", value: previstoTotal },
    { label: "Realizado", value: realizadoTotal },
    { label: "Pendente", value: pendenteTotal },
    { label: "Concluintes", value: concluintes },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />
      <div className="flex-1 p-4 max-w-[760px] w-full mx-auto">
        <h2 className="font-display text-xl font-extrabold text-foreground mb-4">
          📈 Dashboard — Acompanhamento DDS
        </h2>

        {/* Filtros */}
        <div className="flex flex-col gap-3 mb-5">
          <div className="grid grid-cols-2 gap-3">
            {/* Mês */}
            <div>
              <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                Mês
              </label>
              <input
                type="month"
                value={mesRef}
                onChange={(e) => setMesRef(e.target.value)}
                className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background text-foreground outline-none focus:border-verde transition-colors"
              />
            </div>
            {/* Setor — dropdown */}
            <div>
              <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                Setor
              </label>
              <select
                value={setor}
                onChange={(e) => setSetor(e.target.value)}
                className="w-full border border-border rounded-lg px-3 py-2 text-sm bg-background text-foreground outline-none focus:border-verde transition-colors"
              >
                <option value="TODOS">TODOS</option>
                {setores.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Unidade */}
          <div>
            <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1.5">
              Unidade
            </label>
            <div className="flex flex-wrap gap-2">
              {["TODAS", ...unidades].map((u) => (
                <button
                  key={u}
                  onClick={() => setUnidade(u)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider border transition-colors ${
                    unidade === u
                      ? "bg-verde text-primary-foreground border-verde"
                      : "bg-background text-muted-foreground border-border hover:border-verde"
                  }`}
                >
                  {u}
                </button>
              ))}
            </div>
          </div>
        </div>

        {loading ? (
          <p className="text-sm text-muted-foreground text-center py-12">Carregando...</p>
        ) : !data ? (
          <p className="text-sm text-destructive text-center py-12">Erro ao carregar dashboard.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {/* KPIs */}
            <div className="grid grid-cols-3 gap-2.5">
              {kpis.map((kpi) => (
                <div key={kpi.label} className="bg-card border border-border rounded-xl p-3 text-center">
                  <p className="font-display text-2xl font-bold text-verde">{kpi.value}</p>
                  <p className="text-[9px] text-muted-foreground uppercase tracking-wider font-bold mt-1">{kpi.label}</p>
                </div>
              ))}
            </div>

            {/* Barra de progresso geral */}
            <div className="bg-card border border-border rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-display text-sm font-bold text-muted-foreground uppercase tracking-wider">
                  Meta vs Realizado
                </span>
                <span className="font-display text-lg font-bold text-verde">
                  {realizadoTotal} / {previstoTotal}
                </span>
              </div>
              <div className="h-4 rounded-full bg-muted overflow-hidden mb-2">
                <div
                  className="h-full rounded-full bg-gradient-button transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-muted-foreground font-bold">
                <span>✅ {realizadoTotal} realizados</span>
                <span>{progressPercent.toFixed(1)}%</span>
                <span className="text-destructive">⏳ {pendenteTotal} pendentes</span>
              </div>
            </div>

            {/* Gauge — Velocímetro de conclusão geral */}
            <div className="bg-card border border-border rounded-xl p-4">
              <h3 className="font-display text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">
                🎯 Conclusão Geral do Mês
              </h3>
              <div className="h-[180px] relative">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart
                    innerRadius="70%"
                    outerRadius="100%"
                    data={gaugeData}
                    startAngle={210}
                    endAngle={-30}
                  >
                    <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                    <RadialBar background dataKey="value" cornerRadius={12} angleAxisId={0} />
                  </RadialBarChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="font-display text-4xl font-extrabold text-verde">
                    {Math.round(progressPercent)}%
                  </span>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">
                    {realizadoTotal} de {previstoTotal}
                  </span>
                </div>
              </div>
            </div>

            {/* Gráfico 1 — Evolução acumulada (área) */}
            {dailyEvolution.length > 0 && (
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-display text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">
                  📈 Evolução Acumulada — Meta vs Realizado
                </h3>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={dailyEvolution}>
                      <defs>
                        <linearGradient id="gReal" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--verde))" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="hsl(var(--verde))" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis
                        dataKey="dia"
                        tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                        interval={Math.max(0, Math.floor(currentDay / 8))}
                      />
                      <YAxis tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                          fontSize: "12px",
                        }}
                      />
                      <Legend wrapperStyle={{ fontSize: "11px" }} />
                      <Line type="monotone" dataKey="meta" stroke="hsl(var(--muted-foreground))" strokeDasharray="5 5" strokeWidth={2} dot={false} name="Meta prevista" />
                      <Area type="monotone" dataKey="realizado" stroke="hsl(var(--verde))" strokeWidth={2.5} fill="url(#gReal)" name="Realizado" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* Gráfico 2 — DDS por Setor (barras horizontais) */}
            {data.dds_por_setor && data.dds_por_setor.length > 0 && (
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-display text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">
                  🏭 Assinaturas por Setor
                </h3>
                <div className="h-[220px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data.dds_por_setor} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis type="number" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
                      <YAxis dataKey="setor" type="category" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} width={110} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                          fontSize: "12px",
                        }}
                      />
                      <Bar dataKey="total_assinaturas" fill="hsl(var(--verde))" radius={[0, 6, 6, 0]} name="Assinaturas" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* Gráfico 3 — Pizza: Concluintes vs Abaixo da Meta */}
            {funcionariosAtivos > 0 && (
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-display text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">
                  🏆 Concluintes vs Abaixo da Meta
                </h3>
                <div className="h-[220px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={55}
                        outerRadius={85}
                        paddingAngle={3}
                        dataKey="value"
                        label={({ name, percent }) =>
                          `${name}: ${(percent * 100).toFixed(0)}%`
                        }
                        labelLine={false}
                      >
                        {pieData.map((_, index) => (
                          <Cell key={index} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                          fontSize: "12px",
                        }}
                      />
                      <Legend wrapperStyle={{ fontSize: "11px" }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* Gráfico 4 — Top que mais precisam assinar (ranking) */}
            {topFaltam.length > 0 && (
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-display text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">
                  🚨 Top Pendências — Quem Mais Precisa Assinar
                </h3>
                <div className="h-[220px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={topFaltam} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis type="number" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
                      <YAxis dataKey="nome" type="category" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} width={80} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                          fontSize: "12px",
                        }}
                      />
                      <Bar dataKey="faltam" fill="hsl(var(--destructive))" radius={[0, 6, 6, 0]} name="Faltam" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* Gráfico 5 — Pendência por função */}
            {porFuncao.length > 0 && (
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-display text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">
                  👷 Funcionários Abaixo da Meta por Função
                </h3>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={porFuncao}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="funcao" tick={{ fontSize: 9, fill: "hsl(var(--muted-foreground))" }} interval={0} angle={-15} textAnchor="end" height={50} />
                      <YAxis tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} allowDecimals={false} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px",
                          fontSize: "12px",
                        }}
                      />
                      <Bar dataKey="total" radius={[6, 6, 0, 0]} name="Pessoas">
                        {porFuncao.map((_, index) => (
                          <Cell key={index} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* Tabela — Abaixo da Meta */}
            {data.abaixo_da_meta && data.abaixo_da_meta.length > 0 && (
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="bg-destructive/90 px-3.5 py-2.5 font-display text-[13px] font-bold tracking-wider uppercase text-destructive-foreground">
                  ⚠️ Abaixo da Meta ({data.abaixo_da_meta.length})
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-2.5 font-display font-bold text-muted-foreground uppercase tracking-wider">Nome</th>
                        <th className="text-left p-2.5 font-display font-bold text-muted-foreground uppercase tracking-wider">Função</th>
                        <th className="text-left p-2.5 font-display font-bold text-muted-foreground uppercase tracking-wider">Setor</th>
                        <th className="text-center p-2.5 font-display font-bold text-verde uppercase tracking-wider">Feito</th>
                        <th className="text-center p-2.5 font-display font-bold text-destructive uppercase tracking-wider">Faltam</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.abaixo_da_meta.map((row) => (
                        <tr key={row.cracha} className="border-b border-background last:border-0">
                          <td className="p-2.5 text-foreground font-bold">{row.nome}</td>
                          <td className="p-2.5 text-muted-foreground">{row.funcao}</td>
                          <td className="p-2.5 text-muted-foreground">{row.setor}</td>
                          <td className="p-2.5 text-center text-verde font-bold">{row.realizado_no_mes}</td>
                          <td className="p-2.5 text-center text-destructive font-bold">{row.faltam_no_mes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
