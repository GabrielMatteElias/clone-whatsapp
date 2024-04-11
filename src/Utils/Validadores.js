const isEmpty = (str) => {
    return str === '' || str === null || str === undefined || Object.keys(str).length === 0;
}

export {
    isEmpty
}