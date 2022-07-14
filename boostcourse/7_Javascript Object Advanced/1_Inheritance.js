/*
    다른 언어에서의 상속
    자바에서는 sub Class 가 super class의 기능을 물려 받기 위해선
    sub Class가 super Class의 자식이 되어야 함
    그리고 만들어진 sub Class를 통해 객체를 생성

    => 객체가 어떤 기능을 가질지는 class 단에서 결정
       객체가 다른 객체의 상속을 받는 등의 경우는 불가능


       
    자바스크립트의 상속
    자바스크립트에서의 class 키워드는 장식에 불과함 -> 내부 동작 방식이 바뀐게 아님

    sub Object는 super Object로 부터 바로 상속을 받음
    -> class가 상속을 받는 방식과는 다르게 객체가 직접 다른 객체를 상속 받을 수 있고 
        얼마든지 상속 관계를 바꿀 수 있음

    이미 상속을 받고 있는 sub Object가 다른 객체로 부터 상속을 받고 싶으면 링크를 바꿔주면 됨
    prototype link
    prototype link가 가리키는 객체를 prototype object라고 함

    => 자바스크립트에선 객체가 바로 상속을 받음
*/


class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
        console.log('constructor');
    }

    sum(){
        return this.first + this.second;
    }
}

class PersionPlus extends Person { // Person 클래스를 상속 받음

    constructor(name, first, second, third){
        super(name, first, second); // super() 부모의 기능을 먼저 실행
        this.third = third;
    }

    sum(){
        return super.sum() + this.third;
    }

    avg(){
        return (this.first + this.second) / 2;
    }
}

var kim = new PersionPlus('kim', 10, 20, 30);
console.log('kim.sum()', kim.sum());
console.log('kim.avg()', kim.avg());