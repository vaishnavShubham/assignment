// JavaScript source code


//Challenge 1
function spinterms(val) {
    const valArray = val.split(" ");
    var newArray = [];
    for (let term of valArray) {
        if (term.length >= 5) {
            newArray.push(term.split("").reverse().join(""));
        } else {
            newArray.push(term);
        }
    }
    return newArray.join(" ");
}

//Challenge 2
function getAthleticResult(value) {
    const results = value.split(",");

    const timesToSeconds = results.map((time) => {
        const [hours, minutes, seconds] = time.split("|").map((x) => parseInt(x));
        return hours * 3600 + minutes * 60 + seconds;
    });

    let range = Math.max(...timesToSeconds) - Math.min(...timesToSeconds);
    const sum = timesToSeconds.reduce((acc, curr) => acc + curr, 0);
    let average = sum / timesToSeconds.length;

    timesToSeconds.sort((a, b) => a - b);
    const middleIndex = Math.floor(timesToSeconds.length / 2);
    let median;
    if (timesToSeconds.length % 2 === 0) {
        median = (timesToSeconds[middleIndex - 1] + timesToSeconds[middleIndex]) / 2;
    } else {
        median = timesToSeconds[middleIndex];
    }
    const searchRegExp = /:/gi;
    range = (new Date(range * 1000).toISOString().slice(11, 19)).toString().replace(searchRegExp, "|");
    average = (new Date(average * 1000).toISOString().slice(11, 19)).toString().replace(searchRegExp, "|");
    median = (new Date(median * 1000).toISOString().slice(11, 19)).toString().replace(searchRegExp, "|");
    return { range, average, median };
}



//Challenge 3 pseudo encryption
function pseudoEncryption(value, N) {
    if (value && N > 0) {
        for (let i = 0; i < N; i++) {
            let evenIndex = "";
            let oddIndex = "";
            for (let j = 0; j < value.length; j++) {
                if (j % 2 === 0) {
                    evenIndex += value[j];
                } else {
                    oddIndex += value[j];
                }
            }
            value = oddIndex + evenIndex;
        }
    }
    return value;
}

//Challenge 3 pseudo descryption
function pseudoDescryption(value, N) {
    if (value && N > 0) {
        for (let i = 0; i < N; i++) {
            let evenIndex = "";
            let oddIndex = "";
            let decodedVal = "";
            if ((value.length % 2) === 0) {
                oddIndex = value.slice(0, (value.length / 2))
                evenIndex = value.slice((value.length / 2), value.length)
            } else {
                oddIndex = value.slice(0, ((value.length + 1) / 2) - 1)
                evenIndex = value.slice((((value.length + 1) / 2) - 1), value.length)
            }
            for (let j = 0; j < evenIndex.length; j++) {
                decodedVal += evenIndex[j];
                if (oddIndex[j]) {
                    decodedVal += oddIndex[j];
                }
            }
            value = decodedVal;
        }
    }
    return value;
}




