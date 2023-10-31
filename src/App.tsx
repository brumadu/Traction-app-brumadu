import { Card, Col, Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';
import { Assets } from './Pages/Assets';
import { Home } from './Pages/Home';
import { Sidebar } from './Components/Layout/Sidebar';
import { Logo } from './Components/Layout/Logo';

const { Header, Sider, Content } = Layout;

export default function App() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ backgroundColor: '#175FF6', display: 'flex', alignItems: 'center' }}>
                <Logo />
            </Header>
            <Layout style={{ alignItems: 'center' }}>
                <Col span={2}>
                    <Sider style={{ backgroundColor: '#F1F1FF' }} />
                </Col>
                <Col span={4}>
                    <Card style={{ height: '85vh', display:'flex', alignItems:'center', justifyContent:'center' }}>
                        <Sidebar />
                    </Card>
                </Col>
                <Col span={16}>
                    <Card style={{ height: '85vh' }}>
                        <Content>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/assets" element={<Assets />} />
                                <Route path="/intern" element={<Assets />} />
                                <Route path="/workorder" element={<Assets />} />
                            </Routes>
                        </Content>
                    </Card>
                </Col>
                <Col span={2}>
                    <Sider style={{ backgroundColor: '#F1F1FF' }} />
                </Col>
            </Layout>
        </Layout>
    )
}