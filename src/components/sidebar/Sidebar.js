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
import './style.css';
const { SubMenu } = Menu;


const Sidebar = () => {
    let location = useLocation();

    return (
        <Layout.Sider
            className={"sidebar"}
            breakpoint="lg"
            collapsedWidth="0">
            <Menu
                mode="inline"
                selectedKeys={[location.pathname]}
                style={{ height: '100%', borderRight: 0, paddingTop: '75px' }}
            >
                <Menu.Item key="/" icon={<DashboardOutlined />}>
                    <Link to={'/'}>Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="/customers" icon={<UsergroupDeleteOutlined />}><Link to={'/customers'}>Customers</Link></Menu.Item>
                <Menu.Item key="/products" icon={<ShoppingCartOutlined />}><Link to={'/products'}>Products</Link></Menu.Item>
                <Menu.Item key="/account" icon={<UserOutlined />}><Link to={'/account'}>Account</Link></Menu.Item>
                <Menu.Item key="/settings" icon={<SettingOutlined />}><Link to={'/settings'}>Settings</Link></Menu.Item>
                <SubMenu key="sub1" icon={<KeyOutlined />} title="Authentication">
                    <Menu.Item key="/login" icon={<LoginOutlined />}><Link to={'/login'}>Login</Link></Menu.Item>
                    <Menu.Item key="/register" icon={<UserAddOutlined />}><Link to={'/register'}>Register</Link></Menu.Item>
                </SubMenu>
                <Menu.Item key="/404" icon={<WarningOutlined />}><Link to={'/404'}>404</Link></Menu.Item>
            </Menu>
        </Layout.Sider>
    );
};

export default Sidebar;