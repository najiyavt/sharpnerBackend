<<<<<<< HEAD
import express from 'express';
import bodyParser from 'body-parser';

import todosRouter from './routes/todos';

const app = express();

app.use(bodyParser.json());

app.use(todosRouter);

app.listen(3000)
=======
const num1 = document.getElementById('num1') as HTMLInputElement;
const num2 = document.getElementById('num2') as HTMLInputElement;
const btn = document.querySelector('button')! ;

const numResults: Array<number> =[];
const textResults: string[] =[];

type NumOrString = number | string;
type Result =  {val: number ; timestamp : Date };

interface ResultObj {
    val: number ; 
    timestamp : Date 
}



function addNum( num1: NumOrString , num2: NumOrString) {
    if(typeof num1 === 'number' && typeof num2 === 'number' ){
        return num1 + num2 ;
    }else if( typeof num1 === 'string' && typeof num2 === 'string'){
        return num1 +' '+ num2;
    }
    return +num1 + +num2 ;
}

function printResult ( resultObj : ResultObj ){
    console.log(resultObj.val)
}

btn.addEventListener('click' , () => {
    const n1 = num1.value;
    const n2 = num2.value;
    const result = addNum( +n1 , +n2 );
    numResults.push(result as number);
    const stringResult = addNum( n1 , n2);
    textResults.push(stringResult as string);
    printResult({val : result as number, timestamp : new Date()})
    console.log( numResults , textResults)
});

const promise = new Promise<string>((resolve , reject) => {
    setTimeout(() => {
        resolve('It worked!');
    },1000);
});

promise.then((result) => {
    console.log(result.split('w'))
})
>>>>>>> 9bfb2aa5ac35640b95e31caf854b04a91ae25a19
