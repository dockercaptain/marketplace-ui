import { FunctionComponent } from "react";
import { ApplicationType } from "./ApplicationTypes";
import getIcon from "../../common/utils/getIcon";

export type ApplicationItemProps = {
  application: ApplicationType;
};
const ApplicationItem: FunctionComponent<ApplicationItemProps> = ({
  application,
}) => {
  console.log(application);

  return (
    <div className="application-item-container">
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
