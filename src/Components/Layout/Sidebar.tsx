import React, { useState } from "react"
import { Space, Button, Card } from 'antd'
import { useNavigate, useLocation } from "react-router-dom";


export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
          <Card>
            <Space.Compact size="large" direction='vertical' block>
              <Button type={
                location.pathname === '/' ? 'primary' : 'text'
              } 
              onClick={() => navigate("/")}>Home</Button>
            </Space.Compact>
            <Space.Compact size="large" direction='vertical' block>
              <Button type={
                location.pathname === '/assets' ? 'primary' : 'text'
              } 
              onClick={() => navigate("/assets")}>Ativos</Button>
            </Space.Compact>
            <Space.Compact size="large" direction='vertical' block>
              <Button type={
                location.pathname === '/intern' ? 'primary' : 'text'
              } 
               onClick={() => navigate("/intern")}>Interno</Button>
            </Space.Compact>
            <Space.Compact size="large" direction='vertical' block>
              <Button type={
                location.pathname === '/workorder' ? 'primary' : 'text'
              } 
               onClick={() => navigate("/workorder")}>Ordens de Serviço</Button>
            </Space.Compact>
          </Card>
  )
}