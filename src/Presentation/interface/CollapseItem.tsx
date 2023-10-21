import { Typography, Image, Col, Row, Menu, MenuProps } from "antd";
import {
  MailOutlined,
} from '@ant-design/icons';
import { allData } from "../api/api";

const { Text } = Typography;

type MenuItem = Required<MenuProps>['items'][number];

interface assetsProps {
  data: allData;
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
    <Row>
      <Col>
        <Image width={200} src={assets.data.image} />
      </Col>
      <Col>
        <Col>
          <Menu mode="horizontal" items={items}></Menu>
        </Col>
        <Col >
          <Text>CompanyId: {assets.data.companyId}</Text>
        </Col>
        <Col>
          <Text>Healthscore: {assets.data.healthscore}</Text>
        </Col>
        <Col>
          <Text>Status: {assets.data.status}</Text>
        </Col>
      </Col>
    </Row>
  );
}