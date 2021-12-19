import TableRow from "./TableRow";

import "./style.css";

const TableBody = (props) => {
    return (
        <tbody>
            {props.rows &&
                props.rows.map((row, idx) => <TableRow row={row} key={idx} />)}
            {!props.rows && <>-</>}
        </tbody>
    );
};

export default TableBody;
