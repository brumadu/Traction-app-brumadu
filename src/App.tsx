import { Card, Col, Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import { Assets } from "./Pages/Assets";
import { Home } from "./Pages/Home";
import { Sidebar } from "./Layout/Sidebar";
import { HeaderLayout } from "./Layout/Header";

const { Sider, Content } = Layout;

export default function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <HeaderLayout />
      <Layout style={{ alignItems: "center" }}>
        <Col span={2}>
          <Sider />
        </Col>
        <Col span={4}>
          <Sidebar />
        </Col>
        <Col span={16}>
          <Card style={{ height: "85vh" }}>
            <Content>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/assets" element={<Assets />} />
                <Route path="/intern" element={<Assets />} />
                <Route path="/workorder" element={<Assets />} />
              </Routes>
            </Content>
          </Card>
        </Col>
        <Col span={2} />
      </Layout>
    </Layout>
  );
}
