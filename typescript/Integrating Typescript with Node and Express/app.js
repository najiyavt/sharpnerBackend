<<<<<<< HEAD
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const todos_1 = __importDefault(require("./routes/todos"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(todos_1.default);
app.listen(3000);
=======
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var btn = document.querySelector('button');
var numResults = [];
var textResults = [];
function addNum(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
btn.addEventListener('click', function () {
    var n1 = num1.value;
    var n2 = num2.value;
    var result = addNum(+n1, +n2);
    numResults.push(result);
    var stringResult = addNum(n1, n2);
    textResults.push(stringResult);
    printResult({ val: result, timestamp: new Date() });
    console.log(numResults, textResults);
});
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('It worked!');
    }, 1000);
});
promise.then(function (result) {
    console.log(result.split('w'));
});
>>>>>>> 9bfb2aa5ac35640b95e31caf854b04a91ae25a19
