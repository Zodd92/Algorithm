var arrString;

function removeBlank(arrString){
    let result = '';

    for (let i = 0; i < arrString.length; i++) {
      if (arrString[i] !== ' ') {
        result += arrString[i];
      }
    }
  
    return result;
}
console.log(removeBlank(" Pl ayTha tF u nkyM usi c "));

function getDigits(arrString) {
    let result = '';
  
    for (let i = 0; i < arrString.length; i++) {
      if (!isNaN(Number(arrString[i]))) {
        result += arrString[i];
      }
    }
  
    return Number(result);
  }
  
console.log(getDigits("abc8c0d1ngd0j0!8"));

function acronym(arrString) {
    let words = arrString.split(' ');
    let result = '';
  
    for (let i = 0; i < words.length; i++) {
      if (words[i] !== '') {
        result += words[i][0].toUpperCase();
      }
    }
  
    return result;
  }
  
  console.log(acronym(" there's no free lunch - gotta pay yer way. "));

  function countNonSpaces(arrString) {
    let count = 0;
  
    for (let i = 0; i < arrString.length; i++) {
      if (arrString[i] !== ' ') {
        count++;
      }
    }
  
    return count;
  }
  
  console.log(countNonSpaces("Honey pie, you are driving me crazy"));

  function removeShorterStrings(arrString, value) {
    let result = [];
  
    for (let i = 0; i < arrString.length; i++) {
      if (arrString[i].length >= value) {
        result.push(arrString[i]);
      }
    }
  
    return result;
  }
  
  console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));