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
        Header: "Country",
        accessor: "country",
    },
    {
        Header: "Phone",
        accessor: "phone",
    },
    {
        Header: "Email",
        accessor: "email",
    },
    {
        Header: "State",
        accessor: "status",
    },
];
