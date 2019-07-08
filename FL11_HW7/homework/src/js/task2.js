if (confirm(`Do you want to play a game?`)) {
	let rangeCof = 4;
	let maxAttempts = 3;
	let prizeCof = 2;
 let userNum, prizeForStroke, secretNum, attempt;
 let magicNumber=2;
	do {
		let prizeMax = 100;
		let prizeTotal = 0;
		let maxRange = 8;
		do {
   secretNum = Math.round(Math.random() * maxRange);
   console.log(secretNum);
			attempt = maxAttempts;
			for (attempt; attempt > 0; attempt--) {
				prizeForStroke = Math.floor(prizeMax / Math.pow(magicNumber, maxAttempts - attempt));
				userNum = parseInt(prompt(
					`Enter a number from 0 to ${maxRange}\n` +
					`Attempts left: ${attempt}\n` +
					`Total prize: ${prizeTotal}$\n` +
					`Possible prize on current attempt: ${prizeForStroke}$`
				));
				if (userNum === secretNum) {
					prizeTotal += prizeForStroke;
					prizeMax *= prizeCof;
					maxRange += rangeCof;
					break;
				}
			}
			if (attempt === 0) {
				break;
			}
		} while (confirm(`Congratulation! Your prize is: ${prizeTotal}$ Do you want to continue?`));
		alert(`Thank you for a game. Your prize is: ${prizeTotal}$`);
	} while (confirm(`Do you want to play a game again?`));
} else {
	alert(`You did not become a millionaire, but can.`);
}