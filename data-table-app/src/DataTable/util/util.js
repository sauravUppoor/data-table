/**
 *
 * @param a Array<obj> - array of data objects
 * @param b Array<obj> - array of data objects
 * @returns Array<ob> - common objects in both the arrays
 */
const intersection = (a, b) => {
    let intersectionRows = a.filter((data) => b.indexOf(data) !== -1);
    return intersectionRows;
};

export default intersection;
