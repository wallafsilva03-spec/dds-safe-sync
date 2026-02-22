import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { login } from "@/services/api";
import logoMoreno from "@/assets/logo-moreno.png";

const Login = () => {
  const [cracha, setCracha] = useState("");
  const [senha, setSenha] = useState("123");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!cracha.trim()) {
      setError("Informe o crachá.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const result = await login(cracha.trim(), senha.trim() || "123");

      if (result?.success === true && result?.user) {
        setUser(result.user);
        navigate("/dds");
      } else {
        setError(result?.error || "Crachá ou senha inválidos.");
      }
    } catch (err) {
      setError("Falha de conexão com o servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="bg-gradient-header w-full max-w-[400px] rounded-t-xl px-6 py-8 flex flex-col items-center gap-3">
        <img src={logoMoreno} alt="Grupo Moreno" className="h-[80px] object-contain rounded-lg bg-white/[0.08] p-1.5" />
        <h1 className="font-display text-[24px] font-extrabold text-primary-foreground text-center tracking-wide">
          DIÁLOGO DE SEGURANÇA
        </h1>
        <p className="text-xs text-primary-foreground/65 text-center">Faça login com seu crachá</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-card border border-border border-t-0 rounded-b-xl w-full max-w-[400px] p-6 flex flex-col gap-4"
      >
        <div>
          <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
            Crachá
          </label>
          <input
            type="text"
            value={cracha}
            onChange={(e) => setCracha(e.target.value)}
            className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-background text-foreground outline-none focus:border-verde transition-colors"
            placeholder="Número do crachá"
            autoFocus
          />
        </div>
        <div>
          <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
            Senha
          </label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-background text-foreground outline-none focus:border-verde transition-colors"
            placeholder="Senha"
          />
        </div>

        {error && <p className="text-xs text-destructive text-center font-bold">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 rounded-[10px] bg-gradient-button text-primary-foreground font-display text-[16px] font-bold tracking-wider flex items-center justify-center gap-2 transition-all active:opacity-90 active:scale-[0.98] disabled:opacity-50"
        >
          {loading ? "⏳ ENTRANDO..." : "🔐 ENTRAR"}
        </button>
      </form>

      <p className="text-[10px] text-muted-foreground mt-6 text-center">© Grupo Moreno · CTA – Diálogo de Segurança</p>
    </div>
  );
};

export default Login;
