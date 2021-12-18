import react from "react";

import TableRow from "./TableRow";

const TableBody = (props) => {
    return (
        <tbody>
            {props.rows.map((row, idx) => (
                <TableRow row={row} key={idx} />
            ))}
        </tbody>
    );
};

export default TableBody;
