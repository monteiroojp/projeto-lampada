let butOnOff = window.document.getElementById('butOnOff')
butOnOff.addEventListener('click' , lampOnOff)

let lamp = window.document.getElementById('lamp')

function lampOnOff(){
    if(butOnOff.value == 'Ligar'){
        Ligar()
        butOnOff.value = 'Desligar'
    }
    else{
        Desligar()
        butOnOff.value = 'Ligar'
    }
}

function Ligar(){
    if(!isLampBroken()){
        lamp.src = 'imagens/ligada.jpg'
    }
}

lamp.addEventListener('mouseenter' , Ligar)

function Desligar(){
    if(!isLampBroken()){
    lamp.src = 'imagens/desligada.jpg'
    }
}

lamp.addEventListener('mouseout' , Desligar)

function isLampBroken(){
    return lamp.src.indexOf  ('quebrada')  > -1
}

function Quebrar(){
    lamp.src = 'imagens/quebrada.jpg'
}

lamp.addEventListener('dblclick' , Quebrar)
