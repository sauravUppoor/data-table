import { useState, useMemo } from "react";

/**
 *
 * @param rows : Array<obj> - containing original data
 * @returns
 *      rows : Array<obj> - rows in sorted order of some column
 *      sortColumn : string - column to be sorted
 *      resetSortColumn : func(void) - reset the sorted column
 *      toggleSort : func(string) - toggle sort order of column
 */
const useSort = (rows) => {
    // column name and order which is currently sorted
    const [sortColumn, setSortColumn] = useState({
        key: null,
        order: "null", // order can be ascending or descending
    });

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

    const resetSortColumn = () => {
        setSortColumn({
            key: null,
            order: "null",
        });
    };

    // cache values of previously sorted columns
    useMemo(() => {
        rows.sort((row1, row2) => {
            if (sortColumn.order === "ascending") {
                return row1[sortColumn.key] > row2[sortColumn.key] ? 1 : -1;
            } else {
                return row1[sortColumn.key] > row2[sortColumn.key] ? -1 : 1;
            }
        });
    }, [sortColumn]);

    return [rows, sortColumn, resetSortColumn, toggleSort];
};

export default useSort;
