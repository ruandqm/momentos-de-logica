const map = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
}

function letters(input) {
    let numbers = input.split('')
    let output = []
    let outputLength = 0
    let mapResult = []

    for (let i = 0; i < numbers.length; i++) {
        output.push(map[numbers[i]])
    }

    for (let i = 0; i < output.length; i++) {
        outputLength++
    }
    for (let i = 0; i < outputLength; i++) {

    }

    console.log(output)
}

letters('23')