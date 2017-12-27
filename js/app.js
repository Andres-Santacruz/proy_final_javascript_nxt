function validarPunto(num){
  var ban=0;
  for (var i = 0; i < num.length; i++) {
    if(num[i]=='.'){
      ban=1;
    }
  }
  return ban;
}
function operaciones(valor) {
  s1=parseFloat(valor1);
  s2=parseFloat(valor2);
  switch (valor) {
    case 1:
      result=s1+s2;
      break;
    case 2:
      result=s2-s1;
      break;
    case 3:
      result=s1*s2;
      break;
    case 4:
      if (s1==0) {
        result=0;
        alert('División entre cero ')
      }
      else {
        result=s2/s1;
      }
      break;
    default:
  }
  return result;
}
function imprimirPantalla(elemnt) {
  ver=elemnt.id;
  pan=document.getElementById('display');
  conte=pan.innerHTML;
  if (conte=='') {
      op2=2;
      valor2=valor;
  }else {
    op2=1;
    valor1=conte;
  }
  num=parseInt(ver);
  if (num>=0) {
    if (conte!=0) {
      if (conte.length<8) {
        pan.innerHTML=conte+num;
      }
    }else {
      valiceroyP=validarPunto(conte);
      if (valiceroyP==1) {
        if (conte.length<8) {
          pan.innerHTML=conte+num;
        }
      }else {
        pan.innerHTML=num;
      }
    }
  }
  switch (ver) {
    case "on":
      pan.innerHTML='0';
    break;

    case "punto":
      validarP=validarPunto(conte);
      if (validarP<1) {
        pan.innerHTML=conte+'.';
      }
    break;

    case "igual":
      if (opertecla>0) {
        resul=operaciones(opertecla);
      }else {
        resul=conte;
      }
      var v='';
      resul=''+resul;
      if (resul.length>8) {
        for (var i = 0; i < 8; i++) {
          v=v+resul[i];
        }
      pan.innerHTML=v;
    }else {
      pan.innerHTML=''+resul;
    }
    break;

    case "mas":
      opertecla=1;
      pan.innerHTML='';
      valor=conte;
    break;

    case "menos":
      opertecla=2;
      pan.innerHTML='';
      valor=conte;
    break;

    case "por":
      pan.innerHTML='';
      opertecla=3;
      valor=conte;
    break;

    case "dividido":
      pan.innerHTML='';
      opertecla=4;
      valor=conte;
    break;

    case "sign":
      x=pan.innerHTML;
      if(parseInt(x)>0){
        pan.innerHTML='-'+x;
      }else if (parseInt(x)<0) {
        pan.innerHTML=''+ Math.abs(parseFloat(x));
      }
    break;

    case 'raiz':
      x=pan.innerHTML;
      if(parseInt(x)>0){
        pan.innerHTML=''+ Math.sqrt(x).toFixed(5);
      }
      else if (parseInt(x)==0) {
        pan.innerHTML='0';
      }else {
        pan.innerHTML='0';
        alert('Error Radicando Negativo')
      }
    break;

    default:
  }
}

function disminuir(elem) {
  verificar=elem.id;
  seccionClick=elem.nodeName;
  if (seccionClick=="DIV") {
    verificar="otro"
  }
  if (verificar!="mas" && verificar!="otro") {
    elem.style.height="59.5px";
  }
  switch (verificar) {
    case "0":
      elem.style.width="28%";
      break;
    case "1":
    elem.style.width="28%";
      break;
    case "2":
    elem.style.width="28%";
      break;
    case "3":
    elem.style.width="28%";
      break;
    case "mas":
    elem.style.height="95%";
    elem.style.width="90%";
      break;
    case "punto":
    elem.style.width="28%";
      break;
    case "igual":
    elem.style.width="28%";
      break;
    case "otro":

      break;

    default:
    elem.style.width="21.5%";

  }
}
function aumenta(elem) {
  verificar=elem.id;
  seccionClick=elem.nodeName;
  if (seccionClick=="DIV") {
    verificar="otro"
  }else {
    imprimirPantalla(elem);
  }
  if (verificar!="mas" && verificar!="otro") {
    elem.style.height="62.91px";
  }
  switch (verificar) {
    case "0":
      elem.style.width="29%";
      break;
    case "1":
    elem.style.width="29%";
      break;
    case "2":
    elem.style.width="29%";
      break;
    case "3":
    elem.style.width="29%";
      break;
    case "punto":
    elem.style.width="29%";
      break;
    case "igual":
    elem.style.width="29%";
      break;
    case "mas":
    elem.style.height="100%";
    elem.style.width="100%";
      break;
    case "otro":

      break;

    default:
    elem.style.width="22%";
  }
}

var Calculadora = {
  init: function(){
    this.eventoClick();
  },
  eventoClick: function(){
    tecladoSeccion=document.getElementsByClassName('teclado');
    tecladoSeccion[0].onmousedown=this.asigDisminuir;
    tecladoSeccion[0].onmouseup=this.asigAumento;
  },
  asigDisminuir:function(event){
    disminuir(event.target);
  },
  asigAumento:function(event){
    aumenta(event.target);
  }
}

Calculadora.init();
