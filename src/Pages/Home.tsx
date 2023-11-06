import { Col, Typography, Row, Card } from "antd";
import { fetchWorkorders, workorders } from "../Services/Axios/fetchWorkorders";
import { useEffect, useState } from "react";
import { assets, fetchAssets } from "../Services/Axios/fetchAssets";
import { CardWorkorder } from "../Components/CardWorkorder/CardWorkorder";
import { CardAssetHome } from "../Components/CardAssetHome/ChartAssetHealth";
import { users, fetchUsers } from "../Services/Axios/fetchUsers";

const { Title } = Typography;

export function Home() {
  const [workordersData, setWorkordersData] = useState<workorders[]>([]);
  const [assetsData, setAssetsData] = useState<assets[]>([]);
  const [users, setUsers] = useState<users[]>([]);

  useEffect(() => {
    fetchUsers().then((data) => {
      if (data) {
        setUsers(data);
      }
    });
  }, []);

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
            {workordersData.map((item, index) =>
              item.status === "in progress" ? (
                <CardWorkorder
                  assets={assetsData}
                  workordersData={workordersData[index]}
                  users={users}
                />
              ) : null
            )}
          </Card>
        </Col>
      </Row>
    </Col>
  );
}
