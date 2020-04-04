
class Event{
  state = false;
  name = "";
  constructor(state, func, name) {
    this.state = state;
    this.name = name;
  }
}

class Eventor {

  constructor() {
    this.listerners = []
  }

  addListerner(...args){
    const { listerners } = this;
    for (var i = 0; i < arguments.length; i++) {
    listerners.concat(new Listerner(
      false,
      typeof arguments[i] == "function" ? arguments[i] : new Function(arguments[i]),
      `${arguments[i]}`))
  }
  }
}
