import React, { useEffect } from 'react';
import { Form, Input, Button, Collapse } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import AppService from '../services/AppService';

const { Panel } = Collapse;
const Header = () => {
    return (
        <div className="impact-list-header">
            <h3>My Profile </h3>
            <br /><br />
        </div >
    )
};


const ProfileComponent = () => {
    const [form] = Form.useForm();
    const { user } = useSelector((state) => state.AppReducer);
    const dispatch = useDispatch();

    const Roles = props => {
        if (props.roles) {
            return (
                <ul>
                    {props.roles.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            )
        } else {
            return (
                <ul>
                    <li >No roles defined</li>
                </ul>
            )
        }
    }

    useEffect(() => {
        // dispatch({ type: 'GET_LOGIN_INFO' })
    }, [dispatch])



    const submitForm = (value) => {
        //   dispatch(updatePassword(value));
        form.resetFields();
        // logout();
        // })
    };



    return (

        <div className="main-content">
            <div className="profile">
                <Header />
                <div>
                    <p>Name:  {user.NAME}</p>
                    <p>Email: {user.EMAIL}  </p>
                    <div>Roles:<Roles roles={user.ROLE} /></div>

                </div>
                <Collapse accordion>
                    <Panel header="Change password" key="1">
                        <div className="profile-form">
                            <Form form={form}
                                name="login-form"
                                onFinish={submitForm}
                            >
                                <Form.Item
                                    label="New Password"
                                    name="new_password"
                                    className="new-password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter new password!',
                                        },
                                    ]}
                                >
                                    <Input.Password style={{ width: "60%" }} />
                                </Form.Item>

                                <Form.Item
                                    label="Confirm New Password"
                                    name="confirm_password"
                                    width="30%"
                                    rules={[

                                        ({ getFieldValue }) => ({
                                            validator(rule, value) {
                                                if (getFieldValue('new_password') !== value) {
                                                    return Promise.reject('Confirm password doesnot match');

                                                }
                                                return Promise.resolve();
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password style={{ width: "60%" }} />
                                </Form.Item>

                                <Form.Item shouldUpdate style={{ width: '10%' }}>
                                    {() => (
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            disabled={
                                                !form.isFieldsTouched(true) ||
                                                form.getFieldsError().filter(({ errors }) => errors.length).length
                                            }

                                        >
                                            Update
                                        </Button>

                                    )}
                                </Form.Item>



                            </Form>
                        </div>
                    </Panel>
                </Collapse>
            </div>
        </div>
    )

}
export default ProfileComponent;