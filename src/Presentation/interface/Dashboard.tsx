import { useState } from 'react';
import { Layout, Row, Typography, Radio, } from 'antd';
import { AssetsPage } from './pages/assetsPage';

const { Text } = Typography;
const { Header, Content } = Layout;

function Dashboard() {
  const [page, setPage] = useState('assets');
  return (
    <Content>
      <Header style={{backgroundColor: '#392282'}}/>
        <Row>
          <Radio.Group size="middle" onChange={(e) => setPage(e.target.value)}>
            <Radio.Button value={"assets"}>Ativos</Radio.Button>
            <Radio.Button value={"intern"}>Interno</Radio.Button>
            <Radio.Button value={"serviceOrder"}>Ordens de Serviço</Radio.Button>
          </Radio.Group>
        </Row>
        { page === "assets" ?
          <AssetsPage/>
          : 
          page === "intern" ?
          <>
          <Text>Intern</Text>
          </> :
          <><Text>else</Text></>}
      </Content>
  );
};

export default Dashboard;