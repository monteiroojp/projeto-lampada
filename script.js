var on = document.getElementById('on')
on.addEventListener('click' , ligar)

var of = document.getElementById('off')
of.addEventListener('click', desligar)

var img = document.getElementById('lamp')
img.addEventListener('mouseenter' , ligar)
img.addEventListener('mouseout' , desligar)
img.addEventListener('dblclick' , quebrar)

function lampestragada(){
    return img.src.indexOf('quebrada') > -1
}

function ligar(){
    if(!lampestragada() ){
        img.src = 'imagens/ligada.jpg'
    }
}

function desligar(){
    if(!lampestragada()){
        img.src = 'imagens/desligada.jpg'
    }
}

function quebrar(){
    if(!lampestragada()){
        img.src = 'imagens/quebrada.jpg'
    }    
}