// 1

let i = 3;
while (i) {
   alert( i-- )
}

// the last value to be alerted is "1"

let a = 3;
while (++a < 5){
    alert(a)
}


// 2

for (let i = 0; i < 5; i++){
    alert (i)
}
for (let i = 0; i < 5; ++i){
    alert (i)
}


// 3

for (a = 1; a <= 10; a++){
        if (a % 2 == 0){
            alert (a)
        }
}

// 4

let b = 1;
while (b < 5){
   alert(b)
   b++
}


// 5

let num =  50;
label:while(num > 20){
    let input = prompt("input a number.")
        
    if (!input){
        break label
    }

    if (input < 100){
        prompt("input again!!")
    }  
    
    else if (input > 100){
        alert("Okay.");
        break
    }
}
