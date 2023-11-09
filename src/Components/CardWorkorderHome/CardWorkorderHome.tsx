import { Card, Checkbox, Col, Divider, Row } from "antd";
import { Typography } from "antd";
import { workorders } from "../../Services/Axios/fetchWorkorders";
import { assets } from "../../Services/Axios/fetchAssets";
import { users } from "../../Services/Axios/fetchUsers";

const { Title, Text } = Typography;

interface workordersData {
  workordersData: workorders;
  users: users[];
  assets: assets[];
}

export function CardWorkorderHome(data: workordersData) {
  return (
    <Card hoverable={true} style={{ marginBottom: 10 }}>
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

        <Title
          level={2}
          type={
            data.workordersData.status === "in progress" ? "warning" : "success"
          }
          style={{ margin: 0 }}
        >
          {data.workordersData.status}
        </Title>
        <Title level={5}>{data.workordersData.description}</Title>
      </Col>
    </Card>
  );
}
