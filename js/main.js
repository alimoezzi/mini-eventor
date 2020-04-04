class Event {
  state = false;
  name = "";
  listeners = [];
  static instances = [];

  constructor({ name, state, func }) {
    switch (Object.keys(arguments[0]).length) {
      case 2:
        this.state = true;
        this.name = name;
        this.func = func;
        Event.instances.push(this);
        break;
      case 1:
        for (let i = 0; i < Event.instances.length; i++) {
          if (Event.instances[i].name === name) {
            return Event.instances[i];
          }
        }
        break;
      case 4:
        this.state = state;
        this.name = name;
        this.func = func;
        Event.instances.push(this);
      default:
        //do code with `a` & `b`
        break;
    }
  }

  addListerns(eventor) {
    this.listeners.concat(eventor);
  }

  setOff() {
    this.state = false;
  }

  setOn() {
    this.state = true;
  }
}

class Eventor {

  constructor() {
    this.events = []
  }

  addListerner({ name, func }) {
    const { events } = this;
    let a = new Event({ name: name, func: func });
    events.concat(a);
    a.addListerns(this);
  }

  fire(name, ...args) {
    console.log(`got new event ${ name } ${ args }`);
    let a = new Event({ name: name });
    console.log(a);
    a.func(...args);
  }

  Off(name) {
    let a = new Event({ name: name });
    a.setOff();
  }

  On(name) {
    let a = new Event({ name: name });
    a.setOn();
  }

  removeEvent(name) {
    let a = new Event({ name: name });
    a.setOff();
  }

  removeListener({ name, listerner }) {
    let a = new Event({ name: name });
    var i = 0;
    while (a.listeners !== listerner) {
      i++;
    }
    a.listeners.splice(i, 1);
  }

  countListeners(name) {
    let a = new Event({ name: name });
    return a.listeners.length
  }

  listerners(name) {
    let a = new Event({ name: name });
    return a.listeners;
  }
}

a  = new Eventor();
a.addListerner({ name: 'ali', func: (k) => (console.log(k)) });
a.fire('ali',"reza");
