import { Card, Col, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import { assets, fetchAssets } from "../Services/Axios/fetchAssets";
import { CardAssets } from "../Components/CardAssets/CardAssets";
import { users, fetchUsers } from "../Services/Axios/fetchUsers";

const { Title } = Typography;

export function Assets() {
  const [assetModelList, setAssetModelList] = useState<String[]>([]);
  const [assetsData, setAssetsData] = useState<assets[]>([]);
  const [users, setUsers] = useState<users[]>([]);

  useEffect(() => {
    fetchAssets().then((data) => {
      if (data) {
        setAssetsData(data);
      }
    });
  }, []);

  useEffect(() => {
    fetchUsers().then((data) => {
      if (data) {
        setUsers(data);
      }
    });
  }, []);

  useEffect(() => {
    const unique = [...new Set(assetsData.map((item) => item.model))];
    setAssetModelList(unique);
  }, [assetModelList]);

  return (
    <Col>
      <Row
        style={{
          overflowX: "auto",
          flexWrap: "nowrap", // Prevent items from wrapping
          marginBottom: 10,
        }}
        justify={"start"}
      >
        {assetModelList.map((assetModelType) => (
          <Col span={12}>
            <Col>
              <Title level={4}> {assetModelType} </Title>
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
                {assetsData.map((item) =>
                  item.model === assetModelType ? (
                    <CardAssets assetsData={item} users={users} />
                  ) : null
                )}
              </Card>
            </Col>
          </Col>
        ))}
      </Row>
    </Col>
  );
}
