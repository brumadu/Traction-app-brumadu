import { Typography, Image, Col, Row, Card, Modal } from "antd";

import { assets } from "../../Services/Axios/fetchAssets";
import { useState } from "react";
import { ChartAssets } from "./ChartAssets";
import { ModalAsset } from "./ModalAsset";

const { Title } = Typography;

interface assetsProps {
  data: assets;
}

export function CardAssets(assets: assetsProps) {
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
      <ModalAsset
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        data={assets.data}
      />
    </>
  );
}
