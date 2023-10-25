import { Layout } from 'antd';
import { Route, Routes } from 'react-router-dom';
import { Assets } from './Pages/Assets';
import { Home } from './Pages/Home';
import { Sidebar } from './Components/Layout/Sidebar';

const { Header, Footer, Sider, Content } = Layout;

export default function App() {

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Header style={{ backgroundColor: '#abcabc' }}></Header>
            <Layout>
                <Sider theme='light' />
                <Sidebar/>
                <Content>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/assets" element={<Assets />} />
                        <Route path="/intern" element={<Assets />} />
                        <Route path="/workorder" element={<Assets />} />
                    </Routes>
                </Content>
                <Sider style={{ backgroundColor: '#FFFFFF' }} />
            </Layout>
            <Footer style={{ backgroundColor: '#abcabc' }} />
        </Layout>
    )
}