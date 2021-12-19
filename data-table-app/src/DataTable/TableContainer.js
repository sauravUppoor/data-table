import useSearch from "./util/useSearch";
import useFilter from "./util/useFilter";
import intersection from "./util/util";

import Table from "./Table";
import Search from "./Search";
import Filter from "./Filter";
import { useState, useEffect } from "react";

const TableContainer = (props) => {
    let [displayRows, setDisplayRows] = useState(props.rows);

    let [matchedRows, setMatchedRows, setSearchTerm, setColumns] = useSearch(
        props.rows
    );

    let [
        filteredRows,
        rowValuesOfSelectedColumn,
        generateRowValues,
        setFilteredRows,
    ] = useFilter(props.rows);

    useEffect(() => {
        setDisplayRows(intersection(matchedRows, filteredRows));
    }, [matchedRows, filteredRows]);

    return (
        <>
            {!props.disableSearch && <Search setSearchTerm={setSearchTerm} />}
            {!props.disableFilter && (
                <Filter
                    columns={props.columns}
                    rows={props.rows}
                    rowValues={rowValuesOfSelectedColumn}
                    generateRowValues={generateRowValues}
                    setFilteredRows={setFilteredRows}
                />
            )}
            <Table columns={props.columns} rows={displayRows} pageSize />
        </>
    );
};

TableContainer.defaultProps = {
    pageSize: null,
    disableSearch: false,
    disableFilter: false,
};

export default TableContainer;
