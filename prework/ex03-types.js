 const passedText = '17';
 const failedText = '3';


console.log(passedText + failedText );
//When we use the + operator the two strings are concatenated

const convertedPassed = Number(passedText);
const convertedFailed = Number(failedText);

console.log(convertedPassed + convertedFailed);


console.log('Passed Text type is ' + typeof(passedText) + ' and converted Passed Text type is ' + typeof(convertedPassed));
console.log('Failed Text type is ' + typeof(failedText) + ' and converted Failed Text type is ' + typeof(convertedFailed));