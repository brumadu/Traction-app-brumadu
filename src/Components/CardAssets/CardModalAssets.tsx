import { Card, Col, Row, Space, Typography } from "antd";
import { assets } from "../../Services/Axios/fetchAssets";

const { Text, Title } = Typography;

interface CardModalProps {
  data: assets;
}

export function CardModalAssets(assets: CardModalProps) {
  return (
    <Card>
      <Row>
        <Col span={12}>
          <Col
            style={{
              height: "95%",
              backgroundColor: "#f1f1f1",
              borderRadius: 10,
              padding: 6,
              margin: 6,
            }}
          >
            <Space direction="vertical">
              <Title level={4}>{assets.data.name}</Title>
              <Text>{"unit id: " + assets.data.unitId}</Text>
              <Text>{"healthscore: " + assets.data.healthscore + "%"}</Text>
              <Text>{"status: " + assets.data.status}</Text>
            </Space>
          </Col>
        </Col>
        <Col span={12}>
          <Col
            style={{
              height: "95%",
              backgroundColor: "#f1f1f1",
              borderRadius: 10,
              padding: 6,
              margin: 6,
            }}
          >
            <Title level={4}>Metrics</Title>
            <Space direction="vertical">
              <Text>
                {"last uptime: " +
                  new Date(assets.data.metrics.lastUptimeAt).getUTCHours() +
                  ":" +
                  new Date(assets.data.metrics.lastUptimeAt).getUTCMinutes() +
                  ":" +
                  new Date(assets.data.metrics.lastUptimeAt).getUTCSeconds()}
              </Text>
              <Text>
                {"total Collects: " + assets.data.metrics.totalCollectsUptime}
              </Text>
              <Text>
                {"total uptime: " + assets.data.metrics.totalUptime + "s"}
              </Text>
            </Space>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Col
            style={{
              height: "95%",
              backgroundColor: "#f1f1f1",
              borderRadius: 10,
              padding: 6,
              margin: 6,
            }}
          >
            <Title level={4}> Sensors </Title>
            <Space direction="vertical">
              <Text>{"Sensors: " + assets.data.sensors}</Text>
            </Space>
          </Col>
        </Col>
        <Col span={12}>
          <Col
            style={{
              height: "95%",
              backgroundColor: "#f1f1f1",
              borderRadius: 10,
              padding: 6,
              margin: 6,
            }}
          >
            <Title level={4}>Specifications</Title>
            <Space direction="vertical">
              <Text>{"power: " + assets.data.specifications.power}</Text>
              <Text>{"maxTemp: " + assets.data.specifications.maxTemp}</Text>
              <Text>{"rpm: " + assets.data.specifications.rpm}</Text>
            </Space>
          </Col>
        </Col>
      </Row>
    </Card>
  );
}
