var kim = {
    name : 'kim',
    first : 10,
    second : 20,
    sum:function(){
        return this.first, this.second; // this : 자신이 속한 객체의 대명사?
    }
}

console.log('kim.sum(kim.first, kim.second)', kim.sum());