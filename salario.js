import entradaDados from 'readline-sync';

let salarioMinimo = [
    {ano: 2010, salario: 510.00},
    {ano: 2011, salario: 545.00},
    {ano: 2012, salario: 622.00},
    {ano: 2013, salario: 678.00},
    {ano: 2014, salario: 724.00},
    {ano: 2015, salario: 788.00},
    {ano: 2016, salario: 880.00},
    {ano: 2017, salario: 937.00},
    {ano: 2018, salario: 954.00},
    {ano: 2019, salario: 998.00},
    {ano: 2020, salario: 1045.00}
];

let inflacao = [
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52}
];

console.log("Escolha uma opção: \n");
console.log("1 - Listar os salários mínimos de 2010 à 2020");
console.log("2 - Listar o índice de IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA\n");

let escolha = entradaDados.question("Digite o número da sua escolha: ");

switch(Number(escolha)){
    case 1: 
        for(let salariosTotais of salarioMinimo){
            let salarioAno = salariosTotais.ano;
            let salarioValor = salariosTotais.salario;
            let salarioValorFormatado = salarioValor.toFixed(2).replace(".",",");

        console.log("\n"+"Ano: ".padEnd(30,".") +salarioAno);
        console.log("Salário mínimo: ".padEnd(30,".") +"R$ "+salarioValorFormatado);
        }
    break;

    case 2:
        for(let inflacoesTotais of inflacao){
            let inflacaoAno =  inflacoesTotais.ano;
            let inflacaoIpca = inflacoesTotais.ipca;
            let inflacaoIpcaFormatada = inflacaoIpca.toFixed(2).replace(".",",");

        console.log("\n"+"Ano: ".padEnd(30, ".") +inflacaoAno);
        console.log("Inflação IPCA: ".padEnd(30,".")+inflacaoIpcaFormatada+"%");    
        }
    break;
    
    case 3:
        
    for(let contador = 0; contador < salarioMinimo.length; contador++){
        const dadosSalariais = salarioMinimo[contador];
        const dadosInflacoes = inflacao[contador];

        console.log("\n"+"Ano: ".padEnd(30, ".")+dadosSalariais.ano);
        console.log("Salário mínimo: ".padEnd(30, ".")+"R$ "+dadosSalariais.salario.toFixed(2).replace(".",","));

        if(contador > 0){
            const salarioAnterior = salarioMinimo[contador - 1].salario;
            const crescimentosalario = ((dadosSalariais.salario - salarioAnterior) / salarioAnterior) * 100;

            console.log("Crescimento salarial: ".padEnd(30, ".")+crescimentosalario.toFixed(2).replace(".", ",")+"%");
        }else{
            console.log("Crescimento salarial -");
        }

        console.log("Inflação IPCA: ".padEnd(30, ".")+dadosInflacoes.ipca.toFixed(2)+"%");
    }
    break;
    
    default:
        console.log("Opção Inválida");

};
