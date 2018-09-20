var EsCelular = false;
/////////////////////////Responsive/////////////////////////
$(document).ready(function(){
  ResizeScreen();
});

$(window).resize(function(){
  ResizeScreen();
});
//****************Header****************//
var HeadFont = $('.Header nav li').css('font-size');
var HeadPadding = $('.Header nav .Nombre, .Header nav .Salir').css('padding');
var HeadMargin = $('.Header nav .Salir').css('margin');
//****************AddDel****************//
var AddDelW = $('.AddDel .Add, .AddDel .Del').css('width');
var AddDelH = $('.AddDel .Add, .AddDel .Del').css('height');
var AddDelImg = $('.AddDel .AddDelimg').css('width');
var AddDelT = $('.AddDel .AddDelT').css('font-size');
var AddDelMargin = $('.AddDel .Add, .AddDel .Del').css('margin');
//****************Ventana Add****************//
var VentanaAdd = $('.VentanaAdd').css('width');
var VentanaAddFont = $('.VentanaAdd form .DominioTexto, .VentanaAdd form .DominioLabel').css('font-size');
var VentanaAddMargin = $('.VentanaAdd form .DominioTexto, .VentanaAdd form .DominioLabel').css('margin');
var VentanaAddFlex = $('.VentanaAdd form .Campos').css('flex-direction');
//****************Cards****************//
var ContetCards = $('.ContenCards').css('justify-content');
var Cards1 = $('.ContenCards .Card').css('width');
var Cards2 = $('.ContenCards .Card').css('height');
var CardImgW = $('.ContenCards .Card .Cardimg').css('width');
var CardText = $('.ContenCards .Card .CardText').css('font-size');
var CardsMargin = $('.ContenCards').css('margin-top');
var CardDel = $('.ContenCards .Card .CardDel').css('width');
var CardEdit = $('.ContenCards .Card .CardText .CardEditName').css('width');
function ResizeScreen(){
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMonile|Opera Mini/i.test(navigator.userAgent)){
    EsCelular = true;
    if(window.innerHeight > window.innerWidth){
      //****************Header****************//
      $('.Header nav li').css('font-size', '2em');
      $('.Header nav .Nombre, .Header nav .Salir').css('padding', '20px 30px 20px 30px');
      $('.Header nav .Salir').css('margin', '15px');
      //****************AddDel****************//
      $('.AddDel .Add, .AddDel .Del').css({
        'width': '200px',
        'height': '80px'
      });
      $('.AddDel .AddDelimg').css({
        'width': '60px',
        'height': '60px'
      });
      $('.AddDel .AddDelT').css('font-size', '2em');
      $('.AddDel .Add, .AddDel .Del').css('margin', '20px 10px 20px 10px');
      //****************Ventana Add****************//
      $('.VentanaAdd').css('width', '80%');
      $('.VentanaAdd form .DominioTexto, .VentanaAdd form .DominioLabel').css({
        'font-size': '2em',
        'margin': '20px 0px 20px 0px'
      });
      $('.VentanaAdd form .Campos').css('flex-direction', 'column');
      //****************Cards****************//
      $('.ContenCards').css('justify-content', 'center');
      $('.ContenCards .Card').css({
        'width': '450px',
        'height': '550px'
      });
      $('.ContenCards .Card .Cardimg').css('width', '450px');
      $('.ContenCards .Card .Cardimg').css('height', '450px');
      $('.ContenCards .Card .CardText').css('font-size', '1.5em');
      $('.ContenCards').css('margin-top', "140px");
      $('.ContenCards .Card .CardDel').css({
        'width': '60px',
        'height': '60px'
      });
      $('.ContenCards .Card .CardText .CardEditName').css({
        'width': '50px',
        'height': '50px'
      });
    }
    else if((window.innerWidth - window.innerHeight) > 450){
      //****************Header****************//
      $('.Header nav li').css('font-size', HeadFont);
      $('.Header nav .Nombre, .Header nav .Salir').css('padding', HeadPadding);
      $('.Header nav .Salir').css('margin', HeadMargin);
      //****************AddDel****************//
      $('.AddDel .Add, .AddDel .Del').css('width', AddDelW);
      $('.AddDel .Add, .AddDel .Del').css('height', AddDelH);
      $('.AddDel .AddDelimg').css('width', AddDelImg);
      $('.AddDel .AddDelimg').css('height', AddDelImg);
      $('.AddDel .AddDelT').css('font-size', AddDelT);
      $('.AddDel .Add, .AddDel .Del').css('margin', AddDelMargin);
      //****************Ventana Add****************//
      $('.VentanaAdd').css('width', VentanaAdd);
      $('.VentanaAdd form .DominioTexto, .VentanaAdd form .DominioLabel').css('font-size', VentanaAddFont);
      $('.VentanaAdd form .Campos').css('flex-direction', VentanaAddFlex);
      $('.VentanaAdd form .DominioTexto, .VentanaAdd form .DominioLabel').css('margin', VentanaAddMargin);
      //****************Cards****************//
      $('.ContenCards').css('justify-content', ContetCards);
      $('.ContenCards .Card').css('width', Cards1);
      $('.ContenCards .Card').css('height', Cards2);
      $('.ContenCards .Card .Cardimg').css('width', CardImgW);
      $('.ContenCards .Card .Cardimg').css('height', CardImgW);
      $('.ContenCards .Card .CardText').css('font-size', CardText);
      $('.ContenCards').css('margin-top', CardsMargin);
      $('.ContenCards .Card .CardDel').css('width', CardDel);
      $('.ContenCards .Card .CardDel').css('height', CardDel);
      $('.ContenCards .Card .CardText .CardEditName').css('width', CardEdit);
      $('.ContenCards .Card .CardText .CardEditName').css('height', CardEdit);
    }
  }
}

/////////////////////////Del/////////////////////////
var DeleteAbierto = false;
$('.AddDel .Del').click(function(){
  if(DeleteAbierto == false){
    $('.ContenCards .Card .CardDel').css('opacity', '1');
    $('.ContenCards .Card .CardDel').css('transform', 'scaleY(1) translate(-50%, -50%)');
    DeleteAbierto = true;
  }
  else{
    $('.ContenCards .Card .CardDel').css('opacity', '0');
    $('.ContenCards .Card .CardDel').css('transform', 'scaleY(0) translate(-50%, -50%)');
    DeleteAbierto = false;
  }
});
/////////////////////////Add/////////////////////////
//  background-color: hsla(0, 0%, 0%, 0.6);
$('.AddDel .Add').click(function(){
  if(EsCelular == false){
    $('.Header, .AddDel, .ContenCards').css('filter', 'blur(2px)');
  }
  $('.VentanaAdd').css('top', '50%');
});
$('html').click(function(){
  if(EsCelular == false){
    $('.Header, .AddDel, .ContenCards').css('filter', 'blur(0px)');
  }
  $('.VentanaAdd').css('top', '-50%');
});
$('.AddDel .Add, .VentanaAdd').click(function(e){
  e.stopPropagation();
});