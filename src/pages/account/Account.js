import {Form, Input, Button, Row, Col, Breadcrumb, Select} from 'antd';
const { Option } = Select;

const Account = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

    return (
        <>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Account</Breadcrumb.Item>
            </Breadcrumb>
            <Row>
                <Col span={16}>
                    <Form
                        name="normal_login"
                        initialValues={{
                            remember: true,
                            prefix: '86',
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="firstname"
                            label={'First name'}
                            rules={[
                                {required: true, message: 'Please input your First Name!',},
                            ]}
                        >
                            <Input size="large" />
                        </Form.Item>
                        <Form.Item
                            name="lastname"
                            label={'Last Name'}
                            rules={[
                                {required: true, message: 'Please input your Last Name!',},
                            ]}
                        ><Input size="large" /></Form.Item>
                        <Form.Item
                            name="email"
                            label="E-mail"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input size={'large'} />
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            label="Phone Number"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone number!',
                                },
                            ]}
                        >
                            <Input
                                addonBefore={prefixSelector}
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{'marginRight': '10px'}}>
                                Save
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </>
    );
};

export default Account;
