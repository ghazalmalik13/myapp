
import { Icon, Layout , Menu } from 'antd';
import * as React from 'react';
import styled from 'styled-components';

const { Sider } = Layout;

interface MenuItems {
  name: string;
  icon: string;
}

export interface PropTypes {
  menuItems: MenuItems[];
}

const SideBarMenu = styled(Menu)`
  width: 72px;
  border-right: none;
  background-color: grey;
  .menu-logo {
    min-height: 70px;
    margin: 0px !important;
    padding: 0px 15px !important;
    .logo-icon {
      width: 43px;
      margin-top: 15px !important;
    }
  }
  .menu {
    min-height: 70px;
    padding: 0px 20px !important;
    .icon {
      font-size: 32px !important;
      line-height: 70px !important;
    }
  }
  .ant-menu-item {
    opacity: 0.6;
    color: #000;
  }
  .ant-menu-item:hover {
    opacity: 1;
    color: red;
  }
  .ant-menu-item.menu-logo {
    opacity: 1;
    color:  #000;
  }
  .ant-menu-item-selected {
    opacity: 1;
  }
  .ant-menu-item-selected.menu-logo {
    border-right: none;
  }
`;

class MenuBarComponent extends React.PureComponent<PropTypes, {}> {
  public render() {
    const { menuItems } = this.props;
    return (
        <Sider collapsed={true} collapsedWidth="72" trigger={null}>
          <SideBarMenu
            defaultSelectedKeys={['/']}
            mode="inline"
            theme="dark"
            prefixCls=""
            className=""
          >
            {menuItems &&
              menuItems.map(menuItem => (
                <Menu.Item className="menu">
                    <div>
                      <Icon type={menuItem.icon} className="icon" />
                      <span>{menuItem.name}</span>
                    </div>
                </Menu.Item>
              ))}
          </SideBarMenu>
        </Sider>
    );
  }
}

export default MenuBarComponent;
