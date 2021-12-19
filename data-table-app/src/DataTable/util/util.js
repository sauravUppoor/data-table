const intersection = (rows1, rows2) => {
    let intersectionRows = rows1.filter((data) => rows2.indexOf(data) !== -1);
    return intersectionRows;
};

export default intersection;
