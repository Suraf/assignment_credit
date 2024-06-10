const number = (credit) => {
	if(typeof credit !== 'number') {
		return "Invalid Credit Card"
	}

	let creditString = credit.toString();

	if (creditString.length >= 12 && creditString.length <= 16) {
		let censored = creditString.replace(/\d(?=\d{4})/g, "#");
		return censored;
	} else {
		return "Invalid Credit Card";
	}
}

module.exports = number;