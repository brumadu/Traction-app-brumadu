import { Card, Col, Row, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { AssetCard } from '../Components/Templates/AssetCard';
import { assets } from '../api/fetchAssets';
import { getAssetsData } from '../utils/getAssetsData';

const { Text, Title } = Typography;


export function Assets() {
  const [assetModelList, setAssetModelList] = useState<String[]>([]);
  const [assetsData, setAssetsData] = useState<assets[]>([]);

  useEffect(() => {
    getAssetsData().then((data) => {
      if (data) {
        setAssetsData(data);
      }
    });
  }, []);

  useEffect(() => {
    const unique = [... new Set(assetsData.map((item) => item.model))]
    setAssetModelList(unique)
  }, [assetModelList])


  return (
    <Col>
      <Row style={{ overflowX: 'auto', marginBottom: 10 }}>
        {assetModelList.map((assetModelType) => (
          <Col span={12}>
            <Col>
              <Title level={4}> {assetModelType} </Title>
            </Col>
            <Col>
              <Card style={{ width: '90%', height: '75vh', overflowY: 'auto', backgroundColor: '#fbfbfb', justifyContent: 'center' }}>
                {assetsData.map((item) => (
                  item.model === assetModelType ?
                    <AssetCard data={item} />
                    : null
                ))}
              </Card>
            </Col>
          </Col>

        ))}
      </Row>

    </Col>
  );
}