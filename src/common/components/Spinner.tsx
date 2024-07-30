import { FunctionComponent } from "react";
import "./style.scss";

const Spinner: FunctionComponent<{ fullScreen?: boolean }> = ({
  fullScreen = true,
}) => {
  return (
    <div
      className={`flex center p-5 ${fullScreen ? "full-screen" : ""}`}
      data-testid="spinner"
    >
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
