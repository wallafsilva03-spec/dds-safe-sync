import { useState } from "react";
import SelectionScreen from "@/components/SelectionScreen";
import DSSViewer from "@/components/DSSViewer";
import { dssItems } from "@/data/dssContent";

const Index = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [signedIds, setSignedIds] = useState<number[]>([]);

  const selectedDSS = selectedId !== null ? dssItems.find((d) => d.id === selectedId) : null;

  const handleSigned = (id: number) => {
    setSignedIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  if (selectedDSS) {
    return (
      <DSSViewer
        dss={selectedDSS}
        onBack={() => setSelectedId(null)}
        onSigned={handleSigned}
      />
    );
  }

  return (
    <SelectionScreen
      dssItems={dssItems}
      signedIds={signedIds}
      onSelectDSS={setSelectedId}
    />
  );
};

export default Index;
