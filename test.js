const testArr = ['a', 'b', 'c']

const testState = ['a', 'b', 'c', 'd', 'e'];

const filteredState = testState.filter(item => testArr.includes(item));

console.log(filteredState)