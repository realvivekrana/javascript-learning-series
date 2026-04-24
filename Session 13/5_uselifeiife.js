(function(){
        let count = 0;

        function increment(){
            count++;
            console.log(`Counter: ${count}`);
        }
        function decreament(){
            count--;
            console.log(`Counter: ${count}`);
        }
        console.log(count);
        increment();
        decreament();
    })();