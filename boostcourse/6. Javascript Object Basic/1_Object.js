console.log("Hello Node");

var memberArray = [
    'egoing', 'graphittie', 'leezhce'
]

console.log("memberArray[2]", memberArray[2]);

var memberObject = {
    manager : 'egoing',
    developer:'grahpittie',
    designer:'leezhce'
}

memberObject.designer = 'lezche';
console.log('memberObject.designer', memberObject.designer);
console.log('memberObject[designer]', memberObject['designer']);

delete memberObject.manager
console.log('after delete memberObject.manager', memberObject.manager);