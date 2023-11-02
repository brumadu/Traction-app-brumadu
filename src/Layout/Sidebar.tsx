import { Space, Button, Card, Col } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Card
      style={{
        height: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card>
        <Space.Compact size="large" direction="vertical" block>
          <Button
            type={location.pathname === "/" ? "primary" : "text"}
            onClick={() => navigate("/")}
          >
            Home
          </Button>
        </Space.Compact>
        <Space.Compact size="large" direction="vertical" block>
          <Button
            type={location.pathname === "/assets" ? "primary" : "text"}
            onClick={() => navigate("/assets")}
          >
            Ativos
          </Button>
        </Space.Compact>
        <Space.Compact size="large" direction="vertical" block>
          <Button
            type={location.pathname === "/workorder" ? "primary" : "text"}
            onClick={() => navigate("/workorder")}
          >
            Ordens de Serviço
          </Button>
        </Space.Compact>
        <Space.Compact size="large" direction="vertical" block>
          <Button
            type={location.pathname === "/intern" ? "primary" : "text"}
            onClick={() => navigate("/intern")}
          >
            Interno
          </Button>
        </Space.Compact>
      </Card>
    </Card>
  );
}
