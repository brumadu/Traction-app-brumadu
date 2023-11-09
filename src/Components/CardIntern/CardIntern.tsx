import { Card, Col, Row, Typography } from "antd";
import { units } from "../../Services/Axios/fetchUnits";
import { users } from "../../Services/Axios/fetchUsers";

const { Title } = Typography;

interface cardInternData {
  unitId: number;
  unityData: units[];
  usersData: users[];
}

export function CardIntern(data: cardInternData) {
  return (
    <Col span={12}>
      <Col>
        {data.unityData[data.unitId - 1] !== undefined ? (
          <Title level={4}>{data.unityData[data.unitId - 1].name}</Title>
        ) : null}
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
          {data.unityData[data.unitId - 1] !== undefined
            ? data.usersData.map((item) =>
                Number(item.unitId) === data.unitId ? (
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
              )
            : null}
        </Card>
      </Col>
    </Col>
  );
}
