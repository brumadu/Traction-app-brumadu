import { Col, Layout, Typography, Row, List, Pagination, Space, Flex, Divider, Card } from 'antd';
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
      <Card style={{ height: '85vh'}}>
        <Row justify={"space-around"}>
          <Col span={12}>
            <Col>
              <Title level={4}> Ativos em Alerta </Title>
            </Col>
            <Card style={{ width: '90%', height: '75vh', overflowY: 'scroll'}}>
              <Flex align='center' vertical>
                <Col style={{ overflow: "auto", width: '90%' }}>
                  <AssetChart />
                  
                </Col>
              </Flex>
            </Card>
          </Col>
          <Col span={12}>
            <Col>
              <Title level={4}> Ordens de serviço em aberto </Title>
            </Col>
            <Card style={{ width: '90%', height: '75vh', overflowY: 'scroll'}}>
              <Flex align='center' vertical>
                <Col style={{ overflow: "auto", width: '90%' }}>
                  <Row justify={"center"}>
                    {
                      workordersData.map((item) => (
                        (item.status === "in progress") ?
                          <>
                            <WorkorderCardHome
                              title={item.title}
                              priority={item.priority}
                              description={item.description}
                              checklist={item.checklist}
                              assignedUsersId={item.assignedUsersId}
                              status={item.status} /><Divider />
                          </>
                          : null
                      ))
                    }
                  </Row>
                </Col>
              </Flex>
            </Card>

          </Col>
        </Row>
      </Card>
  )
};

