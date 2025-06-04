import { TextViewPropI } from "./TextViewT";
import classes from "./TextView.module.scss";

export const TextView: React.FC<TextViewPropI> = ({
  tag: Tag = "span",
  type = "subtitle1",
  color = "white",
  weight,
  children,
  ...rest
}) => {
  const classNames = [
    classes.textView,
    classes[`textView_${type}`],
    classes[`textView_color_${color}`],
    classes[`textView_weight_${weight}`],
    rest.className,
  ].join(" ");

  return (
    <Tag {...rest} className={classNames}>
      {children}
    </Tag>
  );
};
