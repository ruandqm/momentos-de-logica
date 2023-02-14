function movieTimes(open, close, length) {
    let times = []
    let actTime = open * 60
    const totalSectionTime = length + 15
    let totalOpenTime
    close < 12 ? totalOpenTime = 24 - open + close : totalOpenTime = close - open
    totalOpenTime = totalOpenTime * 60
    for (let i = totalOpenTime; i >= totalSectionTime; i = i - totalSectionTime) {
        let timeConverted = convertTime(actTime)
        times.push(timeConverted)
        actTime = actTime + totalSectionTime
    }
    console.log(times)
}

function convertTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const min = minutes % 60;
    let textHours = ('00' + hours).slice(-2);
    const textMinutes = ('00' + min).slice(-2);

    textHours >= 24 ? textHours = textHours - 24 : null
    return (textHours + ',' + textMinutes);
};

movieTimes(12, 6, 60)
//convertTime(720)