function convertStringToObject(string) {
    const stack = [];
    let currentObject = null;

    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        if (char === '{') {
            const newObject = {tag: '', children: []};
            if (currentObject !== null) {
                stack.push(currentObject);
                currentObject.children.push(newObject);
            }
            currentObject = newObject;
        } else if (char === '}') {
            if (stack.length > 0) {
                currentObject = stack.pop();
            }
        } else if (char.match(/[a-zA-Z]/)) {
            if (currentObject === null) {
                currentObject = {tag: char, children: []};
            } else {
                currentObject.tag += char;
            }
        }
    }

    return currentObject;
}

const string = "view{head{clothes{}}foot{}}";
const result = convertStringToObject(string);
console.log(result)
