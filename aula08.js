class Car{
    marca;
    cor;
    consumo = 14;
  
    constructor(consumo) {
      this.consumo = consumo;
    };
  
     rodar(distancia, precoCombustivel){
        const val = precoCombustivel*(distancia/this.consumo);
        console.log(`Para rodar ${distancia} kilometros é nessessario abastecer R$ ${val.toFixed(2)}`);
     }
  
  }
  
  const uno = new Car(17);
  uno.rodar(150,5.39);