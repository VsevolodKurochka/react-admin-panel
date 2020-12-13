import React, {useState} from 'react';
import {Space, Breadcrumb, Card, Col, Row, Avatar, Typography, Table, Button} from 'antd';
import {
    MoneyCollectOutlined, UsergroupDeleteOutlined, SyncOutlined, DollarCircleOutlined,
    ArrowDownOutlined, ArrowUpOutlined
} from '@ant-design/icons';

const { Text, Title } = Typography;

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: Math.floor(Math.random() * 32) + 1,
        address: `London, Park Lane no. ${i}`,
    });
}

const Customers = () => {
    const [displayData, setDisplayData] = useState(data);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const rowSelection = {
        selectedRowKeys,
        onChange: setSelectedRowKeys,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT
        ],
    };

    const removeItems = () => {
        setDisplayData((currentData) => currentData.filter((item) => !selectedRowKeys.includes(item.key)))
        setSelectedRowKeys([]);
    };

    return (
        <>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Customers</Breadcrumb.Item>
            </Breadcrumb>
            <Card>
                <div style={{'marginBottom': '15px'}}>
                    <Button type="danger" disabled={!selectedRowKeys.length} onClick={removeItems}>
                        Remove
                    </Button>
                    <span style={{ marginLeft: 8 }}>
                      {selectedRowKeys.length ? `Selected ${selectedRowKeys.length} items` : ''}
                    </span>
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={displayData} />
            </Card>
        </>
    );
};

export default Customers;
