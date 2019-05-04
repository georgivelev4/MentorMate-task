function drawLogo(inputNumber) {
    if (typeof inputNumber != "number" || inputNumber % 2 === 0) {
        throw new Error('The input must be a odd number');
    }
    const singleDash = '-';
    const startingDashesNeeded = singleDash.repeat(inputNumber);
    const singleStar = '*';
    const startingStarsNeeded = singleStar.repeat(inputNumber);
    let lastStarsCount = inputNumber + 2;
    let lastBetweenDashes = inputNumber * 2 - 2;
    let lastMiddleDashes = inputNumber - 2;

    // First part
    const firstLine = (startingDashesNeeded + startingStarsNeeded).repeat(2) + singleDash.repeat(2 * inputNumber) + (startingStarsNeeded + startingDashesNeeded).repeat(2) + "\n";
    let firstHalf = "";
    for (let i = 0; i < (inputNumber - 1) / 2; i++) {
        firstHalf +=
            singleDash.repeat(inputNumber - 1 - i) +
            singleStar.repeat(lastStarsCount) +
            singleDash.repeat(lastMiddleDashes) +
            singleStar.repeat(lastStarsCount) +
            singleDash.repeat(lastBetweenDashes) +
            singleStar.repeat(lastStarsCount) +
            singleDash.repeat(lastMiddleDashes) +
            singleStar.repeat(lastStarsCount) +
            singleDash.repeat(inputNumber - 1 - i) + '\n';
        lastStarsCount += 2;
        lastBetweenDashes -= 2;
        lastMiddleDashes -= 2;
    }

    // Second part
    const lastLine = (startingStarsNeeded + startingDashesNeeded).repeat(2) + singleStar.repeat(2 * inputNumber) + (startingDashesNeeded + startingStarsNeeded).repeat(2);
    let secondHalf = "";
    lastMiddleDashes = 1;
    lastStarsCount = inputNumber * 2 - 1;
    lastBetweenDashes = inputNumber - 1;
    for (let i = 0; i < (inputNumber - 1) / 2; i++) {
        secondHalf +=
            singleDash.repeat((inputNumber - 1) / 2 - i) +
            singleStar.repeat(inputNumber) +
            singleDash.repeat(lastMiddleDashes) +
            singleStar.repeat(lastStarsCount) +
            singleDash.repeat(lastMiddleDashes) +
            singleStar.repeat(inputNumber) +
            singleDash.repeat(lastBetweenDashes) +
            singleStar.repeat(inputNumber) +
            singleDash.repeat(lastMiddleDashes) +
            singleStar.repeat(lastStarsCount) +
            singleDash.repeat(lastMiddleDashes) +
            singleStar.repeat(inputNumber) +
            singleDash.repeat((inputNumber - 1) / 2 - i) + "\n";
        lastMiddleDashes += 2;
        lastStarsCount -= 2;
        lastBetweenDashes -= 2;
    }

    // Logging result
    console.log(firstLine + firstHalf + secondHalf + lastLine);
}

/*
Works with every odd number.
Throws error when the input is invalid.
*/
drawLogo(3);
drawLogo(5);
drawLogo(7);

