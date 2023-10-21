import { Col, Row } from 'antd';
import { SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useEffect, useState } from 'react';
import { MyMenu } from '../Menu';
import { CollapseItem } from '../CollapseItem';
import { fetchAssets, allData } from '../../api/api';

export function AssetsPage() {
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

const [currentKey, setCurrentKey] = useState('motor');
const onClick: MenuProps['onClick'] = (e) => {
  setCurrentKey(e.key);
};

const [assetsData, setAssetsData] = useState<allData[]>([]);
useEffect(() => {
  fetchAssets().then((data) => {
    if (data) {
      setAssetsData(data);
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
    <Col>
      <Row justify='space-around'>
        <MyMenu data={'fan'} items={items} onClick={onClick} />
      </Row>
      <Row gutter={16} justify="center">
        {assetsData.map((item) => (
          item.model === currentKey ?
            <Col span={12}>
              <CollapseItem data={item} />
            </Col>
            : <></>
        ))}
      </Row>
    </Col>
  );
}