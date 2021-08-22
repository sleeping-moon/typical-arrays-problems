exports.min = function min(array) {
    return (
        (array &&
            array.reduce((acc, value) => (acc < value ? acc : value), 0)) ||
        0
    );
};

exports.max = function max(array) {
    return (
        (array &&
            array.reduce((acc, value) => (acc > value ? acc : value), 0)) ||
        0
    );
};

exports.avg = function avg(array) {
    return (
        (array &&
            array.reduce((acc, value) => (acc += value), 0) / array.length) ||
        0
    );
};