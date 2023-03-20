import React, { useEffect, useState } from 'react';
import { Layout, Row, Col, Card, Menu, MenuProps, Typography, Space, Button } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { CaretRightOutlined } from '@ant-design/icons';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { fetchAssets, MyData } from '../api/api';
import { Collapse, theme } from 'antd';
import { MyMenu } from './Menu';
import { CollapseItem } from './CollapseItem';

const { Title, Text } = Typography;
const { Panel } = Collapse;
const { Header, Content } = Layout;

const items: MenuProps['items'] = [
  {
    label: 'Motor',
    key: 'motor',
    icon: <SettingOutlined />,
  },
  {
    label: 'Fan',
    key: 'fan',
    icon: <AppstoreOutlined />,
  },
];

function Dashboard() {
  const [currentKey, setCurrentKey] = useState('motor');
  const onClick: MenuProps['onClick'] = (e) => {
      setCurrentKey(e.key);
    };

  const [myData, setMyData] = useState<MyData[]>([]);
  useEffect(() => {
    fetchAssets().then((data) => {
      if (data) {
        setMyData(data);
      } else {
        console.error("Error fetching data");
      }
    }).catch((error) => console.error(error));
  }, [])

  const options = {
    title: {
      text: 'Health History',
    },
    yAxis: [
      {
        text: 'TimeStamp',
        data: [],
      }
    ]
  };




  return (
    <Layout>
      <Header>
      </Header>
      <Content>
            <Title>Ativos</Title>
        <Row justify='space-around'>
            <MyMenu data={'fan'} items={items} onClick={onClick}/>
        </Row>
        <Row gutter={16} justify="center">
        {
          myData.map((item) => (
            item.model == currentKey ?
            <Col span={12}>
              <CollapseItem data={item} />
            </Col>
            : <></>
            ))
          }
      </Row>
      </Content>
    </Layout>
  );
};

export default Dashboard;