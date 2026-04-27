class Car{
    constructor(name, color, model){
        this.name = name;
        this.color = color;
        this.model = model;
    }
    start(){
        console.log(`Started: ${this.name}`);
        
    }
    stop(){
        console.log(`Stopped: ${this.name}`);
        
    }
    display(){
        console.log(`Name: ${this.name}`);
        console.log(`Color: ${this.color}`);
        console.log(`Model: ${this.model}`);
        console.log("........................");
    }
}

let c1 = new Car('Tata Altroz','golden','2020')
let c2 = new Car('Tata Nexon EV','Black','2023')

c1.display();
c2.display();
c1.start(); 
c2.start();
c1.stop(); 
c2.stop();

const cars =[c1,c2];