import "./style.css";

const TableHead = (props) => {
    return (
        <thead>
            <tr>
                {props.columns.map((column, idx) => (
                    <th key={idx}>
                        <button onClick={() => props.toggleSort(column)}>
                            {column}
                            {props.sortColumn.key === column &&
                                props.sortColumn.order === "ascending" && (
                                    <ion-icon name="arrow-down-outline"></ion-icon>
                                )}
                            {props.sortColumn.key === column &&
                                props.sortColumn.order === "descending" && (
                                    <ion-icon name="arrow-up-outline"></ion-icon>
                                )}
                        </button>
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHead;
