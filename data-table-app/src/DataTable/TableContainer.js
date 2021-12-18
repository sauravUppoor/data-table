import useSearch from "./util/useSearch";

import Table from "./Table";
import Search from "./Search";
import Filter from "./Filter";

import { useState } from "react";
const TableContainer = (props) => {
    let [matchedRows, setSearchTerm, setSearchColumn] = useSearch(props.rows);

    let [selectedColumn, setSelectedColumn] = useState("");
    let [rowValuesOfSelectedColumn, setRowValuesOfSelectedColumn] = useState(
        []
    );
    let [selectedRowValue, setSelectedRowValue] = useState("");
    let [filteredRows, setFilterValue, setColumnValue] = useSearch(
        matchedRows,
        selectedRowValue,
        selectedColumn
    );
    const generateRowValues = (event) => {
        setSelectedColumn(event.target.value);
        let rowValues = [];
        for (const row of props.rows) {
            rowValues.push(row[selectedColumn]);
        }
        rowValues = [...new Set(rowValues)];
        setRowValuesOfSelectedColumn(rowValues);
    };

    const setFilteredRows = (event) => {
        setSelectedRowValue(event.target.value);
        setFilterValue(selectedRowValue);
        setColumnValue(selectedColumn);
    };

    return (
        <>
            {!props.disableSearch && <Search setSearchTerm={setSearchTerm} />}
            {!props.disableFilter && (
                <Filter
                    columns={props.columns}
                    rows={filteredRows}
                    rowValues={rowValuesOfSelectedColumn}
                    generateRowValues={generateRowValues}
                    setFilteredRows={setFilteredRows}
                />
            )}
            <Table columns={props.columns} rows={matchedRows} pageSize />
        </>
    );
};

TableContainer.defaultProps = {
    pageSize: null,
    disableSearch: false,
    disableFilter: false,
};

export default TableContainer;
