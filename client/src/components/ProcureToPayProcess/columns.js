

export const columns = [
    {
        title: 'Action',
        width: 10,
        dataIndex: "action",
        key: "action",
        editable: false,
        tabIndex: 3,

    },




    {
        title: 'CONTROL TO STORES/MATERIAL INWARD TEAM',
        key: 'control-to-stores-material-inward-team',
        dataIndex: 'control-to-stores-material-inward-team',
        className: "control-to-stores-material-inward-team",
        editable: true,
        children: [
            {
                title: 'Date of receipt',
                width: 60,
                dataIndex: "receipt_date",
                key: "date-of-receipt",
                editable: true,
                tabIndex: 3,


            },
            {
                title: "Invoice no",
                width: 60,
                dataIndex: "invoice_no",
                key: "invoice-no",
                editable: true,
                tabIndex: 4,
                //  sorter: (a, b) => a.ext_in_tax_refund - b.ext_in_tax_refund,

            },
            {
                title: "Invoice date",
                width: 60,
                dataIndex: "invoice_date",
                key: "invoice-date",
                editable: true,
                tabIndex: 5,
                // sorter: (a, b) => a.ext_in_dividends_income - b.ext_in_dividends_income,
            },
            {
                title: "Company name",
                width: 60,
                dataIndex: "company_name",
                key: "company-name",
                editable: true,
                tabIndex: 6,
            },
            {
                title: "IFS inward date",
                width: 60,
                dataIndex: "ifs_inward_date",
                key: "ifs-inward-date",
                editable: true,
                tabIndex: 7,
            },
        ]
    },
    {
        title: 'CONTROL TO QA',
        key: 'control-to-qa',
        dataIndex: 'control-to-qa',
        className: "control-to-qa",
        editable: true,
        children: [
            {
                title: "Placed to qc date",
                width: 60,
                dataIndex: "placed_to_qc_date",
                key: "placed-to-qc-date",
                editable: true,
                tabIndex: 7,
            },
            {
                title: "Received from qc date",
                width: 60,
                dataIndex: "received_from_qc_date",
                key: "received-from-qc-date",
                editable: false,
                tabIndex: 8,
            },
            {
                title: "Status",
                width: 10,
                dataIndex: "status",
                key: "status",
                editable: true,
                tabIndex: 9,
            }


        ]
    },

    {
        title: 'CONTROL TO PURCHASE',
        key: 'control-to-purchase',
        dataIndex: 'control-to-purchase',
        className: 'control-to-purchase',
        editable: true,
        children: [
            {
                title: "Given to purchase date",
                width: 60,
                dataIndex: "given_to_purchase_date",
                key: "given-to-purchase-date",
                editable: true,
                tabIndex: 15,
            }
        ]
    },

    {
        title: 'CONTROL TO STORES',
        key: 'control-to-stores',
        dataIndex: 'control-to-stores',
        className: "control-to-stores",
        editable: true,
        children: [
            {
                title: "Received from purchase after rework/debit note",
                width: 60,
                dataIndex: "received_from_purchase_date",
                key: "received-from-purchase-after-rework",
                editable: true,
                tabIndex: 20,
            },
        ]
    },
    {
        title: 'CONTROL TO ACCOUNTS',
        key: 'control-to-accounts',
        dataIndex: 'control-to-accounts',
        className: 'control-to-accounts',
        editable: true,
        children: [
            {
                title: "Received by a/cs",
                width: 60,
                dataIndex: "received_by_a_cs",
                key: "received-by-a-cs",
                editable: true,
                tabIndex: 20,
            },
        ]
    },
]