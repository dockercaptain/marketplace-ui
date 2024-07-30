import prometheus from "../../assets/images/prometheus.svg";
import kafka from "../../assets/images/kafka.svg";
import nats from "../../assets/images/nats.svg";
import postgress from "../../assets/images/postgress.svg";
import sonarqube from "../../assets/images/sonarqube.svg";
type loadingType = "eager" | "lazy";
type icons = Record<string, string>;

const ICONS: icons = { prometheus, kafka, nats, postgress, sonarqube };

export default function getIcon(
  key: string,
  className: string = "",
  loading = "eager" as loadingType
): JSX.Element {
  const isIconExist = !key || !ICONS[key];
  return isIconExist ? (
    <div>Missing Icon</div>
  ) : (
    <img
      src={ICONS[key]}
      loading={loading}
      alt={ICONS[key]}
      className={className}
    />
  );
}
