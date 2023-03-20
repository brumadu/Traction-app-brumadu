import { Collapse, Space, Typography, Image, Col, Row, Menu, MenuProps } from "antd";
import { CaretRightOutlined } from '@ant-design/icons';
import Highcharts from 'highcharts';
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import HighchartsReact from "highcharts-react-official";
import { MyData } from "../api/api";

const { Panel } = Collapse;
const { Text } = Typography;

type MenuItem = Required<MenuProps>['items'][number];

interface assetsProps {
  data: MyData;
}

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export function CollapseItem(assets: assetsProps) {
const items: MenuItem[] = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
    getItem('Option 5', '5'),
  ])
];

  return (
    <Row gutter={16}>
      <Col span={6}>
        <Image width={200} src={assets.data.image} />
      </Col>
      <Col span={10}>
        <Menu mode="horizontal" items={items}></Menu>
        <Text>CompanyId: {assets.data.companyId}</Text>
        <Text>Healthscore: {assets.data.healthscore}</Text>
        <Text>Status: {assets.data.status}</Text>
      </Col>
    </Row>
  );
}