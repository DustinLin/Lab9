// moved over from script, keep js seperate
let calculateBtn = document.querySelector('#calculate');
calculateBtn.addEventListener('click', () => {
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    //can't they divide by zero
    try{
        //create custom err
        if(operator == '/' && secondNum == '0'){
            throw new DivByZeroError('Divided by zero');
        }
        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    } catch (err) {
        console.error('Error', err.name);
    } finally {
        alert('calculation finished');
    }
});


class DivByZeroError extends Error {
    constructor(msg){
        super(msg);
        this.name = 'Divide by Zero Error';
    }
}


// TODO - Make buttons functional
let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

let consoleLog = errorBtns[0];
consoleLog.addEventListener('click', () => {
    console.log('Here is a console.log demo');
});

let consoleError = errorBtns[1];
consoleError.addEventListener('click', () =>{
    console.error('Here is a console.error demo');
});

let consoleDir = errorBtns[2];
consoleDir.addEventListener('click', () => {
    console.dir(consoleDir);
});

let consoleDirXML = errorBtns[3];
consoleDirXML.addEventListener('click', () => {
    console.dirxml(document);
});

let consoleGroupSrt = errorBtns[4];
const label = 'Group label start';
consoleGroupSrt.addEventListener('click', () => {
    console.group(label);
});

let consoleGroupEnd = errorBtns[5];
consoleGroupEnd.addEventListener('click', () => {
    //label has to be the same
    console.groupEnd(label);
});

let consoleTable = errorBtns[6];
consoleTable.addEventListener('click', () => {
    let arr = [{region: 'Kanto', games: 'red/blue'}, 
               {region: 'Jhoto', games: 'gold/silver'},
               {region: 'Hoenn', games: 'ruby/sapphire'}]
    console.table(arr);
});

let consoleTimeStart = errorBtns[7];
consoleTimeStart.addEventListener('click', () => {
    console.time();
});

let consoleTimeEnd = errorBtns[8];
consoleTimeEnd.addEventListener('click', () => {
    console.timeEnd();
});

let consoleTrace = errorBtns[9];
const sinnoh = () => { unova(); };
const unova = () => { kalos(); };
const kalos = () => {console.trace();}
consoleTrace.addEventListener('click', () => {
    //stack trace will include calling the event listener anon function as well!
    sinnoh();
});

let globalErr = errorBtns[10];
globalErr.addEventListener('click', () => {
    console.log(unboundVar);
});

window.onerror = function(msg, source, lineNum, colNum, err){
    console.error(`An error (${msg}) occurred in ${source} at line ${lineNum}, column ${colNum}`);
}


