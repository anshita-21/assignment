function func(){
    let a=prompt("enter a value");
    if(a!=null){
        console.log("you entered: ", a, "with type: ", typeof a);
    }
}

function arith(){
    let a=Number(prompt("enter first number"));
    let b=Number(prompt("enter second number"));
    let sum=a+b;
    console.log("sum: "+sum);
    let diff=a-b;
    console.log("difference: "+diff);
    let prod=a*b;
    console.log("product: "+prod);
    let div=a/b;
    console.log("division: "+div);
    let mod=a%b;
    console.log("modulus: "+mod);
    let pow=Math.pow(a,b);
    console.log("power: "+pow);
    let sqrt=Math.sqrt(a);
    console.log("square root: "+sqrt);
    let floor=Math.floor(a);
    console.log("floor value: "+floor);

}