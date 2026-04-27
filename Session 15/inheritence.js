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
class ElectricCar extends Car{
    constructor(name,color,model,batteryCapacity){
        super(name,color,model); //pass value to parent class constructor
        this.batteryCapacity = batteryCapacity;
    }
    charge(){
            console.log(`Charging: ${this.name}`);
        }
}


let c1 = new Car('Tata Altroz','golden','2020') //creating object
let c2 = new ElectricCar('Tata Nexon EV','Black','2023','100 km/h') //creating object

c1.display();
c2.display();
c1.start(); c2.start();
c1.stop(); c2.stop();
c2.charge();
