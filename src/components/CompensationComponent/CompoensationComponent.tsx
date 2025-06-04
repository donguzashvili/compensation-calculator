import ComopensationIntroUI from "./UI/CompensationIntroUI/CompensationIntroUI";
import CompensationFromUI from "./UI/CompoensationFormUI/CompensationFormUI";
import { CompensationComponentPropI } from "./CompensationComponentT";
import classes from "./CompensationComponent.module.scss";

const CompensationComponent: React.FC<CompensationComponentPropI> = (props) => {
  return (
    <div className={classes.compensationComponent}>
      <ComopensationIntroUI />
      <CompensationFromUI {...props} />
    </div>
  );
};

export default CompensationComponent;
