let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 
'you', 'can', 'figure', 'out.', '-2015,', 
'Chris', 'Pine,', 'Learn', 'JavaScript'];

//remove the last element of an array

secretMessage.pop();

// checking the size of an array

 const size = secretMessage.length;
 console.log(size);
 
// adding  'to' and 'program' in  the array 
 const adding = secretMessage.push('to','program');
 console.log(adding);
console.log(secretMessage);

// replacing easily with right

secretMessage[7] = 'right';
console.log(secretMessage);

// removing the first string of secret message

secretMessage.shift();
console.log(secretMessage);

// adding element at the begining

secretMessage.unshift('programming');
console.log(secretMessage);

//removing multiple word and replace it with the new word

secretMessage.splice(6,5,'know');
console.log(secretMessage);

//printing the secret message

console.log(secretMessage.join(' '));