function reduceArray(arr) {
    if (arr.length === 1)
        return arr[0]

    let result = []
    let i = 0;

    while (i < arr.length) {
        let count = 1
        while (i < arr.length - 1 && arr[i] === arr[i + 1]) {
            count++
            i++
        }
        if (count === 1)
            result.push(1)
        else
            result.push(count)

        i++;
    }

    return reduceArray(result)
}

const arr = [1, 7, 0, 6, 1, 9, 0, 7, 1, 6, 0, 9, 0]
const result = reduceArray(arr)
console.log(result)