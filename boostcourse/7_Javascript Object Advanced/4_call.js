var kim = {name : 'kim', first:10, second:20}
var lee = {name : 'lee', first:10, second:10}
lee.__proto__ = kim;

function sum(prefix){
    return prefix + (this.first + this.second);
}

/*
    자바스크립트의 모든 함수는 call이라는 메소드를 가짐
    자바스크립트에서는 함수도 객체임
*/

// call 메소드의 인자로 객체를 지정하면 해당함수의 this는 인자로 받은 객체가 됨
// call은 여러 인자를 가질 수 있음
// 첫번째 인자는 this로 지정할 객체가 오고 그 뒤엔 함수의 인자값들
console.log('sum.call(kim)', sum.call(kim, '=>'));
console.log('sum.call(lee)', sum.call(lee, '=>'));