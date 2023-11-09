import { Card, Checkbox, Col, Divider, Row } from "antd";
import { Typography } from "antd";
import { workorders } from "../../Services/Axios/fetchWorkorders";
import { assets } from "../../Services/Axios/fetchAssets";
import { users } from "../../Services/Axios/fetchUsers";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

interface workordersData {
  workordersData: workorders;
  users: users[];
  assets: assets[];
}

export function CardWorkorder(data: workordersData) {
  return (
    <Card style={{ marginBottom: 10 }}>
      <Col>
        <Row justify={"space-between"}>
          <Title level={2} style={{ margin: 0 }}>
            {data.workordersData.title}
          </Title>
          <Title
            level={2}
            type={
              data.workordersData.status === "completed"
                ? "secondary"
                : data.workordersData.priority === "high"
                ? "danger"
                : "warning"
            }
            style={{ marginTop: 0 }}
          >
            {data.workordersData.priority}
          </Title>
        </Row>
        <Title level={5}>{data.workordersData.description}</Title>
        <Row justify={"space-between"}>
          <Title level={4} style={{ margin: 0 }}>
            {"Asset: " +
              data.assets[Number(data.workordersData.assetId) - 1]?.name}
          </Title>
          <Title
            level={4}
            type={
              data.workordersData.status === "in progress"
                ? "warning"
                : "success"
            }
            style={{ margin: 0 }}
          >
            {data.workordersData.status}
          </Title>
        </Row>
        <Divider></Divider>
        <Card>
          <Title level={3} style={{ marginTop: 5, margin: 0 }}>
            Tarefas:
          </Title>
          {data.workordersData.checklist.map((item) =>
            item.completed ? (
              <Col>
                <Checkbox defaultChecked disabled>
                  <Text>{item.task}</Text>
                </Checkbox>
              </Col>
            ) : (
              <Col>
                <Checkbox>
                  <Text>{item.task}</Text>
                </Checkbox>
              </Col>
            )
          )}
          <Divider />
          <Title level={3} style={{ margin: 0 }}>
            Usuários Responsáveis:
          </Title>
          {data.workordersData.assignedUserIds.map((item) =>
            data.users[Number(item) - 1]?.name !== undefined ? (
              <Link
                to={`/intern/${data.users[Number(item) - 1]?.companyId}/${
                  data.users[Number(item) - 1]?.unitId
                }`}
              >
                <Card hoverable={true} style={{ marginBottom: 10 }}>
                  <Text>
                    {data.users[Number(item) - 1]?.name +
                      " - " +
                      data.users[Number(item) - 1]?.email}
                  </Text>
                </Card>
              </Link>
            ) : null
          )}
        </Card>
      </Col>
    </Card>
  );
}
