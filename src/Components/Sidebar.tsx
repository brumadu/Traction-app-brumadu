import React, { useState } from "react"
import { Layout, Space, Row, Button } from 'antd'
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

export function Sidebar() {
  const navigate = useNavigate();
    return (
        <Sider theme='light' >
        <Row justify="space-around" align={'middle'} style={{ height: "100%" }}>
          <Space direction='vertical'>
            <Space.Compact size="large" direction='vertical' block>
              <Button type='text' onClick={() => navigate("/assets")}>Ativos</Button>
            </Space.Compact>
            <Space.Compact size="large" direction='vertical' block>
              <Button type='text' onClick={() => navigate("/intern")}>Interno</Button>
            </Space.Compact>
            <Space.Compact size="large" direction='vertical' block>
              <Button type='text' onClick={() => navigate("/workorder")}>Ordens de Serviço</Button>
            </Space.Compact>
          </Space>
        </Row>
      </Sider>
    )
}