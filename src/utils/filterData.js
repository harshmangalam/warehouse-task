export const searchData = (array, input) => {

    if (input.trim().length) {
        return array.filter(data => data.name.toLowerCase().includes(input.toLowerCase()))
    }
    return array
}


export const filterData = (array, parameter, order) => {
    if (order === "asc") {
        return array.sort(function (a, b) {
            if (a[parameter] < b[parameter]) { return 1; }
            if (a[parameter] > b[parameter]) { return -1; }
            return 0;
        })
    }
    return array.sort(function (a, b) {
        if (a[parameter] < b[parameter]) { return -1; }
        if (a[parameter] > b[parameter]) { return 1; }
        return 0;
    })


}
