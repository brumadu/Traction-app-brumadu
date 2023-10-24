import { Typography, Image, Col, Row, Menu, MenuProps } from "antd";
import {
  MailOutlined,
} from '@ant-design/icons';
import { assets } from "../api/fetchAssets";

const { Text } = Typography;

type MenuItem = Required<MenuProps>['items'][number];

interface assetsProps {
  data: assets;
}

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}


export function CollapseItem(assets: assetsProps) {
 
  return (
    <Row>
      <Col>
        <Image width={200} src={assets.data.image} />
      </Col>
      <Col>
        <Col>
          <Text> {assets.data.name}</Text>
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