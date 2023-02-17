function Change(notes) {
    let n5 = 0
    let n10 = 0

    for (const note of notes) {
        if (note === 5) {
            n5++
        } else if (note === 10) {
            n5--
            n10++
        } else {
            if (n10 > 0) {
                n10--
                n5--
            } else {
                n5 -= 3
            }
        }
        if (n5 < 0) {
            return false
        }
    }

    return true
}


console.log(Change([5, 5, 5, 10, 20]))