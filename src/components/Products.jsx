import React, { useMemo, useState } from "react";
import Header from "./Header.jsx";
import { UseProducts } from "../hooks/Query.js";
import { COLUMNS } from "./columnsProducts.js";
import { useSortBy, useTable } from "react-table";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaCaretDown } from "react-icons/fa6";
import { FaCaretUp } from "react-icons/fa6";
import { CircularProgress, IconButton } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

const CustomersWrapper = ({ data, isLoading, isError, error, isFetching }) => {
    const [expanded, setExpanded] = useState(false);
    const columns = useMemo(() => COLUMNS, []);
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        nextPage,
        canNextPage,
        canPreviousPage,
        previousPage,
    } = useTable({ columns, data }, useSortBy);

    if (isLoading || isFetching) {
        return <CircularProgress color="inherit" className="w-full m-auto" />;
    }
    if (isError) {
        return <p>{error}</p>;
    }
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className="bg-white p-[20px] rounded-lg pb-[10px] ">
            <div className="text mt-[10px] mb-[20px]">
                <h1 className="text-2xl">All Products</h1>
                <p className="text-sm text-green text-thin ">
                    available products
                </p>
            </div>
            <table {...getTableProps()} className=" hidden table lg:table ">
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr
                            {...headerGroup.getHeaderGroupProps()}
                            className="table-row  bg-blue text-white"
                        >
                            {headerGroup.headers.map((column) => {
                                // Check if column id is "id"
                                const isIdColumn = column.id === "id";

                                // Get the header props
                                const headerProps = column.getHeaderProps(
                                    isIdColumn
                                        ? {}
                                        : column.getSortByToggleProps()
                                );

                                return (
                                    <th
                                        {...headerProps}
                                        className="table-header"
                                    >
                                        {column.render("Header")}
                                        <span>
                                            {column.isSorted ? (
                                                column.isSortedDesc ? (
                                                    <FaCaretUp className="inline ml-[3px]" />
                                                ) : (
                                                    <FaCaretDown className="inline  ml-[3px]" />
                                                )
                                            ) : (
                                                ""
                                            )}
                                        </span>
                                    </th>
                                );
                            })}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()} className="table-body border">
                    {rows.map((row, index) => {
                        prepareRow(row);
                        return (
                            <tr
                                {...row.getRowProps()}
                                className="table-row even:bg-slate-100"
                            >
                                {row.cells.map((cell) => {
                                    return cell.render("Cell").props.cell
                                        .value === "false" ? (
                                        <td
                                            {...cell.getCellProps()}
                                            className="table-cell"
                                        >
                                            <span
                                                className="text-[#DF0404] rounded-sm 
                                                bg-[#FFC5C5]
                                            border border-[#DF0404] px-[10px] py-[5px]"
                                            >
                                                inactive
                                            </span>
                                        </td>
                                    ) : cell.render("Cell").props.cell.value ===
                                      "true" ? (
                                        <td
                                            {...cell.getCellProps()}
                                            className="table-cell"
                                        >
                                            <span className="text-[#00B087] rounded-sm bg-[#16C09861] border border-[#00B087] px-[16px] py-[5px]">
                                                active
                                            </span>
                                        </td>
                                    ) : (
                                        <td
                                            {...cell.getCellProps()}
                                            className="table-cell"
                                        >
                                            {cell.render("Cell")}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="pag mt-[20px]   hidden table lg:block ">
                <IconButton
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                >
                    <NavigateNextIcon className="rotate-180" />
                </IconButton>
                <IconButton onClick={() => nextPage()} disabled={!canNextPage}>
                    <NavigateNextIcon />
                </IconButton>
            </div>
            <div className="block overflow-hidden lg:hidden">
                {data.map((e, index) => (
                    <Accordion
                        expanded={expanded === `panel${index + 1}`}
                        onChange={handleChange(`panel${index + 1}`)}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography
                                sx={{
                                    flex: 1,
                                    display: "flex",
                                    flexWrap: "nowrap",
                                    margin: "5px ",
                                }}
                            >
                                {index + 1}) <span> {e.name}</span>
                            </Typography>
                            <Typography
                                sx={{
                                    color: "text.secondary",
                                    textOverflow: "ellipsis",
                                    overflow: "hidden",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {e.price} $
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <p className="flex flex-wrap">
                                    company :{" "}
                                    <span className="text-slate-400">
                                        {e.company}
                                    </span>
                                </p>
                                <p className="flex flex-wrap">
                                    From :{" "}
                                    <span className="text-slate-400">
                                        {e.from}
                                    </span>
                                </p>
                                <p className="flex flex-wrap">
                                    Date :{" "}
                                    <span className="text-slate-400">
                                        {e.date}
                                    </span>
                                </p>
                                <p className="flex flex-wrap"></p>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
    );
};

const Products = () => {
    const { data, isLoading, isError, error, isFetching } = UseProducts();
    return (
        <div className="w-[95%] max-w-[1300px] mx-auto min-h-full pl-[290px] py-[30px] flex bg-slate-100 flex-col px-[15px] sm:pl-[90px]">
            <Header />
            {data?.documents.length !== 0 ? (
                <CustomersWrapper
                    data={data?.documents || []}
                    isLoading={isLoading}
                    isError={isError}
                    error={error}
                    isFetching={isFetching}
                />
            ) : (
                <h2>
                    No products... do want to{" "}
                    <Link
                        to="/add_product"
                        className="text-blue transition hover:border-b hover:border-blue"
                    >
                        add product
                    </Link>
                    ?
                </h2>
            )}
        </div>
    );
};

export default Products;
