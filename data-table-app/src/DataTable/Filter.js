import { useState } from "react";

import "./style.css";

const Filter = (props) => {
    // information about current selected column and row value
    let [selectedColumn, setSelectedColumn] = useState("none");
    let [selectedRowValue, setSelectedRowValue] = useState("none");

    // detect and update filters when cleared
    const clearFilter = (e) => {
        props.setFilteredRows("");
        setSelectedColumn("none");
        setSelectedRowValue("none");
    };

    const changeColumn = (e) => {
        let columnValue = e.target.value;
        props.generateRowValues(columnValue);
        setSelectedColumn(columnValue);
    };

    const changeRowValue = (e) => {
        let rowValue = e.target.value;
        props.setFilteredRows(rowValue);
        setSelectedRowValue(rowValue);
    };

    return (
        <>
            <label htmlFor="columns">Column</label>
            <select
                name="column"
                value={selectedColumn}
                onChange={changeColumn}
            >
                <option value="none" disabled hidden>
                    Select column
                </option>
                {props.columns.map((column, idx) => (
                    <option key={idx} value={column}>
                        {column}
                    </option>
                ))}
            </select>

            <label htmlFor="rowValues">Value</label>
            <select
                name="rowValues"
                value={selectedRowValue}
                onChange={changeRowValue}
            >
                {
                    <option value="none" disabled hidden>
                        Select row value
                    </option>
                }
                {props.rowValues.map((rowValue, idx) => (
                    <option key={idx} value={rowValue}>
                        {rowValue}
                    </option>
                ))}
            </select>

            <button onClick={clearFilter} className="btn__primary">
                Clear Filter
            </button>
        </>
    );
};

export default Filter;
