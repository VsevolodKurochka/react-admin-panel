import React from 'react';
import {Breadcrumb, Card, Col, Row} from 'antd';
import { Avatar } from 'antd';
import { MoneyCollectOutlined, UsergroupDeleteOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

const { Title } = Typography;

const Home = () => {
    return (
        <>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
            </Breadcrumb>
        </>
    );
};

export default Home;
