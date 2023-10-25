import { Col, Layout, Typography, Row } from 'antd';
import { AssetChart } from '../Components/Templates/AssetChartHome';
import { WorkorderCardHome } from '../Components/Templates/WorkorderCardHome';
import { fetchWorkorders, workorders } from '../api/fetchWorkorders';
import { useEffect, useState } from 'react';

const { Text, Title } = Typography;

export function Home() {
  const [workordersData, setWorkordersData] = useState<workorders[]>([]);

  useEffect(() => {
    fetchWorkorders().then((data) => {
      if (data) {
        setWorkordersData(data);
      }
    });
  }, []);

  return (
    <Layout>
      <Row style={{ backgroundColor: '#FFFFFF' }}>
        <Col span={12}>
          <Row justify={'center'} >
            <Col style={{ backgroundColor: '#aaaaaa', borderRadius: 20, paddingInline: 10 }}>
              <Title level={4}> ATIVOS EM ALERTA </Title>
            </Col>
          </Row>
          <Col>
            <AssetChart />
          </Col>
        </Col>
        <Col span={12}>
          <Row justify={'center'} >
            <Col style={{ backgroundColor: '#aaaaaa', borderRadius: 20, paddingInline: 10 }}>
              <Title level={4}> ORDEM DE SERVIÇO </Title>
            </Col>
          </Row>
          <Row>
            {
              workordersData.map((item) => (
                (item.priority === "high") ?
                  <WorkorderCardHome 
                  title={item.title} 
                  priority={item.priority} 
                  description={item.description} 
                  checklist={item.checklist} 
                  assignedUsersId={item.assignedUsersId} />
                  : null
              ))
            }

            {/* <Col>
              <Text> MAIOR PRIORIDADE 1 </Text>
              <Col>
                <Text>Priority</Text>
                <Text>Title</Text>
                <Text>Description</Text>
                <Text>Checklist with False</Text>
                <Text>task Description</Text>
                <Text>Assigned Users</Text>

              </Col>
            </Col> */}
            <Col>
              <Text> MAIOR PRIORIDADE 2 </Text>
              <Col>
                <Text>Priority</Text>
                <Text>Title</Text>
                <Text>Description</Text>
                <Text>Checklist with False</Text>
                <Text>task Description</Text>
                <Text>Assigned Users</Text>
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout>
  )
};

