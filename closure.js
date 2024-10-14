function outer(){
    let name = "Khan";
    function inner(){
        let age = 22;
        console.log(`Name : ${name} , Age : ${age}`);
    }

    return inner;
}

let innerFun = outer();

innerFun();