import React, { useContext, useState, useEffect, useRef } from 'react';
import { Form, Input, Select, DatePicker } from 'antd';
import { useDispatch } from 'react-redux';
import { Resizable } from 'react-resizable';
//import { isEmpty } from '../common/utilities';
import moment from 'moment';

import AppService from '../../services/AppService';


const EditableContext = React.createContext();
const { Option } = Select;
export const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>

                <tr   {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

export const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    tabIndex,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef();
    const form = useContext(EditableContext);
    const dispatch = useDispatch();
    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);

    const toggleEdit = async () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex]
        });
    };

    const save = async (data) => {
        const formData = await form.validateFields();
        let values = data.value;
        if (formData[data.value.field]) {
            values.value = formData[data.value.field];
            AppService.update(dispatch, values).then(info => {
                toggleEdit();
            })
        } else {
            toggleEdit();
        }

    };
    const onChange = async (data, date, dateString) => {

        if (moment(dateString, 'YYYY-MM-DD').isValid()) {
            data.value = dateString
            AppService.update(dispatch, data).then(info => {
                toggleEdit();
            })
        } else {
            toggleEdit();
        }


    }

    const handleDropdownChange = async (data) => {
        const formData = await form.validateFields();
        if (formData[data.field]) {
            data.value = formData[data.field];
            AppService.update(dispatch, data).then(info => {
                toggleEdit();
            })
        } else {
            toggleEdit();
        }

    }

    const getField = (dataIndex, children, record) => {

        const value = {
            id: record.id,
            field: dataIndex,
            value: children
        }

        switch (dataIndex) {
            case "receipt_date":
            case "invoice_date":
            case "ifs_inward_date":
            case "placed_to_qc_date":
            case "received_from_qc_date":
            case "given_to_purchase_date":
            case "received_from_purchase_date":
            case "received_by_a_cs":
                return (
                    <Form.Item

                    >
                        <DatePicker
                            ref={inputRef}
                            onChange={(date, dateString) => onChange(value, date, dateString)}
                            onBlur={(date, dateString) => onChange(value, date, dateString)}
                            name={dataIndex}
                            defaultValue={moment(children[1], 'YYYY-MM-DD').isValid() ? moment(children, 'YYYY-MM-DD') : ''}
                            format='YYYY-MM-DD'
                        //open={true}
                        />
                    </Form.Item>
                );
            case "status":
                return (
                    <Form.Item
                        style={{
                            margin: 0,
                        }}
                        name={dataIndex}
                    >
                        <Select ref={inputRef} style={{ width: 120 }} onBlur={() => handleDropdownChange(value)} onChange={() => handleDropdownChange(value)}>
                            <Option value="Rework">Rework</Option>
                            <Option value="Cleared">Cleared</Option>
                            <Option value="Complete/Partially Scrapped">Complete/Partially Scrapped</Option>
                        </Select>
                    </Form.Item>
                );




            default:
                return (
                    <Form.Item
                        style={{
                            margin: 0,
                        }}
                        name={dataIndex}
                    >
                        <Input ref={inputRef} value={children} onPressEnter={() => save({ value })} onBlur={() => save({ value })} />
                    </Form.Item>
                );
        }

    }

    let childNode = children

    if (editable) {
        childNode = editing ?

            getField(dataIndex, children, record)

            : (
                <div
                    className="editable-cell-value-wrap"
                    tabIndex={tabIndex}
                    onClick={toggleEdit}
                >
                    {children}
                </div >
            );
    }



    return <td {...restProps}> {childNode}</td>;
};





















export const ResizableTitle = props => {
    const { onResize, width, ...restProps } = props;
    if (!width) {
        return <th {...restProps} />;
    }

    return (
        <Resizable
            width={width}
            height={0}
            handle={
                <span
                    className="react-resizable-handle"
                    onClick={e => {
                        e.stopPropagation();
                    }}
                />
            }
            onResize={onResize}
            draggableOpts={{ enableUserSelectHack: false }}
        >
            <th {...restProps} />
        </Resizable>
    );
};

