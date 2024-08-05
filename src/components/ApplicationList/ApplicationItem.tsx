import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { ApplicationType } from "./ApplicationTypes";
import getIcon from "../../common/utils/getIcon";

export type ApplicationItemProps = {
  application: ApplicationType;
};
const ApplicationItem: FunctionComponent<ApplicationItemProps> = ({
  application,
}) => {
  const navigate = useNavigate();
  const handleApplicationClick = () => {
    if (application.Id === 4) {
      navigate(`/application/postgres`);
    }
  };
  return (
    <div
      className="application-item-container"
      onClick={handleApplicationClick}
    >
      <div className="side-bar" />
      <div className="content">
        <div className="icon">
          {getIcon(application.ImageName, "w-100 h-100")}
        </div>
        <div>
          <div className="title">{application.AppName}</div>
          <div className="description">{application.Description}</div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationItem;
