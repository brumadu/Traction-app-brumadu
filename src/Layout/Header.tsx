import { Layout } from "antd";
import { Logo } from "../Assets/Images/Logo";

const { Header } = Layout;

export function HeaderLayout() {
  return (
    <Header
      style={{
        backgroundColor: "#175FF6",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Logo />
    </Header>
  );
}
