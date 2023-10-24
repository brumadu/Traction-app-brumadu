import React, { useState } from "react"
import { Layout, Space, Row, Button } from 'antd'
import { Link } from "react-router-dom";

const { Sider } = Layout;

export function Sidebar() {
    return (
        <Sider theme='light' >
        <Row justify="space-around" align={'middle'} style={{ height: "100%" }}>
          <Space direction='vertical'>
            <Space.Compact size="large" direction='vertical' block>
              <Button type='text' onClick={() => <Link to="/assets"/>}>Ativos</Button>
            </Space.Compact>
            <Space.Compact size="large" direction='vertical' block>
              <Button type='text' onClick={() => <Link to="/intern"/>}>Interno</Button>
            </Space.Compact>
            <Space.Compact size="large" direction='vertical' block>
              <Button type='text' onClick={() => <Link to="/workorder"/>}>Ordens de Serviço</Button>
            </Space.Compact>
          </Space>
        </Row>
      </Sider>
    )
}