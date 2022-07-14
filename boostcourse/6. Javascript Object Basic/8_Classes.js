// /*
//     자바스크립트는 ECMA script이라는 표준을 따름
//     class는 ECMA script 6부터 도입된 문법
// */

// // ES6 부터 도입됨
// class Person{

//     // 객체의 생성자 함수 (객체의 초기값 설정가능)
//     // 자바스크립트는 객체를 생성할때 자동으로 constructor 함수를 호출함
//     constructor(name, first, second, third){
//         this.name = name;
//         this.first = first;
//         this.second = second;
//         this.third = third;

//         console.log('constructor');
//     }
//     sum(){
//         return 'prototype : ' + (this.first + this.second + this.third)
//     }
// }

// var kim = new Person('kim', 10, 20, 30);
// kim.sum = function(){ // 객체에 따라 수정하고 싶으면 똑같이 하면 됨
//     return 'this : ' + (this.first + this.second + this.third)
// }
// console.log('kim', kim);
// console.log('kim', kim.sum());

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.printMe = function() {
      return console.log(this.name, this.age + "살입니다.");
    }
  }
  
  Person.prototype.printMe = function() {
    return console.log(this.name, this.age + "살");
  }

  var kim = new Person("kim", 15);
  kim.printMe();
  
  var lee = new Person("lee", 16);
  lee.printMe = function() {
    return console.log(this.name, this.age);
  }
  lee.printMe();
  
  var park = new Person("park", 17);

  park.printMe();
  
  var choi = new Person("choi", 18);
  choi.printMe();