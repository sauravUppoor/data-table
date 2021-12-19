import { useState, useMemo, useEffect } from "react";

/**
 *
 * @param rows  : Array<obj> - containing original data
 * @param initialSearchValue : string - value to be searched
 * @param initialColumnName : string - selected column for searching ("" implies all columns selected)
 * @returns
 *      matchedRows : Array<obj> - rows selected after applying search
 *      setMatchedRows : func(Array<obj>) - update matchedRows
 *      setSearchTerm : func(string) - update search term/value
 *      setColumnValue : func(string) - update search column
 */
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
    // check each row for matching
    const getMatchingRows = (rows, searchTerm) => {
        let matchedRows = rows.filter((row) => doesRowMatch(row, searchTerm));
        return matchedRows;
    };

    // helper to check if object has search term present
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

    // cache the searched term
    useMemo(() => {
        setMatchedRows(getMatchingRows(rows, searchValue));
    }, [searchValue]);

    return [matchedRows, setMatchedRows, setSearchTerm, setColumnValue];
};

export default useSearch;
