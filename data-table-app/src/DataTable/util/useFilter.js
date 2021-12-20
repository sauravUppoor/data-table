import useSearch from "./useSearch";

import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

/**
 * useFilter Hook
 * @param rows : Array<obj> - containing original data
 * @returns
 *      filteredRows : Array<obj> - rows selected after applying filteredRows
 *      selectedColumn : string - colummnName that is selected from dropdown
 *      rowValuesOfSelectedColumn : Array<string> - row values of corresponding selectedColumn
 *      selectedRowValue : string - row value from rowValuesOfSelectedColumn
 *      generateRowValues : func(column value) - selected column value from dropdown
 *      setFilteredRows : func(row value) - generate filteredRows from selected row value from dropdown
 */
const useFilter = (rows) => {
    let [selectedColumn, setSelectedColumn] = useState("");
    let [rowValuesOfSelectedColumn, setRowValuesOfSelectedColumn] = useState(
        []
    );
    let [selectedRowValue, setSelectedRowValue] = useState("");

    // useSearch hook for searching filter row & col values
    let [filteredRows, setRowsForFiltering, setFilterValue, setColumnValue] =
        useSearch(rows, selectedRowValue, selectedColumn);

    // based on column value update the internal state and useSearch state
    const generateRowValues = (columnValue) => {
        setSelectedColumn(columnValue);
        setColumnValue(selectedColumn);
    };

    // based on row value update the set the internal state
    const setFilteredRows = (newRowValue) => {
        setSelectedRowValue(newRowValue);

        // "none" implies clearing filter
        if (newRowValue === "") {
            setRowValuesOfSelectedColumn([]);
            setRowsForFiltering(rows);
            setSelectedColumn("");
        }

        setColumnValue(selectedColumn);
    };

    // track changes in column value and fill row values in dropdown
    useEffect(() => {
        let rowValues = [];
        for (const row of rows) {
            if (row.hasOwnProperty(selectedColumn))
                rowValues.push(row[selectedColumn]);
        }
        rowValues = [...new Set(rowValues)];
        setRowValuesOfSelectedColumn(rowValues);
    }, [selectedColumn]);

    // track changes in row value and update search term in useSearch hook
    useEffect(() => {
        setFilterValue(selectedRowValue);
    }, [selectedRowValue]);

    return [
        filteredRows,
        selectedColumn,
        rowValuesOfSelectedColumn,
        selectedRowValue,
        generateRowValues,
        setFilteredRows,
    ];
};

export default useFilter;
