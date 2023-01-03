const romanNumbers = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
const intNumbers = [1, 5, 10, 50, 100, 500, 1000]


function Convert(romanNumber) {
    const inputNum = romanNumber.split('')
    let outputNum = 0
    let lastIndex = romanNumbers.length

    if (inputNum.includes(''))
        for (let i = 0; i < inputNum.length; i++) {
            for (let j = 0; j < romanNumbers.length; j++) {
                if (j > lastIndex) {
                    if (inputNum[i] === romanNumbers[j]) {
                        lastIndex = j
                        outputNum -= intNumbers[j]
                    }
                }
                if (inputNum[i] === romanNumbers[j]) {
                    if (j > lastIndex) {
                        let sub = intNumbers[i] - intNumbers[lastIndex]
                        outputNum = sub
                        lastIndex = j
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

Convert('V')