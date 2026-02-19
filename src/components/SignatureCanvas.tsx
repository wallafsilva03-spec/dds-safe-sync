import { useRef, useState, useEffect, useCallback } from "react";

interface SignatureCanvasProps {
  onSignatureChange: (hasSignature: boolean, dataUrl: string) => void;
  disabled: boolean;
}

const SignatureCanvas = ({ onSignatureChange, disabled }: SignatureCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasContent, setHasContent] = useState(false);

  const getCtx = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    return canvas.getContext("2d");
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.scale(2, 2);
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#000000";
    }
  }, []);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [resizeCanvas]);

  const getPos = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    if ("touches" in e) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const startDraw = (e: React.MouseEvent | React.TouchEvent) => {
    if (disabled) return;
    const ctx = getCtx();
    if (!ctx) return;
    const { x, y } = getPos(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || disabled) return;
    const ctx = getCtx();
    if (!ctx) return;
    const { x, y } = getPos(e);
    ctx.lineTo(x, y);
    ctx.stroke();
    if (!hasContent) {
      setHasContent(true);
    }
  };

  const getSignatureDataUrl = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return "";
    // Create a temp canvas with white background for JPEG export
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tempCtx = tempCanvas.getContext("2d");
    if (!tempCtx) return "";
    tempCtx.fillStyle = "#ffffff";
    tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    tempCtx.drawImage(canvas, 0, 0);
    return tempCanvas.toDataURL("image/jpeg", 0.85);
  }, []);

  const endDraw = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    if (hasContent) {
      onSignatureChange(true, getSignatureDataUrl());
    }
  };

  // Re-trigger on hasContent change after draw ends
  useEffect(() => {
    if (hasContent && !isDrawing) {
      onSignatureChange(true, getSignatureDataUrl());
    }
  }, [hasContent, isDrawing, onSignatureChange, getSignatureDataUrl]);

  const clear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasContent(false);
    onSignatureChange(false, "");
  };

  return (
    <div>
      <div
        className={`relative rounded-lg border-2 border-dashed overflow-hidden mb-2 ${
          disabled ? "border-muted bg-muted/30 opacity-50" : "border-border bg-card"
        }`}
      >
        <canvas
          ref={canvasRef}
          className="w-full h-32 cursor-crosshair"
          style={{ touchAction: "none" }}
          onMouseDown={startDraw}
          onMouseMove={draw}
          onMouseUp={endDraw}
          onMouseLeave={endDraw}
          onTouchStart={startDraw}
          onTouchMove={draw}
          onTouchEnd={endDraw}
        />
        {!hasContent && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-sm text-muted-foreground/50">
              {disabled ? "⏳ Aguarde o tempo de leitura" : "✍️ Assine aqui"}
            </span>
          </div>
        )}
      </div>
      <div className="h-px bg-border mx-4" />
      <p className="text-center text-[10px] text-muted-foreground mt-1 mb-3 tracking-wider">
        ASSINATURA DO COLABORADOR
      </p>
      <div className="flex justify-end gap-2 mb-3">
        <button
          onClick={clear}
          disabled={disabled}
          className="px-3 py-2 rounded-md border border-border text-xs font-bold text-muted-foreground bg-transparent hover:bg-muted/50 transition-all disabled:opacity-50"
        >
          🗑 Limpar
        </button>
      </div>
    </div>
  );
};

export default SignatureCanvas;
