// 객체의 속성들은 생성자 함수 안에 넣는 것이 일반적
function Person(name, first, second, third){
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
}

// 생성자 함수 안에 메소드가 없기 때문에 
// 객체가 생성될 때마다 호출되지 않고 한번만 생성하게 됨 -> 메모리 절약
// 객체의 메소드들은 생성자의 prototype에 추가하는 것이 일반적
Person.prototype.sum = function(){ 
    return this.first + this.second + this.third;
}

var kim = new Person('kim', 10, 20, 30);

kim.sum = function(){ // 이런식으로 객체에 따라 재정의 할 수도 있음
    return 'this : ' + (this.first + this.second + this.third);
}

var lee = new Person('lee', 10, 10, 10);

/*
    자바스크립트는 객체에서 어떠한 메소드 또는 속성을 출력할때
    해당 객체가 그 메소드 또는 속성을 가지고 있는지를 확인

    가지고 있으면 객체 내의 메소드 또는 속성을 호출
    없으면 객체의 생성자의 prototype에 해당 메소드 또는 속성이 정의 되어 있는지를 확인함
*/
console.log('kim.sum()', kim.sum());
console.log('lee.sum()', lee.sum());