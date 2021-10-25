import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, loadSites, setCurrentSite, toggleDrawer } from '../../actions'
import { Form, Button, Select, Drawer, Col, Row } from "antd";
const { Option } = Select;



export const TableHeader = () => {
    const { sites, currentSite, currentCurrency } = useSelector(state => state.sites);
    const { planningData, drawer } = useSelector(state => state.planning);
    const { user } = useSelector(state => state.user);
    const currentTime = new Date();
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    var years = [currentTime.getFullYear(), (currentTime.getFullYear() + 1)]
    const [yearList, setList] = useState([]);
    const options = sites.map(item =>
        < Option key={item.site_id} > {item.site_id}</Option >
    )
    useEffect(() => {
        dispatch(loadSites())

    }, [user])

    const updateList = (arr) => {
        let list = [];
        let allYears = ((Object.keys(arr).map((year_week) => {
            return arr[year_week].year_week
        })
        ))
        years.map(year => {
            for (let i = 1; i <= 55; i++) {
                let key = (i <= 9) ? year + '-W0' + i : year + '-W' + i
                //  let key = year + '-W' + i;
                if (!allYears.includes(key))
                    list.push(key)
            }
        })
        setList(list)
    }

    const submitForm = (value) => {
        dispatch(add(value.year_week))
        form.resetFields()

    };

    const handleChange = (value) => {
        dispatch(setCurrentSite(value))
    };


    const onClose = () => {
        dispatch(toggleDrawer())
    };

    return (
        <>

            <Drawer
                title="Add new"
                onClose={onClose}
                visible={drawer}

                placement="top"
                bodyStyle={{ paddingBottom: 2 }}

            >
                <Form form={form} initialValues={{ site: currentSite }} name="horizontal_add_form" layout="vertical" className="add-new-drawer" onFinish={submitForm}>
                    <Row gutter={5}>
                        <Col span={5}>
                            <Form.Item
                                required
                                label="Site"
                                name="site"
                            >
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    onChange={handleChange}
                                >  {options}

                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={5} className="currency">

                            {currentCurrency}

                        </Col>
                    </Row>
                    <Row gutter={5}>
                        <Col span={5}>
                            <Form.Item
                                required
                                label="Year Week"
                                name="year_week"
                            >
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Select a week"
                                    optionFilterProp="children"
                                    onClick={e => updateList(planningData)}
                                >
                                    {yearList.map(item => (
                                        <Option key={item} value={item}  >
                                            {item}
                                        </Option>
                                    ))}

                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={5} className="button-add">
                            <Form.Item shouldUpdate>
                                {() => (
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        disabled={
                                            !form.getFieldsValue().year_week ||
                                            !form.getFieldsValue().site
                                        }

                                    >
                                        Add New
                                    </Button>



                                )}
                            </Form.Item>
                        </Col>
                    </Row>


                </Form>
            </Drawer>
        </>
    )

};