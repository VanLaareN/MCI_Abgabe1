function clearResults() {
    timeElement.textContent = '';
    countElement.textContent = '';
    meanElement.textContent = '';
    stdDevElement.textContent = '';
    errorRateElement.textContent = '';
    purpleResultElement.textContent = '';
    orangeResultElement.textContent = '';
}

function showResults(){
    let meanDeltaTime = getMean(times);
    let stdDev = getStandardDeviation(times);
    let errorRate = ((times.length - (purpleTimes.length + orangeTimes.length)) / times.length) * 100;

    countElement.textContent = 'Count: ' + times.length;
    meanElement.textContent = 'Mean: ' + Math.round(meanDeltaTime) + ' ms';
    stdDevElement.textContent = 'SD: ' + Math.round(stdDev) + ' ms';
    errorRateElement.textContent = 'Overall Error Rate: ' + errorRate.toFixed(2) + '%';

    if(purpleTimes.length > 0){
        let purpleMean = getMean(purpleTimes);
        let purpleStdDev = getStandardDeviation(purpleTimes);
        let purpleErrorRate = (purpleTimes.length / (purpleTimes.length + orangeTimes.length)) * 100;

        purpleResultElement.textContent = 'Purple Stimulus Results: Count: ' + purpleTimes.length +
            ', Mean: ' + Math.round(purpleMean) + ' ms, SD: ' + Math.round(purpleStdDev) + ' ms, Error Rate: ' +
            purpleErrorRate.toFixed(2) + '%';
    }

    if (orangeTimes.length > 0) {
        let orangeMean = getMean(orangeTimes);
        let orangeStdDev = getStandardDeviation(orangeTimes);
        let orangeErrorRate = (orangeTimes.length / (purpleTimes.length + orangeTimes.length)) * 100;

        orangeResultElement.textContent = 'Orange Stimulus Results: Count: ' + orangeTimes.length +
            ', Mean: ' + Math.round(orangeMean) + ' ms, SD: ' + Math.round(orangeStdDev) + ' ms, Error Rate: ' +
            orangeErrorRate.toFixed(2) + '%';
    }
}