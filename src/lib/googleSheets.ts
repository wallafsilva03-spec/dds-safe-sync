const STORAGE_KEY = "dss-gsheet-url";
const DEFAULT_GSHEET_URL = "https://script.google.com/macros/s/AKfycbwjdWAaUD2KvjMfP9OrcNxPJdNdD9qDAogqIOrrCZcGeDQpv_vYBMpKaCTAgXnncr8ZJQ/exec";

export function getGSheetUrl(): string {
  return localStorage.getItem(STORAGE_KEY) || DEFAULT_GSHEET_URL;
}

export function setGSheetUrl(url: string): void {
  localStorage.setItem(STORAGE_KEY, url);
}

export interface DSSSignatureData {
  dssTitle: string;
  nome: string;
  funcao: string;
  dataHora: string;
  assinaturaBase64: string;
  htmlComprovante?: string;
}

export async function sendToGoogleSheets(data: DSSSignatureData): Promise<{ success: boolean; error?: string }> {
  const url = getGSheetUrl();
  if (!url) {
    return { success: false, error: "URL do Google Sheets não configurada." };
  }

  try {
    await fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(data),
    });
    // no-cors doesn't give us response status, so we assume success
    return { success: true };
  } catch (err) {
    console.error("Erro ao enviar para Google Sheets:", err);
    return { success: false, error: "Falha ao enviar dados. Verifique a URL e tente novamente." };
  }
}
