import React, { useState } from "react"
import { Layout, Space, Row, Button } from 'antd'

const { Sider } = Layout;

export function Sidebar() {
    const [page, setPage] = useState('assets');
    return (
        <Sider theme='light' >
        <Row justify="space-around" align={'middle'} style={{ height: "100%" }}>
          <Space direction='vertical'>
            <Space.Compact size="large" direction='vertical' block>
              <Button type='text' onClick={() => setPage('assets')}>Ativos</Button>
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
    )
}