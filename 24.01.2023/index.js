function movieTimes(open, close, length) {
    let times = []
    const totalSectionTime = length + 15
    let totalOpenTime
    close < 12 ? totalOpenTime = 24 - open + close : totalOpenTime = close - open
    totalOpenTime = totalOpenTime * 60
    for (let i = totalOpenTime; totalOpenTime >= totalSectionTime; i = i - totalSectionTime) {

    }

}

movieTimes(12, 6, 60)