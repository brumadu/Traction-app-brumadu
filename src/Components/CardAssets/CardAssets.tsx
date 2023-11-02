import { Typography, Image, Col, Row, Card, Modal } from "antd";

import { assets } from "../../Services/Axios/fetchAssets";
import { useState } from "react";
import { ModalAsset } from "./ModalAsset";
import { users } from "../../Services/Axios/fetchUsers";

const { Title } = Typography;

interface assetsProps {
  assetsData: assets;
  users: users[];
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
      <Card hoverable={true} style={{ marginBottom: 10 }} onClick={showModal}>
        <Row>
          <Col span={14}>
            <Title level={3}> {assets.assetsData.name} </Title>
            <Col>
              <Title level={5}>{"Status: " + assets.assetsData.status}</Title>
            </Col>
            <Col>
              <Title level={5}>
                {"CompanyId: " + assets.assetsData.companyId}
              </Title>
            </Col>
            <Col>
              <Title level={5}>
                {"Healthscore: " + assets.assetsData.healthscore + "%"}
              </Title>
            </Col>
            <Col>
              <Title level={5}>{"Unidade: " + assets.assetsData.unitId}</Title>
            </Col>
            <Col>
              <Title level={5}>
                {"Responsáveis: " + assets.assetsData.assignedUserIds}
              </Title>
            </Col>
          </Col>
          <Col span={10}>
            <Image
              preview={false}
              src={assets.assetsData.image}
              style={{ borderRadius: 10, maxHeight: "20vh", width: "17vh" }}
            />
          </Col>
        </Row>
      </Card>
      <ModalAsset
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        data={assets.assetsData}
        users={assets.users}
      />
    </>
  );
}
