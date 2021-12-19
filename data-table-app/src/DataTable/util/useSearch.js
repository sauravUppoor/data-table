import { useState, useMemo, useEffect } from "react";

const useSearch = (rows, initialSearchValue = "", initialColumnName = "") => {
    const [searchValue, setSearchValue] = useState(initialSearchValue);
    const [columnName, setColumnName] = useState(initialColumnName);
    const [matchedRows, setMatchedRows] = useState(rows);

    /* Public */
    const setSearchTerm = (searchValue) => {
        setSearchValue(searchValue);
    };

    const setColumnValue = (columnName) => {
        setColumnName(columnName);
    };

    /* Private */

    const getMatchingRows = (rows, searchTerm) => {
        let matchedRows = rows.filter((row) => doesRowMatch(row, searchTerm));
        return matchedRows;
    };

    const doesRowMatch = (row, searchTerm) => {
        let match = false;

        for (const [key, value] of Object.entries(row)) {
            if (columnName === "" || columnName === key) {
                match |=
                    typeof key === "string" &&
                    value.toLowerCase().includes(searchTerm.toLowerCase());
                if (match) break;
            }
        }
        return match;
    };

    useMemo(() => {
        setMatchedRows(getMatchingRows(rows, searchValue));
    }, [searchValue]);

    return [matchedRows, setMatchedRows, setSearchTerm, setColumnValue];
};

export default useSearch;
