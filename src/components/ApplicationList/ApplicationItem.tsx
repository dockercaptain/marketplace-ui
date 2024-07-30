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
    <div className="application-item-container rounded">
      <div className="side-bar"></div>
      <div className="application-item-content">
        <div className="application-item-icon">
          {getIcon(application.ImageName, "w-100 h-100")}
        </div>
        <div className="application-item__content">
          <div className="application-item-title">{application.AppName}</div>
          <div className="application-item-description">
            {application.Description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationItem;
