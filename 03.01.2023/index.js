const romanNumbers = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
const intNumbers = [1, 5, 10, 50, 100, 500, 1000]


function Convert(romanNumber) {
    const inputNum = romanNumber.split('')
    let outputNum = 0
    let lastIndex = romanNumbers.length
    let sub

    for (let i = 0; i < inputNum.length; i++) {
        for (let j = 0; j < romanNumbers.length; j++) {
            if (inputNum[i] === romanNumbers[j]) {
                if (j > lastIndex + 1) {
                    console.log('entrou ' + j + lastIndex)
                    sub = intNumbers[j] - intNumbers[lastIndex]
                    outputNum = sub
                }
                else {
                    lastIndex = j
                    outputNum += intNumbers[j]
                }
            }
        }
    }

    console.log(outputNum)
}

Convert('MCD')