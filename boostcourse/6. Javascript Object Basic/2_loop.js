var memberArray = ['egoing', 'graphittie', 'leezche'];
console.group('array loop'); // log를 출력할 때 groupEnd 까지 인텐트를 줌? 

var i = 0;
while(i < memberArray.length){
    console.log(i, memberArray[i]);
    i += 1;
}

console.groupEnd('array loop');

console.group('object loop');
var memberObject = {
    manager : 'egoing',
    developer : 'graphittie',
    designer : 'leezche'
}

for(var name in memberObject){
    console.log(name, memberObject[name]);
}

console.groupEnd('object loop');