import { useState } from "react";

const Filter = (props) => {
    return (
        <>
            <label htmlFor="columns">Column</label>
            <select
                name="column"
                defaultValue={"none"}
                onChange={(e) => props.generateRowValues(e)}
            >
                <option value="none" disabled hidden>
                    Select a Column
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
                defaultValue={"none"}
                onChange={(e) => props.setFilteredRows(e)}
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
        </>
    );
};

export default Filter;
