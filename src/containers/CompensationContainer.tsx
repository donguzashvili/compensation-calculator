import { useState } from "react";
import { CompensationResultI } from "@/types";
import CompensationComponent from "@/components/CompensationComponent/CompoensationComponent";

const CompensationContainer = () => {
  const [income, setIncome] = useState<number | null>(null);
  const [days, setDays] = useState<number | null>(null);
  const [tubercolosis, setTubercolosis] = useState<boolean>(false);
  const [result, setResult] = useState<null | CompensationResultI>(null);

  const handleCalculate = () => {
    const totalDays = Math.min(days || 0, tubercolosis ? 240 : 182);
    if (!income || !totalDays) return;

    const daily = (income * 0.7) / 30;

    const employerDays = Math.max(Math.min(totalDays, 8) - 3, 0);
    const insuranceDays = totalDays > 8 ? totalDays - 8 : 0;

    const employerTotal = +(daily * employerDays).toFixed(2);
    const insuranceTotal = +(daily * insuranceDays).toFixed(2);
    const total = employerTotal + insuranceTotal;

    setResult({
      employerDays,
      employerTotal,
      insuranceDays,
      insuranceTotal,
      total,
      daily: +daily.toFixed(2),
    });
  };

  return (
    <CompensationComponent
      days={days}
      setDays={setDays}
      income={income}
      setIncome={setIncome}
      tubercolosis={tubercolosis}
      setTubercolosis={setTubercolosis}
      onSubmit={handleCalculate}
      result={result}
    />
  );
};

export default CompensationContainer;
