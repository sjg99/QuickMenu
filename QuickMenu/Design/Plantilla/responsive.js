/////////////////////////Variables de Control/////////////////////////
var NavAbierto = false;
var LoginAbierto = false;
var EsCelGen = false;
var EsCelVert = false;
var MenuAbierto = false;
var MinHeight = window.innerHeight;
var ListaAbierta = false;
/////////////////////////Variables de Nav/////////////////////////
var MarginContHome = $('.SeccionHome .ContenedorHome').css('padding-top');
var MarginLi = "10px 15px 10px 15px";
var PadingLi = "5px 35px 5px 35px";
var FontLi = "14px";
var HeightLi = "auto";
/////////////////////////Variables de Responsive/////////////////////////
var ScrollUp1 = $('.ScrollUp').css('width');
//****************Nav bar****************//
var nav1 = $('nav').css('position');
var dropicon1 = $('nav .dropicon').css('display');
var dropicon2 = $('nav .dropicon').css('float');
var dropicon3 = $('nav .dropicon').css('color');
var dropicon4 = $('nav .dropicon').css('font-size');
var Topnav1 = $('nav .Topnav').css('float');
var Topnav2 = $('nav .Topnav').css('width');
var Topli1 = $('.Topnav li').css('display');
var Topli2 = $('.Topnav li').css('margin-bottom');
var Topli3 = $('.Topnav li').css('margin-top');
var Toplia1 = $('nav .Topnav li a').css('text-align');
var Toplia2 = $('nav .Topnav li a').css('color');
var Toplia3 = $('nav .Topnav li a').css('font-size');
var Toplia4 = $('nav .Topnav li a').css('margin');
var Toplia5 = $('nav .Topnav li a').css('padding');
var Toplia6 = $('nav .Topnav li a').css('height');
var droplogo1 = $('nav .dropLogo').css('width');
var droplogo2 = $('nav .dropLogo').css('height');
var LoginBotonP = $('nav .Topnav li .LoginBoton').css('padding');
var LoginBotonH = $('nav .Topnav li .LoginBoton').css('height');
//****************Home****************//
var Logo = $('nav .dropLogo').css('background-image');
var TextoPrincipal = $('.SeccionHome .ContenedorHome .TextoPrincipal').css('font-size');
var TextoSecundario = $('.SeccionHome .ContenedorHome .TextoSecundario').css('font-size');
//****************Login y Singup****************//
var LoSi = $('.SeccionHome .LoSiContenedor .Login').css('width');
var LoSiFontRe = $('.SeccionHome .LoSiContenedor .Login form .ContFormLogin .ResultadoLogin').css('font-size');
var LoSiFont = $('.SeccionHome .LoSiContenedor .Login form .ContFormLogin .LoginCampos input').css('font-size');
var LoSiFontBut = $('.SeccionHome .LoSiContenedor .Login form .ContFormLogin .LoginBotones buttom').css('font-size');
var LoSiMarginLab = $('.SeccionHome .LoSiContenedor .Login form .ContFormLogin .LoginCampos input').css('margin');
var LoSiPaddingBut = $('.SeccionHome .LoSiContenedor .Login form .ContFormLogin .LoginBotones buttom').css('padding');
var LoSiLabFont = $('.SeccionHome .LoSiContenedor .lbl').css('font-size');
//****************Menu****************//
var MenuPadding = $('.SeccionMenu .ContenedorMenu').css('padding-top');
var CardWidth = $('.SeccionMenu .ContenedorMenu .Carta .Articulo, .ListaCompras .ListaArticulos .ContenedorArticulo .Articulo').css('width');
var CardHeight = $('.SeccionMenu .ContenedorMenu .Carta .Articulo, .ListaCompras .ListaArticulos .ContenedorArticulo .Articulo').css('height');
var CardFuente = $('.SeccionMenu .ContenedorMenu .Carta .Articulo p, .ListaCompras .ListaArticulos .ContenedorArticulo .Articulo p').css('font-size');
var InfoFlex = $('.SeleccionArticulo .SeleccionInfo').css('flex-direction');
var InfoDivW = '50%';
var InfoDivH = '90%';
var InfoDivP = '2%';
var InfoImg = $('.SeleccionArticulo .SeleccionInfo img').css('width');
var InfoTextS1 = $('.SeleccionArticulo .SeleccionInfo .SeleccionTextos h1').css('font-size');
var InfoTextS2 = $('.SeleccionArticulo .SeleccionInfo .SeleccionTextos p').css('font-size');
var InfoMargen = $('.SeleccionArticulo .SeleccionInfo .SeleccionTextos h1').css('margin-bottom');
var AddPadding = $('.SeleccionArticulo .SeleccionInfo .SeleccionTextos .SeleccionAgregar').css('padding');
var AddPFont = $('.SeleccionArticulo .SeleccionInfo .SeleccionTextos .SeleccionAgregar').css('font-size');
var UpIconW = $('.ListaCompras .UpIcon').css('width');
var UpIconH = $('.ListaCompras .UpIcon').css('height');
var ListaComprasP = $('.ListaCompras').css('transform');
var ListaTitulo = $('.ListaCompras .ListaTitulo').css('font-size');
var ListaArticulos = $('.ListaCompras .ListaArticulos').css('height');
/////////////////////////Nav/////////////////////////
$('nav .dropLogo,nav .dropicon').click(function() {
  if($('nav .Topnav li:not(:nth-child(5)').css('display') == "none" || $('nav .Topnav li:not(:nth-child(5)').css('display') == "inline"){
    AbreNav();
  }
});
$('section').click(function() {
  if(NavAbierto == true){
    AbreNav();
  }
});
function AbreNav(){
  if(NavAbierto == false) {
    $('nav .Topnav li a, nav .Topnav li .LoginBoton').css({
      "margin": MarginLi,
      "font-size": FontLi,
      "height": HeightLi
    });
    $('nav .Topnav li .LoginBoton').css('padding', PadingLi);
    $('.SeccionHome .ContenedorHome .TextoSecundario').css('opacity', '0');
    $('.SeccionHome .ContenedorHome .TextoSecundario').css('visibility', 'hidden');
    $('.SeccionHome .ContenedorHome').stop(true).animate({
        "padding-top":"25%"
    },270);
    NavAbierto = true;
  }
  else {
    $('nav .Topnav li a, nav .Topnav li .LoginBoton').css({
      "margin": "0",
      "padding": "0",
      "font-size": "0",
      "height": "0"
    });
    $('.SeccionHome .ContenedorHome .TextoSecundario').css('visibility', 'visible');
    $('.SeccionHome .ContenedorHome .TextoSecundario').css('opacity', '1');
    $('.SeccionHome .ContenedorHome').stop(true).animate({
        "padding-top":MarginContHome
    },270);
    NavAbierto = false;
  }
}
/////////////////////////Responsive/////////////////////////
$(document).ready(function(){
  ResizeScreen();
});

$(window).resize(function(){
  ResizeScreen();
});

function ResizeScreen(){
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMonile|Opera Mini/i.test(navigator.userAgent)){
    EsCelGen = true;
    $('.SeccionMenu').css('height', '100%');
    $('.ListaCompras').css('top', '100.5vh');
    if(window.innerHeight > window.innerWidth){
      $('section').css('min-height', MinHeight);
      MarginLi = "15px 15px 15px 15px";
      PadingLi = "25px 35px 25px 35px";
      FontLi = "2.5em";
      HeightLi = "auto";
      EsCelVert = true;
      
      $('.ScrollUp').css({
        'width': '60px',
        'height': '60px'
      });
      $('.ScrollUp').css('transform', 'translate(-140px, -140px)');
      //****************Nav bar****************//
      $('nav').css('position', 'absolute');
      if(MenuAbierto == true){
        $('nav').css('background-color', '#3a345d');
      }
      else{
        $('nav').css('background-color', 'white');
      }
      $('nav .dropicon').css({
        'display': 'block',
        'float': 'right',
        'font-size': '60px',
        'height': '80px',
        'color': 'rgb(175, 175, 175)'
      });
      $('nav .dropLogo').css({
        'width': '400px',
        'height': '80px'
      });
      $('nav .Topnav').css({
        'float': 'left',
        'width': '100%'
      });
      $('.Topnav li:not(:nth-child(5)').css('display', 'inline');
      $('nav .Topnav li').css({
        'margin-bottom': '10px',
        'margin-top': '10px'
      });
      $('nav .Topnav li a').css({
        'text-align': 'left',
        'color': 'rgb(175, 175, 175)'
      });
      $('nav .Topnav li a, nav .Topnav li .LoginBoton').css({
        "margin": "0",
        "padding": "0",
        "font-size": "0",
        "height": "0"
      });
      //****************Home****************//
      $('nav .dropLogo').css('background-image', 'url(img/Logo.png)');
      $('.SeccionHome .ContenedorHome .TextoPrincipal').css('font-size', '5em');
      $('.SeccionHome .ContenedorHome .TextoSecundario').css('font-size', '2.5em');
      //****************Login y Singup****************//
      $('.SeccionHome .LoSiContenedor .Login').css('width', '80%');
      $('.SeccionHome .LoSiContenedor .Login form .ContFormLogin .ResultadoLogin').css('font-size', '2em');
      $('.SeccionHome .LoSiContenedor .Login form .ContFormLogin .LoginCampos input').css({
        'font-size': '2em',
        'margin': '20px 0px 5px 0px'
      });
      $('.SeccionHome .LoSiContenedor .Login form .ContFormLogin .LoginBotones buttom').css({
        'font-size': '2em',
        'padding': '30px'
      });
      $('.SeccionHome .LoSiContenedor .lbl').css('font-size', '3em');
      //****************Menu****************//
      $('.SeccionMenu .ContenedorMenu').css('padding-top', '200px');
      $('.SeccionMenu .ContenedorMenu .Carta .Articulo, .ListaCompras .ListaArticulos .ContenedorArticulo .Articulo').css({
        'width': '350px',
        'height': '370px'
      });
      $('.SeccionMenu .ContenedorMenu .Carta .Articulo p, .ListaCompras .ListaArticulos .ContenedorArticulo .Articulo p').css('font-size', '2em');
      $('.SeleccionArticulo .SeleccionInfo').css('flex-direction', 'column');
      $('.SeleccionArticulo .SeleccionInfo .SeleccionTextos').css({
        'width': '90%',
        'height': '40%',
        'padding': '5%'
      });
      $('.SeleccionArticulo .SeleccionInfo img').css('width', '80%');
      $('.SeleccionArticulo .SeleccionInfo .SeleccionTextos h1').css({
        'font-size': '3em',
        'margin-bottom': '50px'
      });
      $('.SeleccionArticulo .SeleccionInfo .SeleccionTextos p').css('font-size', '1.7em');
      $('.SeleccionArticulo .SeleccionInfo .SeleccionTextos .SeleccionAgregar').css({
        'padding': '10px 55px 10px 55px',
        'font-size': '2em'
      });
      $('.SeccionMenu').css('margin-bottom', '60px');
      $('.ListaCompras .UpIcon').css({
        'width': '145px',
        'height': '126px'
      });
      if(ListaAbierta == true){
        $('.ListaCompras').css('transform', 'translateY(-713px)');
      }
      else{
        $('.ListaCompras').css('transform', 'translateY(-195px)');
      }
      $('.ListaCompras .ListaTitulo').css('font-size', '3em');
      $('.ListaCompras .ListaArticulos').css('height', '520px');
    }
    else if((window.innerWidth - window.innerHeight) > 450){
      EsCelVert = false;
      $('section').css('min-height', '500px');
      $('.ScrollUp').css('width', ScrollUp1);
      $('.ScrollUp').css('height', ScrollUp1);
      $('.ScrollUp').css('transform', 'translate(-70px, -70px)');
      //****************Nav bar****************//
      $('nav').css('position', nav1);
      if(MenuAbierto == true){
        $('nav').css('background-color', '#3a345d');
      }
      else{
        $('nav').css('background-color', 'transparent');
      }
      $('nav .dropicon').css('display', dropicon1);
      $('nav .dropicon').css('float', dropicon2);
      $('nav .dropicon').css('color', dropicon3);
      $('nav .dropicon').css('font-size', dropicon4);
      $('nav .Topnav').css('float', Topnav1);
      $('nav .Topnav').css('width', Topnav2);
      $('.Topnav li').css('display', Topli1);
      $('.Topnav li').css('margin-bottom', Topli2);
      $('.Topnav li').css('margin-top', Topli3);
      $('nav .Topnav li a').css('text-align', Toplia1);
      $('nav .Topnav li a').css('color', Toplia2);
      $('nav .Topnav li a').css('font-size', Toplia3);
      $('nav .Topnav li a').css('margin', Toplia4);
      $('nav .Topnav li a').css('padding', Toplia5);
      $('nav .Topnav li a').css('height', Toplia6);
      $('nav .dropLogo').css('width', droplogo1);
      $('nav .dropLogo').css('height', droplogo2);
      $('nav .Topnav li .LoginBoton').css('padding', LoginBotonP);
      $('nav .Topnav li .LoginBoton').css('height', LoginBotonH);
      $('nav .Topnav li .LoginBoton').css('font-size', Toplia3);
      $('nav .Topnav li .LoginBoton').css('margin', Toplia4);
      //****************Home****************//
      $('nav .dropLogo').css('background-image', Logo);
      $('.SeccionHome .ContenedorHome .TextoPrincipal').css('font-size', TextoPrincipal);
      $('.SeccionHome .ContenedorHome .TextoSecundario').css('font-size', TextoSecundario);
      //****************Login y Singup****************//
      $('.SeccionHome .LoSiContenedor .Login').css('width', LoSi);
      $('.SeccionHome .LoSiContenedor .Login form .ContFormLogin .ResultadoLogin').css('font-size', LoSiFontRe);
      $('.SeccionHome .LoSiContenedor .Login form .ContFormLogin .LoginCampos input').css('font-size', LoSiFont);
      $('.SeccionHome .LoSiContenedor .Login form .ContFormLogin .LoginBotones buttom').css('font-size', LoSiFontBut);
      $('.SeccionHome .LoSiContenedor .Login form .ContFormLogin .LoginCampos input').css('margin', LoSiMarginLab);
      $('.SeccionHome .LoSiContenedor .lbl').css('font-size', LoSiLabFont);
      $('.SeccionHome .LoSiContenedor .Login form .ContFormLogin .LoginBotones buttom').css('padding', LoSiPaddingBut);
      //****************Menu****************//
      $('.SeccionMenu .ContenedorMenu').css('padding-top', MenuPadding);
      $('.SeccionMenu .ContenedorMenu .Carta .Articulo').css('width', CardWidth);
      $('.SeccionMenu .ContenedorMenu .Carta .Articulo').css('height', CardHeight);
      $('.SeccionMenu .ContenedorMenu .Carta .Articulo p').css('font-size', CardFuente);
      
      $('.ListaCompras .ListaArticulos .ContenedorArticulo .Articulo').css('width', '150px');
      $('.ListaCompras .ListaArticulos .ContenedorArticulo .Articulo').css('height', '170px');
      $('.ListaCompras .ListaArticulos .ContenedorArticulo .Articulo p').css('font-size', '1em');
      
      $('.SeleccionArticulo .SeleccionInfo').css('flex-direction', InfoFlex);
      $('.SeleccionArticulo .SeleccionInfo .SeleccionTextos').css('width', InfoDivW);
      $('.SeleccionArticulo .SeleccionInfo .SeleccionTextos').css('height', InfoDivH);
      $('.SeleccionArticulo .SeleccionInfo .SeleccionTextos').css('padding', InfoDivP);
      $('.SeleccionArticulo .SeleccionInfo img').css('width', InfoImg);
      $('.SeleccionArticulo .SeleccionInfo .SeleccionTextos h1').css('font-size', InfoTextS1);
      $('.SeleccionArticulo .SeleccionInfo .SeleccionTextos h1').css('margin-bottom', InfoMargen);
      $('.SeleccionArticulo .SeleccionInfo .SeleccionTextos p').css('font-size', InfoTextS2);
      $('.SeleccionArticulo .SeleccionInfo .SeleccionTextos .SeleccionAgregar').css('padding', AddPadding);
      $('.SeleccionArticulo .SeleccionInfo .SeleccionTextos .SeleccionAgregar').css('font-size', AddPFont);
      $('.SeccionMenu').css('margin-bottom', '26.3636px');
      $('.ListaCompras .UpIcon').css('width', UpIconW);
      $('.ListaCompras .UpIcon').css('height', UpIconH);
      $('.ListaCompras .ListaTitulo').css('font-size', ListaTitulo);
      $('.ListaCompras .ListaArticulos').css('height', ListaArticulos);
      if(ListaAbierta == true){
        $('.ListaCompras').css('transform', 'translateY(-313px)');
      }
      else{
        $('.ListaCompras').css('transform', 'translateY(-67px)');
      }
    }
    if(NavAbierto == true){
      AbreNav();
    }
  }
  else if($(window).width() >= 680){
    if(NavAbierto == true){
      AbreNav();
    }
    else{
      $('nav .Topnav li a, nav .Topnav li .LoginBoton').css({
        "margin": MarginLi,
        "font-size": FontLi,
        "height": HeightLi
      });
      $('nav .Topnav li .LoginBoton').css('padding', PadingLi);
    }
    if(MenuAbierto == false){
      $('nav').css('background-color', 'transparent');
    }
  }
  else{
    if(NavAbierto == true){
      AbreNav();
    }
    else{
      $('nav .Topnav li a, nav .Topnav li .LoginBoton').css({
        "margin": "0",
        "padding": "0",
        "font-size": "0",
        "height": "0"
      });
    }
    if(MenuAbierto == false){
      $('nav').css('background-color', 'white');
    }
  }
}
/////////////////////////Smooth Scroll/////////////////////////
$('#Home').click(function() {
  MenuAbierto = false;
  if(NavAbierto == true){
    AbreNav();
  }
  $('.ContenedorSecundario').css('transform', 'scale(0,1)');
  if(($(window).width() < 680 && EsCelGen == false) || EsCelVert == true){
    $('nav').css('background-color', 'white');
  }
  else{
    $('nav').css('background-color', 'transparent');
  }
  $('.SeccionMap').css('display', 'block');
  $('.ListaCompras').css('opacity', '0');
  setTimeout(function(){
    $('.ListaCompras').css('display', 'none');
  }, 300);
});
$('#Map').click(function() {
  if(NavAbierto == true){
    AbreNav();
  }
  if(MenuAbierto == true){
    $('#Home').click();
    setTimeout(function(){
      $('html, body').stop(true).animate({
        scrollTop: $('.SeccionMap').position().top
      },500);
    }, 700);
  }
  else{
    $('html, body').stop(true).animate({
      scrollTop: $('.SeccionMap').position().top
    },500);
    $('.ListaCompras').css('opacity', '0');
    setTimeout(function(){
      $('.ListaCompras').css('display', 'none');
    }, 300);
  }
});
$('#Menu').click(function() {
  MenuAbierto = true;
  if(NavAbierto == true){
    AbreNav();
  }
  $('.ContenedorSecundario').css('transform', 'scale(1,1)');
  $('nav').css('background-color', '#3a345d');
  $('.SeccionMap').css('display', 'none');
  $('.ListaCompras').css('display', 'block');
  setTimeout(function(){
    $('.ListaCompras').css('opacity', '1');
  }, 300);
});
$('#Login').click(function() {
  if(NavAbierto == true){
    AbreNav();
  }
});
$(window).scroll(function() {
  if($(window).scrollTop() > 200 && $('.ScrollUp').css('display') == 'none') {
    $('.ScrollUp').css('display', 'block');
    $('.ScrollUp').stop(true).animate({
      'opacity': '1'
    },300);
  } 
  else if($(window).scrollTop() <= 200 && $('.ScrollUp').css('display') == 'block'){
    $('.ScrollUp').stop(true).animate({
      'opacity': '0'
    },300);
    setTimeout(function(){
      $('.ScrollUp').css('display', 'none');
    }, 300);
  }
});
$('.ScrollUp').click(function() {
  $('html, body').stop(true).animate({
    scrollTop: $('.SeccionHome').offset().top
  },500);
});
/////////////////////////Login y SingUp/////////////////////////
$('nav .Topnav li .LoginBoton').click(function(){
  $('.SeccionHome .LoSiContenedor').css('display', 'flex');
  $('.SeccionHome .LoSiContenedor').stop(true).animate({
    'opacity': '1'
  },300);
  if(EsCelGen == false){
    $('nav, .ScrollUp, .ContenedorAbout, .ContenedorContact, .ContenedorHome, .SeccionHome .Background, .SeccionHome .ContenedorHome').css('filter', 'blur(2px)');
  }
});
$('html').click(function(){
  $('.SeccionHome .LoSiContenedor').stop(true).animate({
    'opacity': '0'
  },300);
  setTimeout(function(){
    $('.SeccionHome .LoSiContenedor').css('display', 'none');
  }, 300);
  if(EsCelGen == false){
    $('nav, .ScrollUp, .ContenedorAbout, .ContenedorContact, .ContenedorHome, .SeccionHome .Background, .SeccionHome .ContenedorHome').css('filter', 'blur(0px)');
  }
});
$('nav .Topnav li .LoginBoton, .SeccionHome .LoSiContenedor .Login').click(function(e){
  e.stopPropagation();
});
/////////////////////////Menu/////////////////////////
$('.Carta .Articulo').click(function(){
  $('.SeleccionArticulo').css('transform', 'scale(1,1)');
});
$('.SeleccionArticulo').click(function () {
    e.stopPropagation();
  $('.SeleccionArticulo').css('transform', 'scale(0,0)');
});


$('.ListaCompras .UpIcon, .ListaCompras .ListaTitulo').hover(function(){
  if(ListaAbierta == false && EsCelGen == false){
    $('.ListaCompras').css('transform', 'translateY(-67px)');
  }
}, function(){
  if(ListaAbierta == false  && EsCelGen == false){
    $('.ListaCompras').css('transform', 'translateY(-35px)');
  }
});
$('.ListaCompras .UpIcon, .ListaCompras .ListaTitulo').click(function(){
  if(ListaAbierta == false){
    ListaAbierta = true;
    $('.ListaCompras .ListaTitulo').css('border', '0px');
    if(EsCelVert == true){
      $('.ListaCompras').css('transform', 'translateY(-713px)');
    }
    else{
      $('.ListaCompras').css('transform', 'translateY(-313px)');
    }
    $('.ListaCompras .UpIcon').css('background-image', 'url(img/downarrow.png)');
  }
  else{
    ListaAbierta = false;
    $('.ListaCompras .ListaTitulo').css('border', '1px solid grey');
    if(EsCelGen == true){
      if(EsCelVert == true){
        $('.ListaCompras').css('transform', 'translateY(-195px)');
      }
      else{
        $('.ListaCompras').css('transform', 'translateY(-67px)');
      }
    }
    else{
      $('.ListaCompras').css('transform', 'translateY(-35px)');
    }
    $('.ListaCompras .UpIcon').css('background-image', 'url(img/uparrow.png)');
  }
});