import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import AppService from '../services/AppService';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom"
const LoginForm = (props) => {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const history = useHistory();
    const [response, setResponse] = useState("");
    const HandleSubmit = (values) => {
        AppService.login(dispatch, values).then(info => {

            if (info && info.data.status === 'success') {
                history.push("/");
            } else {
                setResponse("Login error. Please verify your email or password.")
                form.resetFields();
            }

        }
            // form.resetFields();

        )



    }

    const onFocus = () => {
        setResponse("")
    }

    return (
        <div className="login-form">
            {response}
            <Form form={form}
                name="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={HandleSubmit}
                layout="vertical"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    onFocus={onFocus}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input style={{ height: 35 }} />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password autoComplete="on" style={{ height: 35 }} />
                </Form.Item>
                <div className="actions">
                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        rules={[
                            {
                                required: false,
                            },
                        ]}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item shouldUpdate style={{ width: '10%' }}>
                        {() => (
                            <Button
                                type="primary"
                                htmlType="submit"
                                disabled={
                                    //    !form.isFieldsTouched(true) ||
                                    !form.getFieldsValue().email ||
                                    !form.getFieldsValue().password

                                }

                            >
                                Login
                            </Button>

                        )}
                    </Form.Item>


                </div>
            </Form>
        </div >
    );
};

export default LoginForm;