import react from "react";

const TableHead = (props) => {
    return (
        <thead>
            <tr>
                {props.columns.map((column, idx) => (
                    <th key={idx}>
                        <button onClick={() => props.toggleSort(column)}>
                            {column}
                        </button>
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHead;
