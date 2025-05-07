/* 
adott betű az abc-ben páros vagy páratlan helyen található-e

páros helyen van -> nagy betű
páratlan helyen van -> kis betű
*/

/* const abc = {
  a: 1,
  b: 2,
  c: 3
} */

/* const manipulateString = (string) => {
  let result = "";

  for (let i = 0; i < string.length; i++) {
    
    const letter = string[i];
    const letterNumber =  letter.charCodeAt(0);
    
    if (letterNumber % 2 === 0) result += letter.toUpperCase();
    else result += letter.toLowerCase();
  }

  return result;
}

console.log(manipulateString("Kismacska"));
console.log(manipulateString("Codecool"));
console.log(manipulateString("Hello world"));
console.log(manipulateString("Fluxuskondenzator")); */

const isPalindrome = (number) => {
  const str = String(number);
  // const strReverse = str.split('').reverse().join('');

  for (let i = 0; i < str.length / 2; i++) {
    // console.log(i, str[i], str[str.length - 1 - i]);
    if (str[i] !== str[str.length - 1 - i]) return false;
  }

  return true;
}

// console.log(isPalindrome(123454321))
// console.log(isPalindrome("alma"))
// console.log(isPalindrome("apa"))

/* 
  olyan array lesz true, amelyikben minden érték palindrom
*/
const isPalindromeArray = (arrayOfValues) => {
  /* let trueScore = 0;

  for (let i = 0; i < arrayOfValues.length; i++) {
    // isPalindrome(i)
    if (isPalindrome(arrayOfValues[i])) {
      trueScore++;
    } 
  }
  console.log('true: ', trueScore); */

  // return arrayOfValues.length === trueScore ? true : false;

  return arrayOfValues.every(isPalindrome)
}

// console.log(isPalindromeArray(["apa", "kajak", "lehel", "görög"]));
// console.log(isPalindromeArray(["apa", "kajak", "lehel", "görögx"]));
// console.log(isPalindromeArray([999999, 1001, 22, 1]));
// console.log(isPalindromeArray([999999, 10041, 22, 1]));

const users = [
  {
    yearsOfExperience: 5,
    preferredLanguage: "JavaScript",
    skills: ["debugging", "refactoring", "testing"]
  },
  {
    yearsOfExperience: 3,
    preferredLanguage: "Python",
    skills: ["data analysis", "automation", "APIs"]
  },
  {
    yearsOfExperience: 7,
    preferredLanguage: "JavaScript",
    skills: ["UI design", "testing", "prototyping"]
  },
  {
    yearsOfExperience: 2,
    preferredLanguage: "Ruby",
    skills: ["unit testing"]
  },
  {
    yearsOfExperience: 4,
    preferredLanguage: "Python",
    skills: ["debugging", "refactoring", "machine learning"]
  },
  {
    yearsOfExperience: 6,
    preferredLanguage: "JavaScript",
    skills: ["APIs", "UX research", "testing"]
  },
  {
    yearsOfExperience: 8,
    preferredLanguage: "Go",
    skills: ["performance tuning", "automation", "refactoring"]
  },
  {
    yearsOfExperience: 1,
    preferredLanguage: "Python",
    skills: ["prototyping", "data wrangling", "testing"]
  },
  {
    yearsOfExperience: 9,
    preferredLanguage: "JavaScript",
    skills: ["UX design", "debugging", "CI/CD"]
  },
  {
    yearsOfExperience: 5,
    preferredLanguage: "Go",
    skills: ["refactoring", "unit testing", "APIs"]
  }
];

/* 
{
  yearsOfExperience: 3, -> legalább ekkora
  preferredLanguages: ["JavaScript", "Python"], -> ezekből valamelyiket tartalmazza
  skills: ["debugging"] -> must have
}
*/

const preferred1 = {
  yearsOfExperience: 3,
  preferredLanguages: ["JavaScript", "Python"],
  skill: "debugging"
}

const preferred2 = {
  yearsOfExperience: 5,
  preferredLanguages: ["Go", "Python"],
  skill: "refactoring"
}

/* 

candidate = {
    yearsOfExperience: 5,
    preferredLanguage: "Go",
    skills: ["refactoring", "unit testing", "APIs"]
  }

*/

const findTheGoodCandidates = (candidates /* array of objects */, preferred /* object */) => {
  /* const goodCandidates = [];

  for (let i = 0; i < candidates.length; i++) {
    const candidate = candidates[i];

    if (candidate.yearsOfExperience >= preferred.yearsOfExperience &&
      preferred.preferredLanguages.includes(candidate.preferredLanguage) &&
      candidate.skills.includes(preferred.skill)) {
      console.log(candidate);
    }
  }

  return goodCandidates; */

  return candidates.filter(candidate => 
    candidate.yearsOfExperience >= preferred.yearsOfExperience && 
    preferred.preferredLanguages.includes(candidate.preferredLanguage) &&
    candidate.skills.includes(preferred.skill)
  ).sort((a, b) => b.yearsOfExperience - a.yearsOfExperience)
}

console.log(findTheGoodCandidates(users, preferred1))
// console.log(findTheGoodCandidates(users, preferred2))