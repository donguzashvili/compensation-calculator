import { CompensationResultI } from "@/types";
import { Dispatch, SetStateAction } from "react";

export interface CompensationComponentPropI {
  income: number | null;
  setIncome: Dispatch<SetStateAction<number | null>>;
  days: number | null;
  setDays: Dispatch<SetStateAction<number | null>>;
  tubercolosis: boolean;
  setTubercolosis: Dispatch<SetStateAction<boolean>>;
  onSubmit: () => void;
  result: CompensationResultI | null;
}
