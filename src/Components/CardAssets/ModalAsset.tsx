import { Col, Modal, Row, Typography, Image, Carousel } from "antd";
import { ChartModalAssets } from "./ChartModalAssets";
import { assets } from "../../Services/Axios/fetchAssets";
import { CardModalAssets } from "./CardModalAssets";
import { users } from "../../Services/Axios/fetchUsers";
import { Link } from "react-router-dom";

const { Title } = Typography;

interface modalProps {
  users: users[];
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
      <Title level={2}> {assets.data.name} </Title>
      <Row style={{ height: "50vh" }}>
        <Col span={8}>
          <Image
            src={assets.data.image}
            style={{ borderRadius: 10, width: "90%" }}
          />
          <Col style={{ overflowY: "auto", height: "30vh" }}>
            <Title level={3}>Responsáveis:</Title>
            {assets.data.assignedUserIds.map((item, i) => (
              <Link
                to={`/intern/${assets.users[Number(item) - 1]?.unitId}/${
                  assets.users[Number(item) - 1]?.unitId
                }`}
              >
                <Col
                  style={{
                    backgroundColor: "#f1f1f1",
                    borderRadius: 10,
                    width: "90%",
                    marginBottom: 10,
                    padding: 10,
                  }}
                >
                  <Col>
                    <Title level={5}>
                      {assets.users[Number(item) - 1]?.name}
                    </Title>
                  </Col>
                  <Col>
                    <Title level={5}>
                      {"Email: " + assets.users[Number(item) - 1]?.email}
                    </Title>
                  </Col>
                </Col>
              </Link>
            ))}
          </Col>
        </Col>
        <Col span={16}>
          <Carousel
            style={{
              backgroundColor: "#175FF6",
              borderRadius: 10,
              height: "50vh",
              padding: 10,
              paddingBottom: 30,
            }}
            effect="fade"
          >
            <div>
              <Col style={{ borderRadius: 10 }}>
                <ChartModalAssets assets={assets.data.healthHistory} />
              </Col>
            </div>
            <div>
              <CardModalAssets data={assets.data} />
            </div>
          </Carousel>
        </Col>
      </Row>
    </Modal>
  );
}
