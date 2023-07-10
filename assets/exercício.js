 function calculaPeso(peso, altura, sereno){
  if (sereno === 'F' ){
    feminino = 62.1 * altura -44.7 ;
    console.log(feminino);
    
    }else if (sereno === 'M' ){
    masculino = 72.7 * altura - 58 ;
    console.log(masculino);
    
    }else{
    console.log('! algo esta incorrendo tende de novo !' );
    
    }
    return peso;

 } 

function imprimePesoIdeal (peso) {
  alert('Peso ideal:' + peso. toFixed(2));
}

function main(){
  let peso = parseFloat(prompt( 'Digite seu peso para descobrir seu peso ideal ?')); 
  let altura = parseFloat(prompt('Digite seu altura para descobrir seu peso ideal ?')); 
  let sereno = prompt('Digite F para feminino ou M para masculino ?');
  
  peso = calculaPeso(peso, altura, sereno.toUpperCase() )
  imprimePesoIdeal(peso);
}

main();


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
