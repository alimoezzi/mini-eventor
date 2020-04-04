
class Listerner{
  state = false;
  func = null;
  name = "";
  trigger = [];
  constructor(state, func, name, ...trigger) {
    this.state = state;
    this.func = func;
    this.name = name;
    this.trigger = trigger;
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
      `${arguments[i]}`,
      )
  }
  }
}
