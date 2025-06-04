import { useId } from "react";
import { InputPropI } from "./InputT";
import { TextView } from "../textview";
import classes from "./Input.module.scss";

export const Input: React.FC<InputPropI> = ({ label, endText, ...rest }) => {
  const id = useId();

  return (
    <label htmlFor={rest.id || id} className={classes.inputLabel}>
      <TextView type="subtitle2" color="dark">
        {label}
      </TextView>
      <div className={classes.inputWrapper}>
        <input type="text" id={id} {...rest} />
        {endText && (
          <TextView weight={700} color="dark">
            {endText}
          </TextView>
        )}
      </div>
    </label>
  );
};
