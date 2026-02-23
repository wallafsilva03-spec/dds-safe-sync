const API_URL =
  import.meta.env.VITE_APPS_SCRIPT_URL ||
  "https://script.google.com/macros/s/AKfycbxH9PTEPvwFgRG5ozNLvt0-5yP-SubTizotKjwh8wCXW3tYiYPQoj-dJPyrwesxLcMQ/exec";

export interface UserData {
  cracha: string;
  nome: string;
  funcao: string;
  setor: string;
  role: string;
}

export interface DDSRecord {
  tema_id: string;
  tema_titulo: string;
  signed_at: string;
  assinatura_url?: string;
}

export interface DashboardData {
  funcionarios_ativos: number;
  meta_por_funcionario: number;
  previsto_total: number;
  realizado_total: number;
  pendente_total: number;
  concluintes_30_de_30: number;
  dds_por_setor: { setor: string; total_assinaturas: number }[];
  abaixo_da_meta: {
    cracha: string;
    nome: string;
    funcao: string;
    setor: string;
    realizado_no_mes: number;
    faltam_no_mes: number;
  }[];
}

async function apiFetch<T>(params: Record<string, string>): Promise<T> {
  const url = new URL(API_URL);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`Erro na API: ${res.status}`);
  return res.json();
}

export async function login(
  cracha: string,
  senha: string,
): Promise<{ success: boolean; user?: UserData; error?: string }> {
  try {
    const data = await apiFetch<any>({ action: "login", cracha, senha });
    if ((data.ok || data.success) && data.user) {
      return { success: true, user: data.user };
    }
    return { success: false, error: data.error || "Crachá ou senha inválidos." };
  } catch {
    return { success: false, error: "Erro de conexão com o servidor." };
  }
}

export async function getMyDDS(mes_ref: string, cracha: string): Promise<DDSRecord[]> {
  try {
    const data = await apiFetch<any>({ action: "mydds", mes_ref, cracha });
    return data.records || [];
  } catch {
    return [];
  }
}

export async function signDDS(payload: {
  cracha: string;
  nome: string;
  funcao: string;
  setor: string;
  role: string;
  tema_id: string;
  tema_titulo: string;
  mes_ref: string;
  assinatura_png_base64: string;
  timestamp: string;
  pasta_colaborador: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "sign", ...payload }),
    });
    const data = await res.json();
    return { success: !!data.success, error: data.error };
  } catch {
    // Fallback for no-cors
    try {
      await fetch(API_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "sign", ...payload }),
      });
      return { success: true };
    } catch {
      return { success: false, error: "Falha ao enviar assinatura." };
    }
  }
}

export async function getDashboard(mes_ref: string, setor: string): Promise<DashboardData | null> {
  try {
    return await apiFetch<DashboardData>({ action: "dashboard", mes_ref, setor });
  } catch {
    return null;
  }
}
