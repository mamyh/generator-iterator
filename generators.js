(function(){
    function *generator(){
        yield 1;
        yield 2;
        yield 3;
        yield 4;
    }
    
    let iterator = generator();
    
    console.log(iterator.next());
    
    //make object iterable
    const object ={
        value1:1,
        value2:2,
        value3:3,
        value4:4,
        value5:5,
        value6:6
    }
    function * generate(obj){
        const entries = Object.entries(obj);
        for(let element of entries){
            yield element[1];
        }
    }
    let iterator1 = generate(object);
    // console.log(iterator1.next())
    // console.log(iterator1.next())
    function *range(start,end,step){
        let current = start;
        while(current <end){
            yield current;
            console.log('did you execute??')
            current +=step;
        }
    }
    var iterator2 = range(1,10000,2);
    console.log(iterator2.next())
    console.log(iterator2.next())
    //understanding control flow for generator
    function *controlFlow(a,b){
        let k = yield a+b;
        let m = yield a+b+k;

        yield a+b+k+m;
    }
    let gen = controlFlow(10,20);
    console.log(gen.next());
    console.log(gen.next(50));
})();