import { Card, Col, Row, Typography } from "antd";
import { units } from "../../Services/Axios/fetchUnits";
import { users } from "../../Services/Axios/fetchUsers";

const { Title } = Typography;

interface cardInternData {
  unityOpen?: units;
  usersData: users[];
}

export function CardIntern(data: cardInternData) {
  return (
    <Col span={12}>
      <Col>
        <Title level={4}> {data.unityOpen?.name} </Title>
      </Col>
      <Col>
        <Card
          style={{
            width: "90%",
            height: "75vh",
            overflowY: "auto",
            backgroundColor: "#fbfbfb",
            justifyContent: "center",
          }}
        >
          {data.usersData.map((item) =>
            item.unitId === data.unityOpen?.id ? (
              <Card style={{ marginBottom: 10 }}>
                <Row justify={"space-between"}>
                  <Title level={4} style={{ margin: 0 }}>
                    {item.name}
                  </Title>
                  <Title level={4} style={{ margin: 0 }}>
                    {item.email}
                  </Title>
                </Row>
              </Card>
            ) : null
          )}
        </Card>
      </Col>
    </Col>
  );
}
