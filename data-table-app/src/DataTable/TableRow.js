const TableRow = (props) => {
    return (
        <tr>
            {Object.entries(props.row).map(([key, value], idx) => (
                <td key={idx}>{value}</td>
            ))}
        </tr>
    );
};

export default TableRow;
