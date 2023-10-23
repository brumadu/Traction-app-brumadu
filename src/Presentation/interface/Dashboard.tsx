import { useState } from 'react';

import { Layout, Typography, Space, Row, Button, Anchor } from 'antd';

import { AssetsPage } from './pages/assetsPage';

const { Text } = Typography;
const { Header, Content, Footer, Sider } = Layout;

function Dashboard() {
  const [page, setPage] = useState('assets');
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ backgroundColor: '#abcabc' }} />
      <Layout>
        <Sider theme='light' />
        <Sider theme='light' >
          <Row justify="space-around" align={'middle'} style={{ height: "100%" }}>
            <Space direction='vertical'>
              <Space.Compact size="large" direction='vertical' block>
                <Button type='text' onClick={() => setPage("assets")}>Ativos</Button>
              </Space.Compact>
              <Space.Compact size="large" direction='vertical' block>
                <Button type='text' onClick={() => setPage("intern")}>Interno</Button>
              </Space.Compact>
              <Space.Compact size="large" direction='vertical' block>
                <Button type='text' onClick={() => setPage("serviceOrder")}>Ordens de Serviço</Button>
              </Space.Compact>

            </Space>
          </Row>
        </Sider>
        <Content>
          {page === "assets" ?
            <AssetsPage />
            :
            page === "intern" ?
              <>
                <Text>Intern</Text>
              </> :
              <><Text>else</Text></>}
        </Content>
        <Sider style={{ backgroundColor: '#FFFFFF' }} />
      </Layout>
      <Footer style={{ backgroundColor: '#abcabc' }} />

    </Layout>
  );
};

export default Dashboard;