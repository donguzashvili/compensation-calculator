import { Button, Checkbox, Input, TextView } from "@/UI";
import classes from "./CompoensationFormUI.module.scss";
import { CompensationComponentPropI } from "../../CompensationComponentT";
import { Dispatch, SetStateAction } from "react";

const CompensationFromUI: React.FC<CompensationComponentPropI> = ({
  days,
  income,
  onSubmit,
  result,
  setDays,
  setIncome,
  setTubercolosis,
  tubercolosis,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  const handleNumInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    dispatcher: Dispatch<SetStateAction<number | null>>
  ) => {
    const stringValue = e.target.value;
    const numericValue = Number(stringValue);

    if (stringValue === "") {
      dispatcher(null);
      return;
    }

    if (!Number.isNaN(numericValue)) {
      dispatcher(numericValue);
    }
  };

  return (
    <div className={classes.formWrapper}>
      <form onSubmit={handleSubmit}>
        <TextView tag="h4" type="title4" color="dark">
          Compensation Calculator
        </TextView>
        <Input
          placeholder="Enter average income"
          label="Average income"
          endText="€"
          value={Number(income)}
          onChange={(e) => handleNumInputChange(e, setIncome)}
        />
        <Input
          placeholder="Enter absence days"
          label="Days on sick-leave"
          endText="days"
          value={Number(days)}
          onChange={(e) => handleNumInputChange(e, setDays)}
        />
        <Checkbox
          label="I have tubercolosis"
          checked={tubercolosis}
          onChange={(e) => setTubercolosis(e.target.checked)}
        />
        <Button type="submit">Calculate</Button>
      </form>
      {result && (
        <>
          <div className={classes.result}>
            <div className={classes.resultBox}>
              <div>
                <TextView tag="p" type="subtitle2" color="dark">
                  The employer compensates
                </TextView>
                <TextView tag="p" type="subtitle2" weight={700} color="dark">
                  {result.employerDays} days
                </TextView>
              </div>
              <div>
                <TextView tag="p" type="subtitle1" weight={700} color="dark" className={classes.customLineHeight}>
                  {result.employerTotal.toLocaleString()}€
                </TextView>
                <TextView tag="p" type="subtitle3" color="gray">
                  Daily allowance
                </TextView>
                <TextView tag="p" type="subtitle3" color="gray">
                  {result.daily} €
                </TextView>
              </div>
            </div>
            <div className={classes.resultBox}>
              <div>
                <TextView tag="p" type="subtitle2" color="dark">
                  Health Insurance compensates
                </TextView>
                <TextView tag="p" type="subtitle2" weight={700} color="dark">
                  {result.insuranceDays} days
                </TextView>
              </div>
              <div>
                <TextView tag="p" type="subtitle1" weight={700} color="dark" className={classes.customLineHeight}>
                  {result.insuranceTotal.toLocaleString()}€
                </TextView>
                <TextView tag="p" type="subtitle3" color="gray">
                  Daily allowance
                </TextView>
                <TextView tag="p" type="subtitle3" color="gray">
                  {result.daily} €
                </TextView>
              </div>
            </div>
          </div>
          <div className={classes.subtotal}>
            <TextView tag="p" type="subtitle2" color="dark">
              Compensation total for {result.totalDays} days (net)
            </TextView>
            <TextView tag="p" type="title4" weight={700} color="dark" className={classes.total}>
              {result.total.toLocaleString()}€
            </TextView>
          </div>
        </>
      )}
    </div>
  );
};

export default CompensationFromUI;
