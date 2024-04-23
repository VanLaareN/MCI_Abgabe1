function getRandomColor() {
    return Math.random() < 0.5 ? 'purple' : 'orange';
}

function getRandomShape() {
    return Math.random() < 0.5 ? 'square' : 'triangle';
}

function createStimulus(shape, color) {// Create a new stimulus element each time
    stimulusElement.style.width = SIZE + "px";
    stimulusElement.style.height = SIZE + "px"; // Use height instead of length
    stimulusElement.style.backgroundColor = color;
    if (shape === 'square') {
        stimulusElement.innerHTML = "&#9632;"; // Use "&#9650;" for triangle
        stimulusElement.style.fontSize = SIZE + "px";
        stimulusElement.style.lineHeight = SIZE + "px";
    } else if (shape === 'triangle') {
        stimulusElement.innerHTML = "&#9650;"; // Use "&#9650;" for triangle
        stimulusElement.style.fontSize = SIZE + "px";
        stimulusElement.style.lineHeight = SIZE + "px";
    }
    containerElement.appendChild(stimulusElement);
    return stimulusElement;
}

function clearContainer() {
    containerElement.innerHTML = ''; // Clear the container's HTML content
    stimulusElement.innerHTML = "";
    stimulusElement.textContent = "";
    containerElement.textContent ="";
}

function startTestTrial() {
    // Clear previous stimulus
    clearContainer();

    let color = getRandomColor();
    let shape = getRandomShape();

    createStimulus(shape, color);
    stimulusTimestamp = Date.now();

    if (shape === 'square') {
        // valid stimulus, wait for response
        instructionElement.textContent = 'Press space when you see a square (purple or orange)!';
        setTimeout(startTestTrial, Math.floor(Math.random() * (6000 - 2000 + 1)) + 2000); // 0 to 6 seconds timeout
    } else {
        // invalid stimulus, wait for timeout
        instructionElement.textContent = 'Wait for the next stimulus.';
        setTimeout(startTestTrial, Math.floor(Math.random() * (6000 - 2000 + 1)) + 2000); // 0 to 6 seconds timeout
    }
}

function startExperiment() {
    clearContainer(); // Clear any remaining stimulus
    clearResults(); // Clear results of any previous tests
    instructionElement.textContent = 'Press space when you see a square (purple or orange)!';

    // reset data and start tests
    times = [];
    purpleTimes = [];
    orangeTimes = [];
    experimentActive = true;
    startTestTrial();
}

function stopExperiment() {
    // reset instruction and show results
    instructionElement.textContent = 'Press space to start again!';
    showResults();
    experimentActive = false;
}

window.addEventListener('keydown', (event) => {
    if (event.key === ' ') {
        // the user pressed the space key
        if (experimentActive) {
            // record reaction time only if experiment is active
            recordStimulusReactionTime();
            startTestTrial();
        } else {
            // start the experiment if it wasn't active
            startExperiment();
        }
    } else if (event.key === 'Escape') {
        // stop the experiment if Escape key is pressed
        if (experimentActive) {
            stopExperiment();
        }
    }
});
