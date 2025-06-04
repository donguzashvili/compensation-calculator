import { TextView } from "../textview";
import classes from "./Button.module.scss";

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...rest }) => {
  return (
    <button {...rest} className={classes.button}>
      <TextView color="white" className={classes.button_text}>
        {children}
      </TextView>
    </button>
  );
};
