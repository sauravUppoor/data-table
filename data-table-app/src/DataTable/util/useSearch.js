import { useState, useMemo, useEffect } from "react";

const useSearch = (rows, initialSearchValue = "", initialColumnName = "") => {
    const [searchValue, setSearchValue] = useState(initialSearchValue);
    const [columnName, setColumnName] = useState(initialColumnName);

    const setSearchTerm = (event) => {
        setSearchValue(event.target.value);
    };

    const setColumnValue = (columnName) => {
        setColumnName(columnName);
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

    const getMatchingRows = (rows, searchTerm) => {
        let matchedRows = rows.filter((row) => doesRowMatch(row, searchTerm));
        return matchedRows;
    };

    let matchedRows = useMemo(() => {
        return getMatchingRows(rows, searchValue);
    }, [searchValue]);

    return [matchedRows, setSearchTerm, setColumnValue];
};

export default useSearch;
