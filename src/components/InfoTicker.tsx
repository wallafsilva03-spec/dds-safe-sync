import { useEffect, useState } from "react";

/**
 * Letreiro fixo no rodapé com clima de Ribeirão Preto-SP e informativos
 * de segurança que giram diariamente. Atualiza o clima 1x ao dia (cache
 * em localStorage por data) usando a API gratuita Open-Meteo (sem chave).
 */

const RIBEIRAO = { lat: -21.1775, lon: -47.8103, nome: "Ribeirão Preto-SP" };

// Mensagens de segurança / informativos — giram conforme o dia do ano.
const INFORMATIVOS = [
  "Use sempre o EPI adequado para a sua atividade.",
  "Antes de iniciar qualquer tarefa, avalie os riscos do ambiente.",
  "Mantenha as áreas de circulação livres e organizadas.",
  "Comunique imediatamente qualquer condição insegura ao seu líder.",
  "Direção defensiva salva vidas: respeite os limites de velocidade.",
  "Hidrate-se com frequência, especialmente em dias quentes.",
  "Nunca remova as proteções de máquinas e equipamentos.",
  "Atenção redobrada ao manusear cargas — proteja sua coluna.",
  "Em caso de acidente, acione a brigada e o SESMT imediatamente.",
  "Cuidado com animais peçonhentos: olhe onde pisa e onde coloca as mãos.",
  "Use o colete refletivo ao transitar em áreas operacionais.",
  "Verifique o checklist do veículo antes de qualquer deslocamento.",
  "Mantenha o foco: celular ao volante é proibido e perigoso.",
  "Respeite a sinalização e as áreas isoladas do canteiro.",
  "Sua segurança é responsabilidade de todos. Cuide-se e cuide do colega.",
];

interface Weather {
  temp: number;
  max: number;
  min: number;
  desc: string;
  emoji: string;
}

// Mapeia códigos WMO (Open-Meteo) para descrição em PT + emoji.
function weatherFromCode(code: number): { desc: string; emoji: string } {
  if (code === 0) return { desc: "Céu limpo", emoji: "☀️" };
  if (code <= 2) return { desc: "Parcialmente nublado", emoji: "🌤️" };
  if (code === 3) return { desc: "Nublado", emoji: "☁️" };
  if (code <= 48) return { desc: "Névoa", emoji: "🌫️" };
  if (code <= 57) return { desc: "Garoa", emoji: "🌦️" };
  if (code <= 67) return { desc: "Chuva", emoji: "🌧️" };
  if (code <= 77) return { desc: "Neve", emoji: "🌨️" };
  if (code <= 82) return { desc: "Pancadas de chuva", emoji: "🌧️" };
  if (code <= 99) return { desc: "Tempestade", emoji: "⛈️" };
  return { desc: "Tempo instável", emoji: "🌥️" };
}

function todayKey() {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

function dayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  return Math.floor((now.getTime() - start.getTime()) / 86400000);
}

const InfoTicker = () => {
  const [weather, setWeather] = useState<Weather | null>(null);

  // Reserva espaço no fim da página para o letreiro não cobrir conteúdo.
  useEffect(() => {
    const prev = document.body.style.paddingBottom;
    document.body.style.paddingBottom = "40px";
    return () => {
      document.body.style.paddingBottom = prev;
    };
  }, []);

  useEffect(() => {
    const cacheKey = "dss-weather";
    try {
      const cached = JSON.parse(localStorage.getItem(cacheKey) || "null");
      if (cached && cached.date === todayKey() && cached.data) {
        setWeather(cached.data);
        return;
      }
    } catch {
      /* ignora cache inválido */
    }

    const url =
      `https://api.open-meteo.com/v1/forecast?latitude=${RIBEIRAO.lat}` +
      `&longitude=${RIBEIRAO.lon}&current=temperature_2m,weather_code` +
      `&daily=temperature_2m_max,temperature_2m_min&timezone=America/Sao_Paulo`;

    fetch(url)
      .then((r) => r.json())
      .then((j) => {
        const code = j?.current?.weather_code ?? 0;
        const { desc, emoji } = weatherFromCode(code);
        const w: Weather = {
          temp: Math.round(j?.current?.temperature_2m ?? 0),
          max: Math.round(j?.daily?.temperature_2m_max?.[0] ?? 0),
          min: Math.round(j?.daily?.temperature_2m_min?.[0] ?? 0),
          desc,
          emoji,
        };
        setWeather(w);
        localStorage.setItem(cacheKey, JSON.stringify({ date: todayKey(), data: w }));
      })
      .catch(() => {
        /* sem clima: o letreiro segue só com informativos */
      });
  }, []);

  const dataHoje = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  // Seleciona 5 informativos do dia (giram diariamente).
  const base = dayOfYear() % INFORMATIVOS.length;
  const doDia = Array.from({ length: 5 }, (_, i) => INFORMATIVOS[(base + i) % INFORMATIVOS.length]);

  const itens: string[] = [];
  itens.push(`📅 ${dataHoje.charAt(0).toUpperCase() + dataHoje.slice(1)}`);
  if (weather) {
    itens.push(
      `${weather.emoji} ${RIBEIRAO.nome}: ${weather.temp}°C, ${weather.desc} (máx ${weather.max}° / mín ${weather.min}°)`,
    );
  }
  doDia.forEach((m) => itens.push(`🦺 ${m}`));

  // Duplica o conteúdo para o efeito de rolagem contínua (translateX -50%).
  const conteudo = itens.join("  •  ");

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-header border-t border-white/10 overflow-hidden">
      <div className="flex items-center">
        <span className="flex-shrink-0 bg-verde text-primary-foreground font-display text-[11px] font-bold uppercase tracking-wider px-3 py-2">
          📢 Informativo
        </span>
        <div className="relative flex-1 overflow-hidden">
          <div className="inline-flex whitespace-nowrap animate-marquee py-2">
            <span className="text-[12px] text-primary-foreground/90 px-4">{conteudo}</span>
            <span className="text-[12px] text-primary-foreground/90 px-4" aria-hidden="true">
              {conteudo}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoTicker;
