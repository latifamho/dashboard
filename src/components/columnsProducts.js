export const COLUMNS = [
    {
        Header: "",
        accessor: "id",
        Cell: ({ row }) => {
            return <span>{row.index + 1}</span>;
        },
    },
    {
        Header: "Name",
        accessor: "name",
    },

    {
        Header: "Company",
        accessor: "company",
    },
    {
        Header: "From",
        accessor: "from",
    },

    {
        Header: "Price",
        accessor: "price",
        Cell: ({ value }) => {
            return <span>{value}$</span>;
        },
    },
    {
        Header: "Date",
        accessor: "date",
    },
];
