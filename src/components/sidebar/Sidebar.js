import {Menu} from 'antd';
import {useLocation} from 'react-router-dom';
import {
    UserOutlined,
    DashboardOutlined,
    UsergroupDeleteOutlined,
    ShoppingCartOutlined,
    SettingOutlined,
    UserAddOutlined,
    HomeOutlined,
    WarningOutlined,
    LoginOutlined,
    KeyOutlined
} from '@ant-design/icons';
import { Layout } from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';
const { SubMenu } = Menu;

const Sidebar = () => {
    let location = useLocation();

    return (
        <Layout.Sider
            breakpoint="lg"
            collapsedWidth="0">
            <Menu
                mode="inline"
                selectedKeys={[location.pathname]}
                style={{ height: '100%', borderRight: 0 }}
            >
                <Menu.Item key="/" icon={<HomeOutlined />}>
                    <Link to={'/'}>Home</Link>
                </Menu.Item>
                <Menu.Item key="/dashboard" icon={<DashboardOutlined />}>
                    <Link to={'/dashboard'}>Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="/customers" icon={<UsergroupDeleteOutlined />}>Customers</Menu.Item>
                <Menu.Item key="/products" icon={<ShoppingCartOutlined />}>Products</Menu.Item>
                <Menu.Item key="/account" icon={<UserOutlined />}>Account</Menu.Item>
                <Menu.Item key="/settings" icon={<SettingOutlined />}>Settings</Menu.Item>
                <SubMenu key="sub1" icon={<KeyOutlined />} title="Authentication">
                    <Menu.Item key="/login" icon={<LoginOutlined />}>Login</Menu.Item>
                    <Menu.Item key="/register" icon={<UserAddOutlined />}>Register</Menu.Item>
                </SubMenu>
                <Menu.Item key="/error" icon={<WarningOutlined />}>Error</Menu.Item>
            </Menu>
        </Layout.Sider>
    );
};

export default Sidebar;