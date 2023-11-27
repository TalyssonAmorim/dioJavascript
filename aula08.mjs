export default class Car{
    marca;
    cor;
    consumo = 14;
  
    constructor(marca, cor, consumo) {
      this.marca = marca;
      this.cor = cor;
      this.consumo = consumo;
    };
  
     rodar(distancia, precoCombustivel){
        const val = precoCombustivel*(distancia/this.consumo);
        console.log(`Para rodar ${distancia} kilometros é nessessario abastecer R$ ${val.toFixed(2)}`);
     }
  
  }
