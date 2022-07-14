function Person(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
}

Person.prototype.sum = function(){
    return this.first + this.second;
}

function PersonPlus(name, first, second, third){
    Person.call(this, name, first, second); // call을 통해 PersonPlus로 만들어지는 객체를 부모의 생성자를 호출함
    this.third = third;
}


// 두개 다 동일한 방식 -> __proto__ 는 표준이 아니라서 Object.create()를 사용하는게 좋음??
// PersonPlus.prototype.__proto__ = Person.prototype; 
PersonPlus.prototype = Object.create(Person.prototype);

/*
    이거 안하면 PersonPlus로 생성된 객체는 Person을 가리키고 있음
    위에서 새로운 객체로 만들어 대체했기 때문에 PersonPlus의 constructor를 잃어버리게 됨
    따라서 추가로 PersonPlus의 constructor로 다시 바꿔줘야 함

    그리고 이렇게 클래스를 구현하는 방법 보단 class 키워드를 사용해서 하는게 코드의 직관성이 높아짐
    하지만 어느정도 자바스크립트의 Class의 내부 동작을 알고 있으면 좋음
*/
PersonPlus.prototype.constructor = PersonPlus;

PersonPlus.prototype.avg = function(){
    return (this.first + this.second + this.third) / 3;
}

var kim = new PersonPlus('kim', 10, 20, 30);
console.log('kim.sum()', kim.sum());
console.log('kim.avg()', kim.avg());