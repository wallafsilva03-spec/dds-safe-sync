import { useState, useCallback, useRef, useEffect } from "react";

import logoMoreno from "@/assets/logo-moreno.png";
import { DSSItem } from "@/data/dssContent";
import CountdownTimer from "./CountdownTimer";
import SignatureCanvas from "./SignatureCanvas";
import { sendToGoogleSheets } from "@/lib/googleSheets";
import { toast } from "@/hooks/use-toast";

interface DSSViewerProps {
  dss: DSSItem;
  onBack: () => void;
  onSigned: (id: number) => void;
}

const blockColorMap = {
  primary: "bg-verde",
  secondary: "bg-azul",
  accent: "bg-verde2",
};

const TIMER_SECONDS = 300;

const DSSViewer = ({ dss, onBack, onSigned }: DSSViewerProps) => {
  const [timerDone, setTimerDone] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [hasSignature, setHasSignature] = useState(false);
  const [signatureDataUrl, setSignatureDataUrl] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleTimerComplete = useCallback(() => {
    setTimerDone(true);
  }, []);

  const handleSignatureChange = useCallback((hasSig: boolean, dataUrl: string) => {
    setHasSignature(hasSig);
    setSignatureDataUrl(dataUrl);
  }, []);

  const canSubmit = timerDone && name.trim() && hasSignature && agreed;

  const [isSending, setIsSending] = useState(false);
  const confirmCardRef = useRef<HTMLDivElement>(null);
  const [pendingSubmitData, setPendingSubmitData] = useState<{
    dssTitle: string; nome: string; funcao: string; dataHora: string; assinaturaBase64: string;
  } | null>(null);

  const handleSubmit = async () => {
    if (!canSubmit || isSending) return;
    setIsSending(true);
    const submitData = {
      dssTitle: dss.title,
      nome: name.trim(),
      funcao: role.trim(),
      dataHora: new Date().toLocaleString("pt-BR"),
      assinaturaBase64: signatureDataUrl,
    };
    setPendingSubmitData(submitData);
    setConfirmed(true);
  };

  // After confirmation, send data with clean base64 + HTML comprovante
  useEffect(() => {
    if (!confirmed || !pendingSubmitData) return;

    const sendData = async () => {
      const result = await sendToGoogleSheets({
        dssTitle: pendingSubmitData.dssTitle,
        nome: pendingSubmitData.nome,
        funcao: pendingSubmitData.funcao,
        dataHora: pendingSubmitData.dataHora,
        assinaturaBase64: pendingSubmitData.assinaturaBase64,
      });

      if (result.error) {
        toast({ title: "Aviso", description: result.error, variant: "destructive" });
      }
      setIsSending(false);
      onSigned(dss.id);
      setPendingSubmitData(null);
    };

    sendData();
  }, [confirmed, pendingSubmitData]);

  if (confirmed) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="bg-gradient-header px-5 py-4 flex items-center gap-3.5">
          <img src={logoMoreno} alt="Grupo Moreno" className="h-[70px] w-[70px] object-contain rounded-md bg-white/[0.08] p-1 flex-shrink-0" />
          <div className="flex-1">
            <p className="font-display text-[10px] tracking-widest uppercase text-primary-foreground/55 mb-0.5">CTA – Grupo Moreno · DSS</p>
            <h2 className="font-display text-[22px] font-extrabold text-primary-foreground leading-tight">Assinatura Registrada</h2>
          </div>
          <button onClick={onBack} className="font-body text-sm font-bold text-primary-foreground/80">
            ‹ Voltar
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center p-4">
          <div ref={confirmCardRef} className="bg-white border-2 border-verde rounded-xl p-6 text-center max-w-[400px] w-full animate-fade-up">
            <div className="w-14 h-14 rounded-full bg-gradient-button flex items-center justify-center text-3xl mx-auto mb-3">
              ✅
            </div>
            <h2 className="font-display text-xl font-bold text-[#0d3b66] mb-1.5">Assinatura Registrada!</h2>
            <p className="text-xs text-[#444444] leading-relaxed">
              Obrigado, <strong className="text-[#0d3b66]">{name}</strong>.<br />
              Sua leitura e assinatura foram registradas com sucesso.
            </p>
            {signatureDataUrl && (
              <div className="max-w-[260px] mx-auto mt-3 bg-background border border-border rounded-lg p-1">
                <img src={signatureDataUrl} alt="Assinatura" className="w-full rounded-md" />
              </div>
            )}
            <p className="text-[10px] text-[#666666] mt-3 font-mono leading-relaxed">
              {dss.title}<br />
              {new Date().toLocaleString("pt-BR")}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-gradient-header px-5 py-4 flex items-center gap-3.5">
        <img src={logoMoreno} alt="Grupo Moreno" className="h-[70px] w-[70px] object-contain rounded-md bg-white/[0.08] p-1 flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="font-display text-[10px] tracking-widest uppercase text-primary-foreground/55 mb-0.5">CTA – Grupo Moreno · DSS</p>
          <h2 className="font-display text-lg font-extrabold text-primary-foreground leading-tight truncate">{dss.title}</h2>
          <p className="text-[11px] text-primary-foreground/60 mt-0.5">Leia com atenção e assine ao final</p>
        </div>
        <button onClick={onBack} className="font-body text-sm font-bold text-primary-foreground/80 flex-shrink-0">
          ‹ Voltar
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 max-w-[540px] w-full mx-auto">
        {/* Timer */}
        <CountdownTimer
          durationSeconds={TIMER_SECONDS}
          onComplete={handleTimerComplete}
          isActive={true}
        />

        {/* Blocks */}
        {dss.blocks.map((block, i) => (
          <div key={i} className="bg-card border border-border rounded-xl overflow-hidden mb-3.5">
            <div className={`px-3.5 py-2.5 font-display text-[13px] font-bold tracking-wider uppercase text-primary-foreground ${blockColorMap[block.color]}`}>
              {block.title}
            </div>
            <div
              className="p-3.5 text-[13.5px] leading-relaxed text-foreground [&_p]:mb-2.5 [&_p:last-child]:mb-0 [&_strong]:text-azul [&_ul]:pl-5 [&_ul]:mt-1.5 [&_li]:mb-1.5"
              dangerouslySetInnerHTML={{ __html: block.content }}
            />
          </div>
        ))}

        {/* Final message */}
        <div className="bg-gradient-header rounded-xl p-4 mb-3.5 text-primary-foreground font-display text-[15px] font-semibold text-center leading-relaxed tracking-wide">
          {dss.finalMessage}
        </div>

        {/* Signature section */}
        <div className="bg-card border border-border rounded-xl p-4 mb-3.5">
          <h3 className="font-display text-base font-bold text-azul mb-3">✍️ Assinatura Digital</h3>

          <div className="grid grid-cols-2 gap-2.5 mb-2.5">
            <div>
              <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Nome Completo</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={!timerDone}
                className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-background text-foreground outline-none focus:border-verde transition-colors disabled:opacity-50"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Função</label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                disabled={!timerDone}
                className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-background text-foreground outline-none focus:border-verde transition-colors disabled:opacity-50"
                placeholder="Sua função"
              />
            </div>
          </div>

          <p className="text-[11px] text-muted-foreground mb-2 text-center">Assine no campo abaixo com o dedo ou mouse:</p>

          <SignatureCanvas onSignatureChange={handleSignatureChange} disabled={!timerDone} />

          <label className="flex items-start gap-2.5 bg-verde/[0.06] border border-verde/20 rounded-lg p-3 mb-3.5 text-xs text-foreground leading-relaxed italic cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              disabled={!timerDone}
              className="mt-0.5 flex-shrink-0 accent-verde w-4 h-4"
            />
            Declaro que li e compreendi o conteúdo deste Diálogo de Segurança e me comprometo a seguir as orientações apresentadas.
          </label>

          <button
            onClick={handleSubmit}
            disabled={!canSubmit || isSending}
            className="w-full py-4 rounded-[10px] border-none bg-gradient-button text-primary-foreground font-display text-[17px] font-bold tracking-wider flex items-center justify-center gap-2 transition-all active:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSending ? "⏳ ENVIANDO..." : "✅ CONFIRMAR ASSINATURA"}
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-[10px] text-muted-foreground py-4 px-4 leading-relaxed">
        © Grupo Moreno · CTA – Diálogo de Segurança · Fortalecer · Conectar · Crescer
      </div>
    </div>
  );
};

export default DSSViewer;
