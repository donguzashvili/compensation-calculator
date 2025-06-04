import { useId } from "react";
import { CheckboxPropsI } from "./CheckboxT";
import { TextView } from "../textview";
import classes from "./Checkbox.module.scss";

export const Checkbox: React.FC<CheckboxPropsI> = ({ label, ...rest }) => {
  const id = useId();

  return (
    <label htmlFor={rest.id || id} className={classes.checkboxLabel}>
      <input id={id} {...rest} type="checkbox" />
      {label && (
        <TextView className={classes.checkboxLabel_text} color="dark">
          {label}
        </TextView>
      )}
    </label>
  );
};
