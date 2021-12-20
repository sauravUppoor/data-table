import useSearch from "./util/useSearch";
import useFilter from "./util/useFilter";
import intersection from "./util/util";

import Table from "./Table";
import Search from "./Search";
import Filter from "./Filter";
import { useState, useEffect } from "react";

import "./style.css";

const TableContainer = (props) => {
    // rows to be displayed
    let [displayRows, setDisplayRows] = useState(props.rows);

    // rows which are matching the search term
    let [matchedRows, setMatchedRows, setSearchTerm, setColumns] = useSearch(
        props.rows
    );

    // rows which satisfy the filter condition
    let [
        filteredRows,
        selectedColumn,
        rowValuesOfSelectedColumn,
        selectedRowValue,
        generateRowValues,
        setFilteredRows,
    ] = useFilter(props.rows);

    // track and find intersection of both filter and searched rows
    useEffect(() => {
        setDisplayRows(intersection(matchedRows, filteredRows));
    }, [matchedRows, filteredRows]);

    return (
        <>
            <div className="filter__nav">
                {!props.disableSearch && (
                    <Search setSearchTerm={setSearchTerm} />
                )}
                {!props.disableFilter && (
                    <Filter
                        columns={props.columns}
                        rows={props.rows}
                        selectedColumn={selectedColumn}
                        rowValues={rowValuesOfSelectedColumn}
                        selectedRowValue={selectedRowValue}
                        generateRowValues={generateRowValues}
                        setFilteredRows={setFilteredRows}
                        className="cmp__filter"
                    />
                )}
            </div>
            <Table columns={props.columns} rows={displayRows} />
        </>
    );
};

TableContainer.defaultProps = {
    disableSearch: false,
    disableFilter: false,
};

export default TableContainer;
