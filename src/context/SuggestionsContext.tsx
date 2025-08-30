import { createContext, useContext, type ReactNode, useState } from "react";
import dataBase from "../../data.json";

interface IDataContext {
  data: IData;
  setData: React.Dispatch<React.SetStateAction<IData>>;
}
interface IFilterByCategory {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const DataContext = createContext<IDataContext | undefined>(undefined);
const FilterContext = createContext<IFilterByCategory | undefined>(undefined);

export default function SuggestionsContext({
  children,
}: {
  children: ReactNode;
}) {
  const [data, setData] = useState<IData>(dataBase);
  const [filter, setFilter] = useState<string>("All");
  return (
    <DataContext.Provider value={{ data, setData }}>
      <FilterContext value={{ filter, setFilter }}>{children}</FilterContext>
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

export function useFilterContext() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("FilterContext must be used within a SuggestionsProvider");
  }
  return context;
}
