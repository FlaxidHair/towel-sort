// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    matrix.reduce((acc, el, i) => {
        return matrix.concat(!(i % 2) ? el : el.reverse());
    }, []);

    return matrix.reduce((acc, el, i) => {
        el.sort((a, b) => (!(i & 1) ? a - b : b - a)).map((e) => acc.push(e));
        return acc;
    }, []);
};
