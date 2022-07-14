var kim = {name : 'kim', first:10, second:20}
var lee = {name : 'lee', first:10, second:10}
lee.__proto__ = kim;

function sum(prefix){
    return prefix + (this.first + this.second);
}

console.log('sum.call(kim)', sum.call(kim, '=>'));
console.log('sum.call(lee)', sum.call(lee, ':'));

// bind : 함수에 들어갈 것들을 내부적으로 고정하여 새로운 함수로 리턴
var kimSum = sum.bind(kim, '->');
console.log('kimSum()', kimSum());