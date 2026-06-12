import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useDDS } from "@/contexts/DDSContext";
import { getDashboard, getUnidades, DashboardData } from "@/services/api";
import AppHeader from "@/components/AppHeader";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

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

const DDSGeral = () => {
  const { user } = useAuth();
  const { lastSignedAt } = useDDS();
  const [mesRef, setMesRef] = useState(getCurrentMonthRef());
  const [unidade, setUnidade] = useState("TODAS");
  const [unidades, setUnidades] = useState<string[]>([]);
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  const setor = user?.setor || "TODOS";

  useEffect(() => {
    getUnidades().then((list) => setUnidades(list));
  }, []);

  useEffect(() => {
    setLoading(true);
    getDashboard(mesRef, setor, unidade, user?.cracha, user?.role).then((d) => {
      setData(d);
      setLoading(false);
    });
  }, [mesRef, setor, unidade, lastSignedAt]);

  const daysInMonth = getDaysInMonth(mesRef);
  const currentDay = getCurrentDayOfMonth(mesRef);

  const funcionariosAtivos = data?.funcionarios_ativos ?? 0;
  const metaTotal = funcionariosAtivos * META_POR_FUNCIONARIO;
  const realizadoTotal = data?.realizado_total ?? 0;
  const pendenteTotal = Math.max(0, metaTotal - realizadoTotal);
  const progressPercent = metaTotal > 0 ? Math.min(100, (realizadoTotal / metaTotal) * 100) : 0;

  const dailyEvolution = Array.from({ length: currentDay }, (_, i) => {
    const day = i + 1;
    const metaDiaria = metaTotal > 0 ? Math.round((metaTotal / daysInMonth) * day) : 0;
    const realizadoDiario = metaTotal > 0 ? Math.round((realizadoTotal / currentDay) * day) : 0;
    return {
      dia: `${String(day).padStart(2, "0")}`,
      meta: metaDiaria,
      realizado: Math.min(realizadoDiario, realizadoTotal),
    };
  });

  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />
      <div className="flex-1 p-4 max-w-[700px] w-full mx-auto">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display text-xl font-extrabold text-foreground">
            📊 DDS Geral — Equipe
          </h2>
          <input
            type="month"
            value={mesRef}
            onChange={(e) => setMesRef(e.target.value)}
            className="border border-border rounded-lg px-3 py-1.5 text-sm bg-background text-foreground outline-none focus:border-verde transition-colors"
          />
        </div>

        {/* Unidade filter */}
        <div className="mb-4">
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

        {loading ? (
          <p className="text-sm text-muted-foreground text-center py-8">Carregando...</p>
        ) : !data ? (
          <p className="text-sm text-destructive text-center py-8">Erro ao carregar dados.</p>
        ) : (
          <div className="flex flex-col gap-4 animate-fade-up">
            {/* KPI Cards */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <p className="font-display text-3xl font-bold text-verde">{funcionariosAtivos}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold mt-1">Funcionários</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <p className="font-display text-3xl font-bold text-verde">{META_POR_FUNCIONARIO}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold mt-1">Meta/Funcionário (dia {currentDay})</p>
              </div>
            </div>

            {/* Progress bar: Meta vs Realizado */}
            <div className="bg-card border border-border rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-display text-sm font-bold text-muted-foreground uppercase tracking-wider">
                  Meta vs Realizado
                </span>
                <span className="font-display text-lg font-bold text-verde">
                  {realizadoTotal} / {metaTotal}
                </span>
              </div>
              <div className="h-4 rounded-full bg-muted overflow-hidden mb-2">
                <div
                  className="h-full rounded-full bg-gradient-button transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-muted-foreground font-bold">
                <span>✅ Realizado: {realizadoTotal}</span>
                <span className="text-destructive">⏳ Pendente: {pendenteTotal}</span>
              </div>
            </div>

            {/* Monthly Evolution Chart */}
            {dailyEvolution.length > 0 && (
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-display text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">
                  📈 Evolução no Mês
                </h3>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={dailyEvolution}>
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
                      <Line
                        type="monotone"
                        dataKey="meta"
                        stroke="hsl(var(--muted-foreground))"
                        strokeDasharray="5 5"
                        strokeWidth={2}
                        dot={false}
                        name="Meta prevista"
                      />
                      <Line
                        type="monotone"
                        dataKey="realizado"
                        stroke="hsl(var(--verde))"
                        strokeWidth={2.5}
                        dot={false}
                        name="Realizado"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* DDS por Setor */}
            {data.dds_por_setor && data.dds_por_setor.length > 0 && (
              <div className="bg-card border border-border rounded-xl p-4">
                <h3 className="font-display text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">
                  🏭 DDS por Setor
                </h3>
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data.dds_por_setor} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis type="number" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
                      <YAxis
                        dataKey="setor"
                        type="category"
                        tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                        width={100}
                      />
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

            {/* Abaixo da Meta */}
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
                        <th className="text-center p-2.5 font-display font-bold text-verde uppercase tracking-wider">Feito</th>
                        <th className="text-center p-2.5 font-display font-bold text-destructive uppercase tracking-wider">Faltam</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.abaixo_da_meta.map((row) => (
                        <tr key={row.cracha} className="border-b border-background last:border-0">
                          <td className="p-2.5 text-foreground font-bold">{row.nome}</td>
                          <td className="p-2.5 text-muted-foreground">{row.funcao}</td>
                          <td className="p-2.5 text-center text-verde font-bold">{row.realizado_no_mes}</td>
                          <td className="p-2.5 text-center text-destructive font-bold">{row.faltam_no_mes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Concluintes */}
            <div className="bg-card border border-border rounded-xl p-4 text-center">
              <p className="font-display text-3xl font-bold text-verde">{data.concluintes_30_de_30}</p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold mt-1">
                🏆 Concluintes 25/25
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DDSGeral;
