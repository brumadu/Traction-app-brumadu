import { useEffect, useState } from "react";
import { fetchWorkorders, workorders } from "../Services/Axios/fetchWorkorders";
import { Card, Col, Row, Typography } from "antd";
import { CardWorkorder } from "../Components/CardWorkorder/CardWorkorder";
import { assets, fetchAssets } from "../Services/Axios/fetchAssets";
import { users, fetchUsers } from "../Services/Axios/fetchUsers";

const { Title } = Typography;

export function Workorder() {
  const [workordersData, setWorkordersData] = useState<workorders[]>([]);
  const [assetsData, setAssetsData] = useState<assets[]>([]);
  const [users, setUsers] = useState<users[]>([]);

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

  useEffect(() => {
    fetchUsers().then((data) => {
      if (data) {
        setUsers(data);
      }
    });
  }, []);

  return (
    <Col>
      <Row>
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
        <Col span={12}>
          <Col>
            <Title level={4}> Ordens de serviço completos </Title>
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
              item.status !== "in progress" ? (
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
