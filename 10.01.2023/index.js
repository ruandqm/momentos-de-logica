const map = {
    two: ['a', 'b', 'c'],
    three: ['d', 'e', 'f'],
    four: ['g', 'h', 'i'],
    five: ['j', 'k', 'l'],
    six: ['m', 'n', 'o'],
    seven: ['p', 'q', 'r', 's'],
    eight: ['t', 'u', 'v'],
    nine: ['w', 'x', 'y', 'z'],
}

function letters(input) {
    let numbers = input.split('')

    for (let i = 0; i < numbers.length; i++) {
        let actNumber

        switch (numbers[i]) {
            case 1:
                actNumber = 1
                break
            case 2:
                actNumber = 2
                break
            case 3:
                actNumber = 3
                break
            case 4:
                actNumber = 4
                break
            case 5:
                actNumber = 5
                break
            case 6:
                actNumber = 6
                break
            case 7:
                actNumber = 7
                break
            case 8:
                actNumber = 8
                break
            case 9:
                actNumber = 9
                break
        }
    }
}