import { useState } from "react";
import { getGSheetUrl, setGSheetUrl } from "@/lib/googleSheets";

const GSheetConfig = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState(getGSheetUrl);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setGSheetUrl(url.trim());
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="w-full max-w-[540px] px-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-[11px] text-muted-foreground hover:text-foreground transition-colors"
      >
        ⚙️ {isOpen ? "Fechar configuração" : "Configurar Google Sheets"}
      </button>

      {isOpen && (
        <div className="mt-2 bg-card border border-border rounded-xl p-3.5 animate-fade-up">
          <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
            URL do Apps Script Web App
          </label>
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://script.google.com/macros/s/.../exec"
            className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-background text-foreground outline-none focus:border-verde transition-colors mb-2"
          />
          <div className="flex items-center gap-2">
            <button
              onClick={handleSave}
              className="px-4 py-2 rounded-lg bg-gradient-button text-primary-foreground font-display text-xs font-bold tracking-wider"
            >
              💾 Salvar
            </button>
            {saved && <span className="text-[11px] text-verde font-bold">✅ Salvo!</span>}
          </div>
          <p className="text-[10px] text-muted-foreground mt-2 leading-relaxed">
            Cole aqui a URL do seu Google Apps Script publicado como Web App. As assinaturas serão enviadas automaticamente para a planilha.
          </p>
        </div>
      )}
    </div>
  );
};

export default GSheetConfig;
