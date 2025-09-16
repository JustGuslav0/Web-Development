
function calcular(){
    let horaIni = document.getElementById('horaIni')
    let minIni = document.getElementById('minIni')
    let horaFim = document.getElementById('horaFim')
    let minFim = document.getElementById('minFim')
    let atrHr = document.getElementById('horas')
    let atrMin = document.getElementById('minutos')

    let min1 = Math.floor(minIni.value)
    let hora1 = Math.floor(horaIni.value)*60
    
    let min2 = Math.floor(minFim.value)
    let hora2 =  Math.floor(horaFim.value)*60

    let horario1
    let horario2

    if(hora1<=-1||hora1>=24||min1<=-1 || min1>=60){
        alert('Horário de início inválido, favor insira novamente')
    }
    else{
        if(hora2<=-1||hora2>=24||min2<=-1 || min2>=60){
            alert('Horário de término inválido, favor insira novamente')
        }
    else{
        horario1 = Math.floor(hora1+min1)
        horario2 = Math.floor(hora2+min2)
    }
    }

    






    let matHr
    let matMin
    let horasDiferenca

    // horario1 = 20
    // horario2 = 00
    // 24 - 20

    if(horario2<horario1){
        // Diferença entre o horario do começo e do final da reunião, quando o primeiro e maior que o segundo
        horasDiferenca = horario1-horario2
        matHr = Math.floor((24*60-horasDiferenca)/60)
        matMin = Math.floor((24*60-horasDiferenca)%60)
    }
    else{
        matHr = Math.floor((horario2-horario1)/60)
        matMin = Math.floor((horario2-horario1)%60)
    }

    if(matHr<10){
    atrHr.innerText = "0" + matHr
    }
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