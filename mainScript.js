// q
let a=95
if( a>=90 ){

    console.log("A");


}else if( a>=80 ){

    console.log("B");

}else if (a>=70   ){
    console.log("C");

}else if (a>=60  ){
    console.log("D");

}else{
    console.log("F");

}




// q1

let b=15
if( b%3==0 && b%5==0 ){

    console.log(" fizzBuzz");


}else if( b%5==0 ){

    console.log(" buzz");

}else if (b%3==0  ){
    console.log("fizz");

}else{
    console.log("non");
}




// q1
for (let i = 0; i <= 10; i++) {
    console.log(Math.pow(i, 2));

    
}

// q2
for (let j = 0; j < 20; j++) {
    if(j%2==0){
        
    }else{
        console.log("odd",j);
    }
    
}

// q3
 for (let j = 0; j < 25; j++) {
        if(j%2==0){
            console.log("even",j);
        }else{
            
        }
        
    }

// q4
let t = 8;
for (let i = 1; i <= t; i++) {
  let aa = "";
  for (let j = 1; j <= i; j++) {
    aa += j + "";
  }
  console.log(aa);
}


