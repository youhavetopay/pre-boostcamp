var superObj = {superVal : 'super'};
var subObj = {subVal : 'sub'};


// __proto__ 라는 prototype link를 통해서 객체를 상속 받을 수 있음
subObj.__proto__ = superObj;

console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);

// 상속 받은 객체가 부모의 속성을 바꿔도 부모 객체의 속성은 변하지 않음
subObj.superVal = 'sub';
console.log('subObj.superVal =>', subObj.superVal);
console.log('superObj.superVal =>', superObj.superVal);