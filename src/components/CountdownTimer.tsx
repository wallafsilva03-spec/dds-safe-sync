import { useState, useEffect, useCallback } from "react";

interface CountdownTimerProps {
  durationSeconds: number;
  onComplete: () => void;
  isActive: boolean;
}

const CountdownTimer = ({ durationSeconds, onComplete, isActive }: CountdownTimerProps) => {
  const [remaining, setRemaining] = useState(durationSeconds);

  useEffect(() => {
    setRemaining(durationSeconds);
  }, [durationSeconds, isActive]);

  useEffect(() => {
    if (!isActive || remaining <= 0) return;

    const interval = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, remaining, onComplete]);

  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;
  const progress = ((durationSeconds - remaining) / durationSeconds) * 100;

  return (
    <div className="rounded-lg border border-border bg-card p-4 mb-4">
      <div className="flex items-center justify-between mb-2">
        <span className="font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">
          ⏱ Tempo de leitura
        </span>
        <span className={`font-display text-2xl font-bold ${remaining === 0 ? "text-verde2" : "text-azul"}`}>
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-button transition-all duration-1000 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
      {remaining > 0 && (
        <p className="text-xs text-muted-foreground mt-2 text-center">
          Leia o conteúdo com atenção. A assinatura será liberada após o tempo.
        </p>
      )}
      {remaining === 0 && (
        <p className="text-xs text-verde2 mt-2 text-center font-bold">
          ✅ Tempo concluído! Agora você pode assinar.
        </p>
      )}
    </div>
  );
};

export default CountdownTimer;
