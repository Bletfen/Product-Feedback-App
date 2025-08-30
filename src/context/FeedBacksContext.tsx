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
interface IUpVoteHandler {
  upVoteHandler: (targetId: number) => void;
  upVotedIds: number[];
}
interface ISort {
  sortIsOpen: boolean;
  setSortIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DataContext = createContext<IDataContext | undefined>(undefined);
const FilterContext = createContext<IFilterByCategory | undefined>(undefined);
const UpVoteContext = createContext<IUpVoteHandler | undefined>(undefined);
const SortContext = createContext<ISort | undefined>(undefined);

export default function SuggestionsContext({
  children,
}: {
  children: ReactNode;
}) {
  const [data, setData] = useState<IData>(dataBase);
  const [filter, setFilter] = useState<string>("All");
  const [upVotedIds, setUpVotedIds] = useState<number[]>([]);
  const [sortIsOpen, setSortIsOpen] = useState<boolean>(false);
  const upVoteHandler = (targetId: number) => {
    if (upVotedIds.includes(targetId)) {
      setData((prev) => ({
        ...prev,
        productRequests: prev.productRequests.map((req) =>
          req.id === targetId ? { ...req, upvotes: req.upvotes - 1 } : req
        ),
      }));
      setUpVotedIds((prev) => prev.filter((id) => id !== targetId));
    } else {
      setData((prev) => ({
        ...prev,
        productRequests: prev.productRequests.map((req) =>
          req.id === targetId ? { ...req, upvotes: req.upvotes + 1 } : req
        ),
      }));
      setUpVotedIds((prev) => [...prev, targetId]);
    }
  };
  return (
    <DataContext.Provider value={{ data, setData }}>
      <FilterContext.Provider value={{ filter, setFilter }}>
        <UpVoteContext.Provider value={{ upVoteHandler, upVotedIds }}>
          <SortContext.Provider value={{ sortIsOpen, setSortIsOpen }}>
            {children}
          </SortContext.Provider>
        </UpVoteContext.Provider>
      </FilterContext.Provider>
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

export function useUpVoteHandler() {
  const context = useContext(UpVoteContext);
  if (!context) {
    throw new Error("UpVoteContext must be used within a SuggestionsProvider");
  }
  return context;
}

export function useSort() {
  const context = useContext(SortContext);
  if (!context) {
    throw new Error("SortContext must be used within a SuggestionsProvider");
  }
  return context;
}
