//https://edabit.com/challenge/xPnZKhYcn5TwK3HFT

let anagrams = [];

let getAnagrams = (word, anagram = '', anagrams = []) =>{
	
	if(!word) {
		anagrams.push(anagram);
	}

	for(let i = 0; word.length; i ++){
		anagram += word[i];
		getAnagrams(word.slice(0,i) + word.slice(i + 1 ), anagram, anagrams);
		anagram = anagram.slice(0, anagram.length - 1);
	}
	
	return [... new Set(getAnagrams)]
}

console.log(getAnagrams('ABC'));