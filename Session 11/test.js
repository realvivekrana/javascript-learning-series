
        function test1() {
            setTimeout(print,2000);
            //wait for 2 seconds and then print function
            //passing the function as argument called callback
            console.log("Tast1 completed");
        }

        function print() {
            console.log("Timer Completed");
        }
        test1();
  