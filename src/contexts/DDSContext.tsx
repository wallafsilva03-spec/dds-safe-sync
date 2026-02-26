import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { DDSRecord, getMyDDS } from "@/services/api";

interface DDSContextType {
  records: DDSRecord[];
  mesRef: string;
  loading: boolean;
  refreshRecords: (cracha: string) => Promise<void>;
  addLocalRecord: (record: DDSRecord) => void;
}

const DDSContext = createContext<DDSContextType | undefined>(undefined);

function getCurrentMonthRef() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

export const DDSProvider = ({ children }: { children: ReactNode }) => {
  const mesRef = getCurrentMonthRef();
  const [records, setRecords] = useState<DDSRecord[]>([]);
  const [loading, setLoading] = useState(false);

  const refreshRecords = useCallback(async (cracha: string) => {
    setLoading(true);
    const r = await getMyDDS(mesRef, cracha);
    setRecords(r);
    setLoading(false);
  }, [mesRef]);

  // Otimisticamente adiciona o registro localmente para resposta imediata na UI
  const addLocalRecord = useCallback((record: DDSRecord) => {
    setRecords((prev) => {
      const exists = prev.find((r) => r.tema_id === record.tema_id);
      if (exists) return prev;
      return [...prev, record];
    });
  }, []);

  return (
    <DDSContext.Provider value={{ records, mesRef, loading, refreshRecords, addLocalRecord }}>
      {children}
    </DDSContext.Provider>
  );
};

export const useDDS = () => {
  const ctx = useContext(DDSContext);
  if (!ctx) throw new Error("useDDS must be used within DDSProvider");
  return ctx;
};
