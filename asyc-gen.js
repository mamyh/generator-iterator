(function(){
  const takeOrder=(customer,callback)=>{
    setTimeout(()=>{
      console.log(`order taken from ${customer}`);
      callback(customer);
    },1000)
  }
  const proccessOrder =(customer,callback)=>{
      setTimeout(()=>{
          console.log(`order processed for ${customer}`);
          callback(customer);
      },2000);
  }
  const completeOrder=(customer,callback)=>{
     setTimeout(()=>{
         console.log(`order completed for ${customer}`);
         callback(customer);
     },500)
  }
  takeOrder("Mamun",(customer)=>{
      proccessOrder(customer,(customer)=>{
          completeOrder(customer,(customer)=>{
              console.log(`${customer} was served`);
          })
      })
  })
})()