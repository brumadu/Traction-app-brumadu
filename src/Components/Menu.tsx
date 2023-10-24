import { Menu } from 'antd';
import { SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useState } from 'react';

interface menuProps{
    data: string;
    items: MenuProps['items'];
    onClick: MenuProps['onClick'];
  }



export function MyMenu(menu: menuProps) {
    
  return (
    <Menu  onClick={menu.onClick} mode='horizontal' items={menu.items} style={{width: '100%', backgroundColor: 'lightgrey'}} >
    
    </Menu>
  );
}