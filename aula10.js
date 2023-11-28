const alunos  = ['João','Sarah','Miguel'];

alunos.push('Talysson');

alunos[4] = 'Lívia';

alunos.pop();

console.log(alunos); 

console.log(alunos.shift());


const notas = [];

notas.push(5);
notas.push(8);
notas.push(5);
notas.push(2);
notas.push(7);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4] ;

console.log(soma / notas.length);