import React from 'react';
import {Space, Breadcrumb, Card, Col, Row, Avatar, Typography, Progress} from 'antd';
import {
    MoneyCollectOutlined, UsergroupDeleteOutlined, SyncOutlined, DollarCircleOutlined,
    ArrowDownOutlined, ArrowUpOutlined
} from '@ant-design/icons';
import './style.css';
import DashboardSales from './DashboardSales';
import {Colors} from 'utils';
import DashboardTable from './DashboardTable';
import DashboardTeam from './DashboardTeam';
import DashboardBrowsers from './DashboardBrowsers';

const { Text, Title } = Typography;

const headStyle = {'color': '#546e7a', 'textTransform': 'uppercase'};


const Dashboard = () => {
    return (
        <>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <Row gutter={16} style={{'marginBottom': '30px'}}>
                <Col span={6}>
                    <Card title="Budget"
                          className={'dashboard-card'}
                          headStyle={headStyle}
                          extra={<Avatar style={{'backgroundColor': Colors.red}} size={48} icon={<MoneyCollectOutlined />} />}
                          bordered={false}>
                        <Title level={3}>$24,000</Title>
                        <Row gutter={16} className="card-info">
                            <Col>
                                <ArrowDownOutlined style={{'color': Colors.red}} />
                                <Text type="danger">12%</Text>
                            </Col>
                            <Text disabled>Since last month</Text>
                        </Row>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Total customers"
                          className={'dashboard-card'}
                          headStyle={headStyle}
                          extra={<Avatar style={{'backgroundColor': Colors.green}} size={48} icon={<SyncOutlined />} />}
                          bordered={false}>
                        <Title level={3}>1,600</Title>
                        <Row gutter={16} className="card-info">
                            <Col>
                                <ArrowUpOutlined style={{'color': Colors.green}} />
                                <Text type="success">16%</Text>
                            </Col>
                            <Text disabled>Since last month</Text>
                        </Row>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="TASKS PROGRESS"
                          className={'dashboard-card'}
                          headStyle={headStyle}
                          extra={<Avatar style={{'backgroundColor': Colors.yellow}} size={48} icon={<UsergroupDeleteOutlined />} />}
                          bordered={false}>
                        <Title level={3}>75%</Title>
                        <Progress percent={75} status="active" showInfo={false} />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Total profit"
                          className={'dashboard-card'}
                          headStyle={headStyle}
                          extra={<Avatar style={{'backgroundColor': Colors.blue}} size={48} icon={<DollarCircleOutlined />} />}
                          bordered={false}>
                        <Title level={3}>$11,600</Title>
                    </Card>
                </Col>
            </Row>
            <Row gutter={16} style={{'marginBottom': '30px'}}>
                <Col span={18}>
                    <Card title="Latest Sales"
                          className={'dashboard-card'}
                          headStyle={headStyle}
                          bordered={false}>
                        <DashboardSales />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Online Review"
                          headStyle={headStyle}
                          extra={<Avatar style={{'backgroundColor': Colors.green}} size={48} icon={<MoneyCollectOutlined />} />}
                          bordered={false}>
                        <Title level={3}>2,781</Title>
                        <Row gutter={16} className="card-info">
                            <Col>
                                <ArrowDownOutlined style={{'color': '#ff4d4f'}} />
                                <Text type="danger">12%</Text>
                            </Col>
                            <Text disabled>Since last month</Text>
                        </Row>
                    </Card>
                    <Card bordered={false} style={{'backgroundColor': Colors.purple, 'marginTop': 10}}>
                        <Title level={5} style={{'color': 'white'}}>
                            I'm selfish, impatient and a little insecure.
                            I make mistakes, I am out of control and at times hard to handle.
                            But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.
                        </Title>
                        <Typography style={{'color': 'white'}}>Kurochka, Software Engineer</Typography>
                    </Card>
                </Col>
            </Row>
            <Row style={{'marginBottom': '30px'}}>
                <Col span={24}>
                    <Card>
                        <DashboardTable pagination={true} />
                    </Card>
                </Col>
            </Row>
            <Row style={{'marginBottom': '30px'}}>
                <Col span={24}>
                    <Card title={'TEAM TOTAL COMPLETED'} headStyle={headStyle}>
                        <DashboardTeam />
                    </Card>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={8}>
                    <Card className={'dashboard-card'} title={'Browsers'} headStyle={headStyle}>
                        <DashboardBrowsers />
                    </Card>
                </Col>
                <Col span={16}>
                    <Card className={'dashboard-card'} title={'Users'} headStyle={headStyle}>
                        <DashboardTable pagination={false} />
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Dashboard;
