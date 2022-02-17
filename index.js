function superbowlWin(record) {
    const yearWon = record.find( record => record.result === "W")
    if(yearWon && yearWon.result === "W") {
        return yearWon.year;
    }
    else {
       return undefined
    }
}
