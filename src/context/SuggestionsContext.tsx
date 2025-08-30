import { createContext, useContext, type ReactNode, useState } from "react";
import dataBase from "../../data.json";

interface IDataContext {
  data: IData;
  setData: React.Dispatch<React.SetStateAction<IData>>;
}

const DataContext = createContext<IDataContext | undefined>(undefined);

export default function SuggestionsContext({
  children,
}: {
  children: ReactNode;
}) {
  const [data, setData] = useState<IData>(dataBase);
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a SuggestionsProvider");
  }
  return context;
}
