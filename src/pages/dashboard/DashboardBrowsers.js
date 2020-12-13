import { Table, Tag, Space } from 'antd';
import React from 'react';
import {Colors} from '../../utils';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Percentage',
        dataIndex: 'percentage',
        key: 'percentage',
        render: (value, row, index) => {
            return (
                <div style={{'textAlign': 'right'}}><Tag color={row.color}>{value}</Tag></div>
            );
        }
    }
];

const data = [
    {
        key: '1',
        name: 'Google Chrome',
        percentage: '43,3%',
        color: Colors.green
    },
    {
        key: '2',
        name: 'Mozilla Firefox',
        percentage: '33,4%',
        color: Colors.red
    },
    {
        key: '3',
        name: 'Apple Safari',
        percentage: '34,6%',
        color: Colors.blue
    },
    {
        key: '4',
        name: 'Internet Explorer',
        percentage: '12,3%',
        color: Colors.yellow
    },
    {
        key: '5',
        name: 'Opera Mini',
        percentage: '3,2%',
        color: Colors.green
    }
];

const DashboardBrowsers = () => {
    return (
        <Table columns={columns} dataSource={data} pagination={false} showHeader={false} />
    );
};

export default DashboardBrowsers;