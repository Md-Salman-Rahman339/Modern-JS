// function number(){
//     return 10;
// }

let number=()=>{
    console.log(40);
}


// let number=()=>30;return 30
// console.log(number());
number();

let num=(a,b)=>a+b;//return a+b 

console.log(num(10,20));



// var javascript={
//     name:"javascript",
//     libraries:["React","Angular","Vue"],
//     printlibraries:function(){
//         var self=this
//         this.libraries.forEach(function(a){
//             console.log(`${self.name} loves ${a}`);
//         })
//     }
// }

var javascript={
    name:"javascript",
    libraries:["React","Angular","Vue"],
    printlibraries:function(){
        var self=this
        this.libraries.forEach((a)=>
            console.log(`${this.name} loves ${a}`));
        
    }
}


javascript.printlibraries();