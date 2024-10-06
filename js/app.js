const app = Vue.createApp({
  data() {
    return {
      filaComum: [],
      filaEspecial: [],
      contadorComum: 1,
      contadorEspecial: 1
    }
  },
  methods: {
    gerarFilaComum() {
      let senha = "C" + String(this.contadorComum).padStart(3, '0');
      this.filaComum.push(senha);
      this.contadorComum++;
    },
    gerarSenhaEspecial() {
      let senha = "E" + String(this.contadorEspecial).padStart(3, '0');
      this.filaEspecial.push(senha);
      this.contadorEspecial++;
    },
    atenderFilaComum() {
      if (this.filaComum.length) {
        alert("Atendendo " + this.filaComum[0]);
        this.filaComum.shift();
      } else {
        alert("Nenhuma senha na fila comum.");
      }
    },
    atenderFilaEspecial() {
      if (this.filaEspecial.length) {
        alert("Atendendo " + this.filaEspecial[0]);
        this.filaEspecial.shift();
      } else {
        alert("Nenhuma senha na fila especial.");
      }
    }
  }
});

app.mount('#app');
