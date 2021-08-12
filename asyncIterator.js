(function(){
   const myAsyncIterable ={
    async *[Symbol.asyncIterator](){
        yield "hello";
        yield "async";
        yield "iterator";
       },
   } ;

  (async ()=>{
      for await(let x of myAsyncIterable){
         console.log(x);
       }
   })();
})();