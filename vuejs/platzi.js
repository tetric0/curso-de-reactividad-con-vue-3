class PlatziReactive {
  constructor(options) {
    // Origen
    this.origen = options.data();

    // Destino
    this.$data = new Proxy(this.origen, {
      // Trampas: get, set, has, ...
      get(target, name) {
        console.log(target, name);
      },
    });
  }

  mount() {
    document.querySelectorAll("*[p-text]").forEach((el) => {
      this.pText(el, this.$data, el.getAttribute("p-text"));
    });
  }

  pText(el, target, name) {
    el.innerText = target[name];
  }

  pModel() {}
}

var Platzi = {
  createApp(options) {
    return new PlatziReactive(options);
  },
};
