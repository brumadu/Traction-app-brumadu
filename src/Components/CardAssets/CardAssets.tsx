import { Typography, Image, Col, Row, Card, Modal } from "antd";

import { assets } from "../../Services/Axios/fetchAssets";
import { useState } from "react";
import { ModalAsset } from "./ModalAsset";
import { users } from "../../Services/Axios/fetchUsers";

const { Title, Text } = Typography;

interface assetsProps {
  assetsData: assets;
  users: users[];
  id?: number;
}

export function CardAssets(assets: assetsProps) {
  const [isModalOpen, setIsModalOpen] = useState(
    assets.id === assets.assetsData.id ? true : false
  );

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
                {"Healthscore: " + assets.assetsData.healthscore + "%"}
              </Title>
            </Col>
            <Col>
              <Title level={5}>{"Unidade: " + assets.assetsData.unitId}</Title>
            </Col>
            <Col>
              <Title level={5}>Responsáveis: </Title>
              {assets.assetsData.assignedUserIds.map((item) =>
                assets.users[Number(item) - 1]?.name !== undefined ? (
                  <Col>
                    <Text>
                      {assets.users[Number(item) - 1]?.name +
                        " - " +
                        assets.users[Number(item) - 1]?.email}
                    </Text>
                  </Col>
                ) : (
                  <></>
                )
              )}
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
