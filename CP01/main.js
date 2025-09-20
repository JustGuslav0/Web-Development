function calcular(){
    // Valor das divs do HTML em variáveis aqui no JS
        // O número colocado no input das horas é transformado em minutos
    let horaIni = ((document.getElementById('horaIni')).value)*60
    let minIni = ((document.getElementById('minIni')).value)
    let horaFim = ((document.getElementById('horaFim')).value)*60
    let minFim = ((document.getElementById('minFim')).value)
    let atrHr = document.getElementById('horas')
    let atrMin = document.getElementById('minutos')  
o
    // Variáveis criadas fora do if para caso precise usar elas novamente
    let horario1
    let horario2

    // Caso o número digitado seja menor (ou maior) que as horas e minutos possíveis, alerta o user para que digite novamente
        // Neste caso, se o horário de início e término estiver errado, ele avisa que ambos estão
    if((horaIni<=-1||horaIni>=24*60||minIni<=-1 || minIni>=60) && (horaFim<=-1||horaFim>=24*60||minFim<=-1 || minFim>=60)){
        alert('Horário de início e de término inválido, favor insira novamente')
        return
    }
    // Caso não seja os 2, irá testar no horário de início e término, apontando em qual está o erro
    else{
        if(horaIni<=-1||horaIni>=24*60||minIni<=-1 || minIni>=60){
            alert('Horário de início inválido, favor insira novamente')
            return
        }
        else{
            if(horaFim<=-1||horaFim>=24*60||minFim<=-1 || minFim>=60){
                alert('Horário de término inválido, favor insira novamente')
                return
            }
            // Caso não tenha nenhum erro na digitação, prosseguimos com o cálculo
            else{
                horario1 = Math.floor(horaIni+minIni)
                horario2 = Math.floor(horaFim+minFim)
            }

        }
    }

    let matHr
    let matMin
    let horasDiferenca

    // Caso o user coloque o horário inicial maior que o horário de término
    if(horario2<horario1){
        // Diferença entre o horario do começo e do final da reunião, quando o primeiro e maior que o segundo
        horasDiferenca = horario1-horario2
        // Adiciono um dia para o cálculo, pois se uma reunião começou as 3 e terminou as 2, acabou no outro dia
            // Retorno o número inteiro, deixando uma sobra para serem calculado os minutos
        matHr = Math.floor((24*60-horasDiferenca)/60)
        // %60 faz com que os minutos que passem de uma 60, sejam armazenados separados para serem adicionados no 'minutos' do html
        matMin = Math.floor((24*60-horasDiferenca)%60)
    }
    // Se não, vai calcular normal
    else{
        matHr = Math.floor((horario2-horario1)/60)
        matMin = Math.floor((horario2-horario1)%60)
    }

    // Como o JS irá passar um valor sem o 0 à esquerda(9 ao invés de 09), faço com que se caso seja < 10, adicionar um 0, se tornando idêntico a um horário

    if(matHr<10){
    atrHr.innerText = "0" + matHr
    }
    // Caso não seja, apenas vai escrever o número normal
    else{
    atrHr.innerText = matHr
    }

    if(matMin<10){
    atrMin.innerText = "0" + matMin
    }
    else{
    atrMin.innerText = matMin
    }


}