import { Text } from "../../Text";

export const CardImg = ({
  bgImg,
  title,
  position,
  onClick,
}: {
  bgImg: string;
  title: string;
  position?: number;
  onClick?: () => void;
}) => {
  return (
    <div
    onClick={onClick}
      style={{
        backgroundImage: bgImg ? `url(${bgImg})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: `center ${position}%`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        borderRadius: "12px",
        padding: "12px",
        height: "200px",
        display: "flex",
        flexDirection: "column-reverse",
        backgroundBlendMode: "darken",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        cursor: "pointer",
      }}
    >
      <Text variant="h3">{title}</Text>
    </div>
  );
};
