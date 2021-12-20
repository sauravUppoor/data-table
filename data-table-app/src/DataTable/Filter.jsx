import "./style.css";

const Filter = (props) => {
    return (
        <>
            <label htmlFor="columns">Column</label>
            <select
                name="column"
                value={props.selectedColumn}
                onChange={(e) => props.generateRowValues(e.target.value)}
            >
                <option value="" disabled hidden>
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
                value={props.selectedRowValue}
                onChange={(e) => props.setFilteredRows(e.target.value)}
            >
                {
                    <option value="" disabled hidden>
                        Select row value
                    </option>
                }
                {props.rowValues.map((rowValue, idx) => (
                    <option key={idx} value={rowValue}>
                        {rowValue}
                    </option>
                ))}
            </select>

            <button
                onClick={(e) => props.setFilteredRows("")}
                className="btn__primary"
            >
                Clear Filter
            </button>
        </>
    );
};

export default Filter;
