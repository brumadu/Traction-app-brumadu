import { Card, Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';
import { Assets } from './Pages/Assets';
import { Home } from './Pages/Home';
import { Sidebar } from './Components/Layout/Sidebar';
import { Logo } from './Components/Layout/Logo';

const { Header, Footer, Sider, Content } = Layout;

export default function App() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ backgroundColor: '#175FF6', display: 'flex', alignItems: 'center' }}>
                <Logo />
            </Header>
            <Layout style={{margin: 10}}>
                <Sider style={{ backgroundColor: '#F1F1FF' }} />
                <Sidebar />
                <Content>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/assets" element={<Assets />} />
                        <Route path="/intern" element={<Assets />} />
                        <Route path="/workorder" element={<Assets />} />
                    </Routes>
                </Content>
                <Sider style={{ backgroundColor: '#F1F1FF' }} />
            </Layout>
        </Layout>
    )
}