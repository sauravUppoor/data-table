import useSearch from "./useSearch";

import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const useFilter = (rows) => {
    let [selectedColumn, setSelectedColumn] = useState("");
    let [rowValuesOfSelectedColumn, setRowValuesOfSelectedColumn] = useState(
        []
    );
    let [selectedRowValue, setSelectedRowValue] = useState("");

    let [filteredRows, setRowsForFiltering, setFilterValue, setColumnValue] =
        useSearch(rows, selectedRowValue, selectedColumn);

    const generateRowValues = (columnValue) => {
        setSelectedColumn(columnValue);
        setColumnValue(selectedColumn);
    };

    useEffect(() => {
        let rowValues = [];
        for (const row of rows) {
            if (row.hasOwnProperty(selectedColumn))
                rowValues.push(row[selectedColumn]);
        }
        rowValues = [...new Set(rowValues)];
        setRowValuesOfSelectedColumn(rowValues);
    }, [selectedColumn]);

    useEffect(() => {
        setFilterValue(selectedRowValue);
    }, [selectedRowValue]);

    const setFilteredRows = (newRowValue) => {
        setSelectedRowValue(newRowValue);

        if (newRowValue === "") {
            setRowValuesOfSelectedColumn([]);
            setRowsForFiltering(rows);
            setSelectedColumn("");
        }

        setColumnValue(selectedColumn);
    };

    return [
        filteredRows,
        rowValuesOfSelectedColumn,
        generateRowValues,
        setFilteredRows,
    ];
};

export default useFilter;
