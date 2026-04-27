// Phone Class (Single Contact)
class Phone {
    constructor(name, contacts) {
        this.name = name;
        this.contacts = contacts;
    }

    display() {
        console.log(`Name: ${this.name}`);
        console.log(`Contacts: ${this.contacts.join(", ")}`);
    }

    updateContact(index, newNumber) {
        this.contacts[index] = newNumber;
        console.log("Contact updated!");
    }
}


// Phone Directory Class (Multiple Contacts)
class PhoneDirectory {
    constructor() {
        this.users = [];
    }

    addContact(phoneObj) {
        this.users.push(phoneObj);
        console.log("Contact added!");
    }

    updateContact(name, index, newNumber) {
        let user = this.users.find(u => u.name === name);
        if (user) {
            user.updateContact(index, newNumber);
        } else {
            console.log("User not found");
        }
    }

    removeContact(name) {
        this.users = this.users.filter(u => u.name !== name);
        console.log("Contact removed!");
    }

    displayAll() {
        this.users.forEach(user => {
            user.display();
            console.log("------------------");
        });
    }
}


// ===== Usage =====
const dir = new PhoneDirectory();

const p1 = new Phone("Vivek", ["9876543210", "9123456780"]);
const p2 = new Phone("Rahul", ["9999999999"]);

dir.addContact(p1);
dir.addContact(p2);

console.log("\n--- All Contacts ---");
dir.displayAll();

console.log("\n--- Update Vivek Contact ---");
dir.updateContact("Vivek", 0, "1111111111");

console.log("\n--- Remove Rahul ---");
dir.removeContact("Rahul");

console.log("\n--- Final Contacts ---");
dir.displayAll();