import useSort from "./util/useSort";

import TableHead from "./TableHead";
import TableBody from "./TableBody";

import "./style.css";

const Table = (props) => {
    let [rows, sortColumn, resetSortColumn, toggleSort] = useSort(props.rows);
    return (
        <table>
            <TableHead
                columns={props.columns}
                toggleSort={toggleSort}
                sortColumn={sortColumn}
            />
            <TableBody rows={rows} />
        </table>
    );
};

export default Table;
