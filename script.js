//função para sortear um número de 1 a 20
function advinhacao(){
    let adv = Math.floor(Math.random() * 20) + 1;
    return adv;
}
//função para retornar o resultado esperado
function darresposta(){
    let final = advinhacao();
    if(final == 1){
        return "É certeza"
    }else if(final==2){
        return "Foi decidido que sim"
    }else if(final==3){
        return "Sem sombra de dúvida"
    }else if(final==4){
        return "Definitivamente sim"
    }else if(final==5){
        return "Pode contar com isso!"
    }else if(final==6){
        return"Como posso ver, sim!"
    }else if(final==7){
        return "É muito provável"
    }else if(final==8){
        return "Uma boa chance de ocorrer"
    }else if(final==9){
        return "Sim!"
    }else if(final==10){
        return "Tudo indica que sim!"
    }else if(final==11){
        return "Não há resposta para essa pergunta, tente novamente"
    }else if(final==12){
        return "Pergunte novamente mais tarde"
    }else if(final==13){
        return "É melhor você não saber a resposta agora"
    }else if(final==14){
        return "Impossível prever o resultado no momento"
    }else if(final==15){
        return "Se concentre e pergunte novamente!"
    }else if(final==16){
        return "Não conte com isso"
    }else if(final==17){
        return "A resposta é não!"
    }else if(final==18){
        return "Minhas fontes dizem que não"
    }else if(final==19){
        return "Não me parece bom"
    }else if(final==20){
        return "Muito improvável"
    }
}
//comando para imprimir na tela o resultado ao clicar no botão.
document.getElementById("olhoOraculo").addEventListener("click", function() {
    document.getElementById("textoBola").innerHTML = darresposta();
});