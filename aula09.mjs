import Car from './aula08.mjs';

class Pessoa {
    nome;
    peso;
    altura;
    imc;
  
    constructor(nome, peso, altura) {
      this.nome = nome;
      this.peso = peso;
      this.altura = altura;
    }
  
    calcularImc() {
      const imc = (this.peso / (this.altura * this.altura)).toFixed(2);
      if (imc < 18.5) {
        this.imc = "Magreza";
      } else if (imc < 25) {
        this.imc = "Normal";
      } else if (imc < 30) {
        this.imc = "Sobrepeso";
      } else if (imc < 35) {
        this.imc = "Obesidade grau I";
      } else if (imc < 40) {
        this.imc = "Obesidade grau II";
      } else {
        this.imc = "Obesidade grau III";
      }
      return console.log(
        `Olá ${this.nome}, seu IMC atualmente é: ${imc} e está categorizado como ${this.imc}`
      );
    }
  }
  
  
  const novaPessoa = new Pessoa("Gustavo", 88,1.70);
  novaPessoa.calcularImc();

  const meuCarro = new Car('Toyota ', 'Preto', 15);
  console.log(`Meu carro é um ${meuCarro.marca} ${meuCarro.cor}.`);
  meuCarro.rodar(100,5.5);

  
