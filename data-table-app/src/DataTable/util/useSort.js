import { useState, useMemo } from "react";

const useSort = (rows) => {
    const [sortColumn, setSortColumn] = useState({
        key: null,
        order: "null",
    });

    useMemo(() => {
        rows.sort((row1, row2) => {
            if (sortColumn.order === "ascending") {
                return row1[sortColumn.key] > row2[sortColumn.key] ? 1 : -1;
            } else {
                return row1[sortColumn.key] > row2[sortColumn.key] ? -1 : 1;
            }
        });
    }, [sortColumn]);

    const toggleSort = (columnKey) => {
        let order = "ascending";
        if (
            sortColumn &&
            sortColumn.key === columnKey &&
            sortColumn.order == "ascending"
        ) {
            order = "descending";
        }
        setSortColumn({ key: columnKey, order });
    };

    return [rows, toggleSort];
};

export default useSort;
