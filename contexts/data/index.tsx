import { TrainingRoutine } from "@/definitions/types";
import React, { createContext, ReactNode, useState } from "react";

interface IDataContext {
  routines: TrainingRoutine[];
  setRoutines: React.Dispatch<React.SetStateAction<TrainingRoutine[]>>;
}

const DataContext = createContext<IDataContext>({} as IDataContext);

const DataProvider = ({ children }: { children: ReactNode }) => {
  const [routines, setRoutines] = useState<TrainingRoutine[]>([]);

  return (
    <DataContext.Provider value={{ routines, setRoutines }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };

