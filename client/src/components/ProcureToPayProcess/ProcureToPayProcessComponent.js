import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Popconfirm } from 'antd';
import { DeleteOutlined, PlusSquareFilled } from '@ant-design/icons';
import { EditableRow, ResizableTitle, EditableCell } from './editableRowColumn'
import socketIOClient from "socket.io-client";
import config from '../../config'

import AppService from '../../services/AppService';
const ProcureToPayProcessComponent = React.forwardRef((props, ref) => {
    const [response, setResponse] = useState("");
    const { columns, procureList } = useSelector((state) => state.AppReducer);
    const [loading, setLoader] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        const socket = socketIOClient(config.ioUrl);
        console.log(config.ioUrl)
        socket.on("FromAPI", data => {
            //    console.log(data)
            setResponse(data);

        });


        AppService.list(dispatch)
        setLoader(false)
    }, [dispatch])

    columns[0] = {
        title: 'Action',
        width: 10,
        dataIndex: "action",
        key: "action",
        editable: false,
        tabIndex: 3,
        render: (_, record) => {
            return (
                <span>
                    <Popconfirm title="Sure to Delete?" onConfirm={() => AppService.delete(dispatch, record)}>
                        <DeleteOutlined className="del-button" />
                    </Popconfirm>
                </span>
            );
        },
    }










    let count = 0;
    const mapColumns = (col, index) => {
        count = count + 1;
        if (!col.editable) {
            return col;
        }

        const newCol = {
            ...col,
            onHeaderCell: column => (
                {
                    width: column.width,
                    onResize: handleResize(column.dataIndex),
                }),
            onCell: (record, count) => ({
                record,
                in_out: col.in_out,
                int_ext: col.int_ext,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                className: col.class,
                tabIndex: count + 1
            })
        };
        if (col.children) {
            newCol.children = col.children.map(mapColumns, count);
        }
        //  setCount(count + 1)
        return newCol;
    };

    const Columns = columns.map(mapColumns);

    const handleResize = index => (e, { size }) => {
        console.log(index)
        AppService.setColumnWidth(dispatch, index, size)
        //  dispatch(setColumnWidth(index, size))
    };
    const addNewRow = () => {
        AppService.add(dispatch)

    }

    const components = {
        header: {
            cell: ResizableTitle,
        },
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };

    return (
        <div className="procure-list">
            <div className="add-button">
                ccc  {response}
                <PlusSquareFilled
                    onClick={() => addNewRow()}
                    style={{ fontSize: '25px', color: '#08c' }}
                />
            </div>
            <Table
                className="procure-list-table"
                bordered
                ref={ref}
                components={components}
                dataSource={procureList}
                pagination={true}
                columns={Columns}
                loading={loading}
                rowKey="id"
            >
            </Table>
        </div>

    );
});

export default ProcureToPayProcessComponent;