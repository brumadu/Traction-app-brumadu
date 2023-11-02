import { Col, Typography, Row, Card } from "antd";
import { fetchWorkorders, workorders } from "../Services/Axios/fetchWorkorders";
import { useEffect, useState } from "react";
import { assets, fetchAssets } from "../Services/Axios/fetchAssets";
import { CardWorkorder } from "../Components/CardWorkorderHome/CardWorkorder";
import { CardAssets } from "../Components/CardAssets/CardAssets";
import { CardAssetHome } from "../Components/CardAssetHome/ChartAssetHealth";

const { Title } = Typography;

export function Home() {
  const [workordersData, setWorkordersData] = useState<workorders[]>([]);
  const [assetsData, setAssetsData] = useState<assets[]>([]);

  useEffect(() => {
    fetchAssets().then((data) => {
      if (data) {
        setAssetsData(data);
      }
    });
  }, []);

  useEffect(() => {
    fetchWorkorders().then((data) => {
      if (data) {
        setWorkordersData(data);
      }
    });
  }, []);

  return (
    <Col>
      <Row justify={"space-around"}>
        <Col span={12}>
          <Col>
            <Title level={4}> Ativos em Alerta </Title>
          </Col>
          <Card
            style={{
              width: "90%",
              height: "75vh",
              overflowY: "auto",
              backgroundColor: "#fbfbfb",
            }}
          >
            {assetsData.map((item, i) =>
              item.status === "inAlert" ? <CardAssetHome data={item} /> : null
            )}
          </Card>
        </Col>
        <Col span={12}>
          <Col>
            <Title level={4}> Ordens de serviço em aberto </Title>
          </Col>
          <Card
            style={{
              width: "90%",
              height: "75vh",
              overflowY: "auto",
              backgroundColor: "#fbfbfb",
            }}
          >
            {workordersData.map((item) =>
              item.status === "in progress" ? (
                <CardWorkorder
                  title={item.title}
                  priority={item.priority}
                  description={item.description}
                  checklist={item.checklist}
                  assignedUsersId={item.assignedUsersId}
                  status={item.status}
                />
              ) : null
            )}
          </Card>
        </Col>
      </Row>
    </Col>
  );
}
