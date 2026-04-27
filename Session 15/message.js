class Message{
    constructor(sender,message){
        this.sender = sender;
        this.message = message;
        this.timestamp = new Date();
    }
    display(){
        console.log(`Sender: ${this.sender} ${this.formatTimeStamp()}; ${this.message}`);
        
    }
    formatTimeStamp(){
        return this.timestamp.toLocaleTimeString();
    }
}
class ChatRoom{
    constructor(){
        this.message=[];
    }
    sendMessage(sender,message){
        const msgObj = new Message(sender,message);
        this.message.push(msgObj);
        this.displayChat();
    }
    displayChat(){
        console.clear() //Just to clear console
        this.message.forEach((msg)=>msg.display());
    }
}

const chat = new ChatRoom();
chat.sendMessage("Sonam", "Hello");
chat.sendMessage("Abhishek", "How are you?");
chat.sendMessage("Anita", "Good Morning");