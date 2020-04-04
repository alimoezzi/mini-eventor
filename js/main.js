class Event {
  state = false;
  name = "";
  listeners = [];

  constructor(state , func, name) {
    switch (arguments.length) {
      case 0:
        //do basic code
        break;
      case 1:
        for (let i = 0; i < Event.instances.length; i++) {
          if (Event.instances[i].name === name) {
            return name;
          }
        }
        this.state = true;
        this.name = name;
        this.func = func;
        Class.instances.push(this);
        break;
      case 4:
        this.state = state;
        this.name = name;
        this.func = func;
        Class.instances.push(this);
      default:
        //do code with `a` & `b`
        break;
    }
  }

  addListerns(eventor){
    this.listeners.concat(eventor);
  }

  setOff(){
    this.state = false;
  }

  setOn(){
    this.state = true;
  }
}

class Eventor {

  constructor() {
    this.events = []
  }

  addListerner(...args) {
    const { events } = this;
    for (var i = 0; i < arguments.length; i++) {
      let a = new Event(arguments[i]);
      events.concat(a);
      a.addListerns(this);
    }
  }

  fire(name, ...args){
    console.log(`got new event ${name} ${args}`);
    let a = new Event(arguments[i]);
    a.func(...args);
  }

  Off(name){
    let a = new Event(arguments[i]);
    a.setOff();
  }

  On(name){
    let a = new Event(arguments[i]);
    a.setOn();
  }

  removeEvent(){
    let a = new Event(arguments[i]);
    a.setOff();
  }

  countListeners(name){
    let a = new Event(arguments[i]);
    return a.listeners.length
  }

  listerners(name) {
    let a = new Event(arguments[i]);
    return a.listeners;
  }

}
