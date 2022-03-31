// Given any integer, print an English phrase that describes the integer
// (e.g. "One Thousand, Two Hundred Thirty Four").

var dict = {
	1: 'one',
	2: 'two',
	3: 'three',
	4: 'four',
	5: 'five',
	6: 'six',
	7: 'seven',
	8: 'eight',
	9: 'nine',
	0: 'zero',
};

const getEnglishInt = (int) => {
	var str = int.toString();
	var result = '';

	for (var i = 0; i < str.length; i++) {
		result += dict[str[i]] + ' ';
	}

	return result;
};

console.log(getEnglishInt(44));
