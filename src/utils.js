// returns the array resorted with the el placed last
export function getElLastInArr(arr, el) {
    let first = arr.slice(0, arr.indexOf(el))
    let last = arr.slice(arr.indexOf(el) + 1)
    return last.concat(first, el)
}