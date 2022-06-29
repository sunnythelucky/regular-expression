
// Language: javascript
// Path: regex.js
// Playground : https://regexr.com/
// https://regexlearn.com/learn/regex101



// Let's make a regex that will match the following:

// 1234567890
// 123-456-7890
// 123 456 7890
// 123.456.7890
// (123) 456-7890
// +1 123 456 7890

// The answer is:
// (?: (\+1)[-])?\(? (? <areacode>\d{3})\)?[ -\.]?(\d{3})[ -\.]?(\d{4})


