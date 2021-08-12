(function(){
  const takeOrder=(customer)=>{
      return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`order taken from ${customer}`);
          },1000)
      })
  }
  const proccessOrder =(customer)=>{
      return new Promise((resolve)=>{
        setTimeout(()=>{
           resolve(`order processed for ${customer}`);
        },2000);
      })
  }
  const completeOrder=(customer)=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(`order completed for ${customer}`);
            },500)
        })
  }
//   takeOrder("Mamun",(customer)=>{
//       proccessOrder(customer,(customer)=>{
//           completeOrder(customer,(customer)=>{
//               console.log(`${customer} was served`);
//           })
//       })
//   })
 async function *solution(customer){
       yield await takeOrder(customer);
       yield await proccessOrder(customer);
       yield await completeOrder(customer);
   }
   let gen = solution("Mamun");
  //  gen.next().then(value=>{
  //    console.log(value);
  //  })
  //  gen.next().then(value=>{
  //    console.log(value)
  //  });
  //  gen.next().then(value=>{
  //    console.log(value)
  //  });
  let promises =[gen.next(),gen.next(),gen.next()];
 (async function(){ 
   for await(let p of promises){
      console.log(p)
  }
})();
})();