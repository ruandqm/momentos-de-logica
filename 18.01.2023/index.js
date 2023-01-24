function driver(data) {
    const firstName = data[0]
    const secondName = data[1]
    const lastName = data[2].toUpperCase()
    const birth = data[3]
    const genre = data[4]

    let first
    lastName.length >= 5 ? first = lastName.substr(0, 5) : first = lastName.substr(0, lastName.length)
    while (first.length < 5)
        first = first + '9'
    console.log(first)
    console.log(birth[9])
    genre === 'F' ? console.log('')
}

const driverData = ['John', 'James', 'Smith', '01-Jan-2000', 'M']
driver(driverData)