import { Layout } from 'antd';
import { Sidebar } from './Components/Sidebar';
import { Assets } from './Pages/Assets';
// import Home from './Pages/Home';

const { Header, Footer, Sider, Content } = Layout;

export default function App() {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Header style={{ backgroundColor: '#abcabc' }}></Header>
                <Layout>
                    <Sider theme='light' />
                      <Sidebar />
                            <Content>
                                <Assets />
                            </Content>
                    <Sider style={{ backgroundColor: '#FFFFFF' }} />
                </Layout>
            <Footer style={{ backgroundColor: '#abcabc' }} />
        </Layout>
    )
}