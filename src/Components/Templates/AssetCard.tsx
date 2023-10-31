import {
  Typography,
  Image,
  Col,
  Row,
  Card,
  Space,
  Button,
  Popover,
  Modal,
} from "antd";

import { assets } from "../../Services/Axios/fetchAssets";
import { useState } from "react";
import { AssetChart } from "./AssetChartHome";
import { HealthAssetChart } from "./HealthAssetChart";

const { Text, Title } = Typography;

interface assetsProps {
  data: assets;
}

export function AssetCard(assets: assetsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card
        hoverable={true}
        style={{ width: "100%", marginBottom: 10 }}
        onClick={showModal}
      >
        <Row>
          <Col span={14}>
            <Title level={3}> {assets.data.name} </Title>
            <Col>
              <Title level={5}>{"Status: " + assets.data.status}</Title>
            </Col>
            <Col>
              <Title level={5}>{"CompanyId: " + assets.data.companyId}</Title>
            </Col>
            <Col>
              <Title level={5}>
                {"Healthscore: " + assets.data.healthscore + "%"}
              </Title>
            </Col>
            <Col>
              <Title level={5}>{"Unidade: " + assets.data.unitId}</Title>
            </Col>
            <Col>
              <Title level={5}>
                {"Responsáveis: " + assets.data.assignedUserIds}
              </Title>
            </Col>
          </Col>
          <Col span={10}>
            <Image
              preview={false}
              src={assets.data.image}
              style={{ borderRadius: 10, maxHeight: "20vh", width: "17vh" }}
            />
          </Col>
        </Row>
      </Card>
      <Modal
        centered
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
        width={"50%"}
      >
        <Title level={3}> {assets.data.name} </Title>
        <Row>
          <Col span={8}>
            <Image
              src={assets.data.image}
              style={{ borderRadius: 10, width: 250 }}
            />
            {assets.data.assignedUserIds.map((a, i) => (
              <Col>
                <Col>
                  <Title level={5}>
                    {"Responsável: " + assets.data.assignedUserIds[i]}
                  </Title>
                </Col>
                <Col>
                  <Title level={5}>
                    {"Email: " + assets.data.assignedUserIds[i]}
                  </Title>
                </Col>
              </Col>
            ))}
          </Col>
          <Col span={16}>
            <HealthAssetChart assets={assets.data.healthHistory} />
          </Col>
        </Row>
      </Modal>
    </>
  );
}
