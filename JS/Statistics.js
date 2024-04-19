function getMean(data) {
    let sum = data.reduce((acc, val) => acc + val, 0);
    return sum / data.length;
}

function getStandardDeviation(data) {
    let mean = getMean(data);
    let squareDiffs = data.map(val => Math.pow(val - mean, 2));
    let avgSquareDiff = getMean(squareDiffs);
    return Math.sqrt(avgSquareDiff);
}

function errorRate(purpleTimes, orangeTimes){
    let purpleErrorRate = (purpleTimes.length / (purpleTimes.length + orangeTimes.length)) * 100;
    let orangeErrorRate = (orangeTimes.length / (purpleTimes.length + orangeTimes.length)) * 100;
}

function recordStimulusReactionTime() {
    let deltaTime = Date.now() - stimulusTimestamp;
    times.push(deltaTime);

    // Hier wird stimulusElement anstelle von stimulus verwendet
    if (stimulusElement.style.backgroundColor === 'purple') {
        purpleTimes.push(deltaTime);
    } else {
        orangeTimes.push(deltaTime);
    }

    timeElement.textContent = deltaTime + ' ms';
}