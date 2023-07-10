//Exercício1

let peso; 
let sereno;
let altura; 
peso = prompt('Digite seu peso para descobrir seu peso ideal ?');
altura = prompt('Digite seu altura para descobrir seu peso ideal ?');
sereno = prompt('Digite F para feminino ou M para masculino ?');

sereno = sereno.toUpperCaser();

if (sereno === 'F' ){
feminino = 62.1 * altura -44.7 ;
console.log(feminino);

}else if (sereno === 'M' ){
masculino = 72.7 * altura - 58 ;
console.log(masculino);

}else{
console.log('! algo esta incorrendo tende de novo !' );

}

const pessoa ={
    nome:'Lucas Paquetá',
    idade:27,
    peso:53,
    altura:1.70,
    sereno:'masculino',
    cidade:'Campo Grande',
    estados:'Mato Grosso do Sol',
    país:'Brasil'
   };
   for(let artributo in pessoa){
     console.log(artributo + " : " + pessoa[artributo]);
   }











