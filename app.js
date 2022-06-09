const app = Vue.createApp({
  data() {
    return {
      letter: "",
      nato: "Press any letter to get the NATO alphabet equivalent",
      code: {
        A: "Alfa",
        B: "Bravo",
        C: "Charlie",
        D: "Delta",
        E: "Echo",
        F: "Foxtrot",
        G: "Golf",
        H: "Hotel",
        I: "India",
        J: "Juliett",
        K: "Kilo",
        L: "Lima",
        M: "Mike",
        N: "November",
        O: "Oscar",
        P: "Papa",
        Q: "Quebec",
        R: "Romeo",
        S: "Sierra",
        T: "Tango",
        U: "Uniform",
        V: "Victor",
        W: "Whisky",
        X: "Xray",
        Y: "Yankee",
        Z: "Zulu",
      },
    };
  },
  mounted() {
    window.addEventListener("keydown", (evt) => {
      this.getKey(evt);
      this.getNato(evt);
    });
  },
  methods: {
    getKey(evt) {
      return this.letter = evt.key.toUpperCase();
    },
    getNato(evt) {
      return this.nato = this.code[evt.key.toUpperCase()] || "Please press a letter";
    },
  },
});

app.mount("#root");
