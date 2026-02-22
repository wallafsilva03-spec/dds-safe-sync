import logoMoreno from "@/assets/logo-moreno.png";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

const AppHeader = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navItems = [
    { path: "/dds", label: "DDS" },
    { path: "/meus-dds", label: "Meus DDS" },
  ];

  if (user?.role === "analista_lider" || user?.role === "coordenacao_gerencia") {
    navItems.push({ path: "/dds-geral", label: "DDS Geral" });
  }

  if (user?.role === "coordenacao_gerencia") {
    navItems.push({ path: "/dashboard", label: "Dashboard" });
  }

  return (
    <div className="bg-gradient-header px-4 py-3 flex items-center gap-3">
      <img
        src={logoMoreno}
        alt="Grupo Moreno"
        className="h-[50px] w-[50px] object-contain rounded-md bg-white/[0.08] p-1 flex-shrink-0 cursor-pointer"
        onClick={() => navigate("/dds")}
      />
      <div className="flex-1 min-w-0">
        <p className="font-display text-[10px] tracking-widest uppercase text-primary-foreground/55">
          CTA – Grupo Moreno · DSS
        </p>
        {user && (
          <p className="text-[11px] text-primary-foreground/80 truncate">
            {user.nome} · {user.funcao}
          </p>
        )}
      </div>
      <nav className="flex items-center gap-2">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`font-display text-[11px] font-bold tracking-wider uppercase px-2.5 py-1.5 rounded-md transition-colors ${
              location.pathname.startsWith(item.path)
                ? "bg-white/20 text-primary-foreground"
                : "text-primary-foreground/60 hover:text-primary-foreground/90"
            }`}
          >
            {item.label}
          </button>
        ))}
        <button
          onClick={handleLogout}
          className="font-display text-[11px] font-bold text-primary-foreground/60 hover:text-primary-foreground/90 px-2 py-1.5"
        >
          Sair
        </button>
      </nav>
    </div>
  );
};

export default AppHeader;
