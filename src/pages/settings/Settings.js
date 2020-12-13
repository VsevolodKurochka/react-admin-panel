import {Form, Input, Button, Row, Col, Breadcrumb, Select, Card, Checkbox} from 'antd';
const { Option } = Select;
const plainOptions = ['Email', 'Push Notifications', 'Text Messages', 'Phone calls'];

const Settings = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Settings</Breadcrumb.Item>
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
                        <Card title={'Notifications'} style={{'marginBottom': '15px'}}>
                            <Checkbox.Group options={plainOptions} defaultValue={['Email']} />
                        </Card>
                        <Card title={'Password'}>
                            <Form.Item
                                name="password"
                                label="Password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                label="Confirm Password"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(rule, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }

                                            return Promise.reject('The two passwords that you entered do not match!');
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button" style={{'marginRight': '10px'}}>
                                    Save
                                </Button>
                            </Form.Item>
                        </Card>

                    </Form>
                </Col>
            </Row>
        </>
    );
};

export default Settings;
