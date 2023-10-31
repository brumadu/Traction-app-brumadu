import React, { useState } from "react"
import { Layout, Space, Row, Button, Card, Flex, Col } from 'antd'
import { useNavigate } from "react-router-dom";

const { Sider, Content } = Layout;

export function Sidebar() {
  const navigate = useNavigate();
  return (
          <Card>
            <Space.Compact size="large" direction='vertical' block>
              <Button type='text' onClick={() => navigate("/")}>Home</Button>
            </Space.Compact>
            <Space.Compact size="large" direction='vertical' block>
              <Button type='text' onClick={() => navigate("/assets")}>Ativos</Button>
            </Space.Compact>
            <Space.Compact size="large" direction='vertical' block>
              <Button type='text' onClick={() => navigate("/intern")}>Interno</Button>
            </Space.Compact>
            <Space.Compact size="large" direction='vertical' block>
              <Button type='text' onClick={() => navigate("/workorder")}>Ordens de Serviço</Button>
            </Space.Compact>
          </Card>
  )
}