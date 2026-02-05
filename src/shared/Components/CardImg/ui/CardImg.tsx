import { Text } from "../../Text";

export const CardImg = ({ bgImg, title }: { bgImg: string; title: string }) => {
  return (
    <div
      style={{
        backgroundImage: bgImg ? `url(${bgImg})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        borderRadius: "12px",
        padding: "12px",
        height: "200px",
        display: "flex",
        flexDirection: "column-reverse",
        backgroundBlendMode: "darken",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
      }}
    >
      <Text variant="h3">{title}</Text>
    </div>
  );
};
