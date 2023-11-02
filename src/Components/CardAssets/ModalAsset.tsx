import { Col, Modal, Row, Typography, Image } from "antd";
import { ChartAssets } from "./ChartAssets";
import { useState } from "react";
import { assets } from "../../Services/Axios/fetchAssets";

const { Title } = Typography;

interface modalProps {
  data: assets;
  isModalOpen: boolean | undefined;
  handleCancel: () => void;
}

export function ModalAsset(assets: modalProps) {
  return (
    <Modal
      centered
      open={assets.isModalOpen}
      footer={null}
      onCancel={assets.handleCancel}
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
          <ChartAssets assets={assets.data.healthHistory} />
        </Col>
      </Row>
    </Modal>
  );
}
