import { Col, Row } from 'antd';
import { SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useEffect, useState } from 'react';
import { MyMenu } from '../Components/Menu';
import { CollapseItem } from '../Components/CollapseItem';
import { assets } from '../api/fetchAssets';
import { getAssetsData } from '../utils/getAssetsData';

export function Assets() {
const items: MenuProps['items'] = [
  {
    label: 'Motor',
    key: 'motor',
    icon: <SettingOutlined rev={undefined} />,
  },
  {
    label: 'Fan',
    key: 'fan',
    icon: <AppstoreOutlined rev={undefined} />,
  },
];

const [currentKey, setCurrentKey] = useState('motor');
const onClick: MenuProps['onClick'] = (e) => {
  setCurrentKey(e.key);
};

const [assetsData, setAssetsData] = useState<assets[]>([]);
  
useEffect(() => {
  getAssetsData().then((data) => {
    if (data) {
      setAssetsData(data);
    }
  });
}, []);

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