class Event {
  state = false;
  name = "";

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
        Class.instances.push(this);
        break;
      case 3:
        this.state = state;
        this.name = name;
        Class.instances.push(this);
      default:
        //do code with `a` & `b`
        break;
    }
  }
}

class Eventor {

  constructor() {
    this.listerners = []
  }

  addListerner(...args) {
    const { listerners } = this;
    for (var i = 0; i < arguments.length; i++) {
      listerners.concat(new Listerner(arguments[i]))
    }
  }
}
