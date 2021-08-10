(function(){
    // let obj ={
//     name:'mamn',
//     age:34,
//     completed:true,
// }
// for(let element of obj){//object is not iterable
//     console.log(element);
// }
//change global behavier of String
// String.prototype[Symbol.iterator]=function(){
//     let count=this.length;
//     return {
//         next(){
//             if(count > 0 ){
//                 count--;
//                 return {
//                     done:false,
//                     value:'Mamun'
//                 }
//             }
//            return { done:true}
//         },
//     }
// }
// console.log([..."javascript"]);

function range(start , end , step){
    let current = start;
   return {
       //iterable protocol
       [Symbol.iterator]:function(){
           //iterator protocol
           return {
               next(){
                   if(current < end ){
                       let result={
                           value:current,done:false
                       }
                       current +=step;
                       return result ;
                   }
                   return {
                       done:true
                   }
               }
           }
       },
   }
}

console.log([...range(1,10000000,5)]);

//make object iterable 
let object1={
    val1:10,
    val2:11,
    val3:12,
    val4:13,
    val5:14,
    val6:15
}
console.log('object entries',Object.entries(object1));
Object.prototype[Symbol.iterator] = function(){
    const entries = Object.entries(this);
    let count = entries.length;
    let index = 0;
    return{
        next(){
            if(count > 0 ){
                let result ={done:false,value:entries[index][1]};
                count--;
                index++;
                return result;
            }
            return {
                done:true
            }
        }
    }
}
for(let element of object1){
    console.log(element);
}
console.log([...object1])
})()