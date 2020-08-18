let setValue = Array.from(document.getElementsByTagName('td'));
setValue.map(v => {
    v.textContent = Math.round(Math.random() * (9 - 0) + 0)
})
let values = Array.from(document.getElementsByTagName('td'));
let sum = [];
let total = [];
let target = 0; 
let operations = []; 
let shifts = Math.ceil(values.length/3.6)

values.map(o=>{
    let getOperator = Math.floor(Math.random() * (4 - 1)) + 1
    if(operations.length <= values.length/3.6){
        operations.push(getOperator)
    }
})

let operation = (a, b, i)=>{
    if (operations[i] == 1){
        total.push(a+b)
    } else if(operations[i] == 2){
        total.push(a-b)
    } else if(operations[i] == 3){
        total.push(a*b)
    } else if(operations[i] == 4){
        total.push(a/b)
    } 
}

let getNum = (e)=> {
    e.path[0].setAttribute('class', 'disabled')
    sum.push(parseInt(e.path[0].textContent))
    if (sum.length > 1){
        document.getElementById('shifts').textContent =  shifts - (total.length + 1) 
        if (operations[shifts - (total.length+2)] == 1){
            document.getElementById('operation').textContent = 'Suma'
        } else if(operations[shifts - (total.length+2 )] == 2){
            document.getElementById('operation').textContent = 'Resta'
        } else if(operations[shifts - (total.length+2 )] == 3){
            document.getElementById('operation').textContent = 'Multiplicación'
        } else if(operations[shifts - (total.length+2 )] == 4){
            document.getElementById('operation').textContent = 'División'
        }
        operation(sum[0], sum[1], shifts - (total.length + 1))
        let current = 0
        total.map(t=>{
            current += t
            document.getElementById('current').innerText = current
        })
        if (current == target){
            document.getElementById('result').innerText = '😎 ¡Ganaste!'
        }
        else  if (shifts - total.length == 0){
            document.getElementById('result').innerText = '😔 ¡Perdiste!'
        }else if (current > target) {
            document.getElementById('result').innerText = '😔 ¡Perdiste!'
        }
        sum.shift()
        sum.pop()
    }
}

values.map(v=>{
    v.addEventListener('click', getNum);
    target = Math.round(target + parseInt(v.textContent)/1.1)
})

document.getElementById('target').innerText = target

document.getElementById('action').addEventListener('click', ()=>{
    location.reload();
})

document.getElementById('shifts').textContent = shifts

if (operations[operations.length - 1] == 1){
    document.getElementById('operation').textContent = 'Suma'
} else if(operations[operations.length - 1] == 2){
    document.getElementById('operation').textContent = 'Resta'
} else if(operations[operations.length - 1] == 3){
    document.getElementById('operation').textContent = 'Multiplicación'
} else if(operations[operations.length - 1] == 4){
    document.getElementById('operation').textContent = 'División'
} 