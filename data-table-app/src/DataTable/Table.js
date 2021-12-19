import useSort from "./util/useSort";

import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { useEffect } from "react/cjs/react.development";

const Table = (props) => {
    let [rows, toggleSort] = useSort(props.rows);
    return (
        <table>
            <TableHead columns={props.columns} toggleSort={toggleSort} />
            <TableBody rows={rows} />
        </table>
    );
};

export default Table;
