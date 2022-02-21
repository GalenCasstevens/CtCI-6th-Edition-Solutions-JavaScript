// Assume you have a method isString which checks if one word is a substring of another.
// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only
// one call to isSubstring (e.g., "waterbottle" is rotation of "erbottlewat").

let isSubstring = (strOne, strTwo) => {
	var str = strOne;
	var subStr = strTwo;

	if (strTwo.length > strOne.length) {
		str = strTwo;
		subStr = strOne;
	}

	var counter = 0;
	var strIndex = 0;
	var subStrIndex = subStr.indexOf(str.charAt(0));
	if (subStrIndex === -1) return false;
	while (counter < str.length) {
		if (subStrIndex === subStr.length && counter < subStr.length)
			subStrIndex = 0;
		else if (subStrIndex === subStr.length && counter === subStr.length)
			return true;
		if (str.charAt(strIndex) !== subStr.charAt(subStrIndex)) {
			console.log(`strIndex: ${strIndex}`);
			console.log(`subStrIndex: ${subStrIndex}`);
			return false;
		}

		strIndex++;
		subStrIndex++;
		counter++;
	}

	return true;
};

console.log(isSubstring('sub-zero', 'ub'));
