import { useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { signDDS } from "@/services/api";
import { getDDSTheme } from "@/data/ddsContent";
import { toast } from "@/hooks/use-toast";
import AppHeader from "@/components/AppHeader";
import SignatureCanvas from "@/components/SignatureCanvas";
import CountdownTimer from "@/components/CountdownTimer";

const TIMER_SECONDS = 300;

function getCurrentMonthRef() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

const DDSSign = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [timerDone, setTimerDone] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);
  const [signatureDataUrl, setSignatureDataUrl] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const ddsId = id || "DDS-01";
  const theme = getDDSTheme(ddsId);
  const ddsTitle = theme ? theme.title : ddsId.replace("DDS-", "DDS ");

  const handleTimerComplete = useCallback(() => setTimerDone(true), []);

  const handleSignatureChange = useCallback((hasSig: boolean, dataUrl: string) => {
    setHasSignature(hasSig);
    setSignatureDataUrl(dataUrl);
  }, []);

  const canSubmit = timerDone && hasSignature && agreed;

  const handleSubmit = async () => {
    if (!canSubmit || isSending || !user) return;
    setIsSending(true);

    const result = await signDDS({
      cracha: user.cracha,
      nome: user.nome,
      funcao: user.funcao,
      setor: user.setor,
      role: user.role,
      tema_id: ddsId,
      tema_titulo: ddsTitle,
      mes_ref: getCurrentMonthRef(),
      assinatura_png_base64: signatureDataUrl,
    });

    if (result.error) {
      toast({ title: "Aviso", description: result.error, variant: "destructive" });
    }
    setIsSending(false);
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div className="min-h-screen flex flex-col">
        <AppHeader />
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="bg-card border-2 border-verde rounded-xl p-6 text-center max-w-[400px] w-full animate-fade-up">
            <div className="w-14 h-14 rounded-full bg-gradient-button flex items-center justify-center text-3xl mx-auto mb-3">
              ✅
            </div>
            <h2 className="font-display text-xl font-bold text-secondary mb-1.5">
              Assinatura Registrada!
            </h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Obrigado, <strong className="text-secondary">{user?.nome}</strong>.<br />
              {ddsTitle} assinado com sucesso.
            </p>
            {signatureDataUrl && (
              <div className="max-w-[260px] mx-auto mt-3 bg-background border border-border rounded-lg p-1">
                <img src={signatureDataUrl} alt="Assinatura" className="w-full rounded-md" />
              </div>
            )}
            <button
              onClick={() => navigate("/dds")}
              className="mt-4 px-6 py-2.5 rounded-lg bg-gradient-button text-primary-foreground font-display text-sm font-bold tracking-wider transition-all active:scale-[0.97]"
            >
              ‹ VOLTAR AOS DDS
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />
      <div className="flex-1 p-4 max-w-[540px] w-full mx-auto">
        <h2 className="font-display text-xl font-extrabold text-foreground mb-4">
          ✍️ {ddsTitle}
        </h2>

        <CountdownTimer
          durationSeconds={TIMER_SECONDS}
          onComplete={handleTimerComplete}
          isActive={true}
        />

        <div className="bg-card border border-border rounded-xl p-4 mb-3.5">
          {theme ? (
            <div className="bg-background border border-border rounded-xl p-4 mb-4 max-h-[50vh] overflow-y-auto">
              <h3 className="font-display text-base font-bold text-secondary mb-3 text-center">{ddsTitle}</h3>
              <div
                className="prose prose-sm max-w-none text-foreground text-[13px] leading-relaxed
                  [&_h3]:font-display [&_h3]:text-sm [&_h3]:font-bold [&_h3]:text-secondary [&_h3]:mt-4 [&_h3]:mb-2
                  [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1
                  [&_li]:text-[13px] [&_li]:text-muted-foreground
                  [&_p]:text-muted-foreground [&_p]:mb-2
                  [&_strong]:text-foreground"
                dangerouslySetInnerHTML={{ __html: theme.content }}
              />
            </div>
          ) : (
            <div className="bg-gradient-header rounded-xl p-4 mb-4 text-primary-foreground font-display text-[14px] font-semibold text-center leading-relaxed tracking-wide">
              Leia o conteúdo do {ddsTitle} e assine abaixo para confirmar sua participação.
            </div>
          )}

          <p className="text-[11px] text-muted-foreground mb-2 text-center">
            Assine no campo abaixo com o dedo ou mouse:
          </p>

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
            className="w-full py-4 rounded-[10px] bg-gradient-button text-primary-foreground font-display text-[17px] font-bold tracking-wider flex items-center justify-center gap-2 transition-all active:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSending ? "⏳ ENVIANDO..." : "✅ CONFIRMAR ASSINATURA"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DDSSign;
