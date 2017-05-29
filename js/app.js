var imagenes = document.getElementsByClassName('imagenes');
// console.log(typeof(imagenes));

for(var i=0; i < imagenes.length; i++){
	jQuery(document).ready(function(){
		$('.btn-chicos').click(function(){
			if($('li').hasClass('ocultar1')){
				$('li').addClass('mostrar');
				$('li').removeClass('ocultar1');			
			}else if($('li').hasClass('mostrar')){
				$('li').addClass('ocultar');
				$('li').removeClass('mostrar');				
			}else{
				$('li').addClass('mostrar');
				$('li').removeClass('ocultar');
			}
			
		});
	})
}


// jQuery(document).ready(function(){
// 	$('#cambiarColor').click(function(){
// 		$('#resaltar').css('color','white');
// 		$('#resaltar').css('background-color','blue');
// 	});
// });

// var btn1 = document.getElementById('btn-1');
// btn1.addEventListener('click',mostrar1);
// var btn2 = document.getElementById('btn-2');
// btn2.addEventListener('click',mostrar2);
// var btn3 = document.getElementById('btn-3');
// btn3.addEventListener('click',mostrar3);
// var imagen1 = document.getElementById('imagen-1');
// var imagen2 = document.getElementById('imagen-2');
// var imagen3 = document.getElementById('imagen-3');

// function mostrar1() {
// 	imagen1.style.display =  'block';
// 	imagen3.style.display =  'none';
// 	imagen2.style.display =  'none';
// }
// function mostrar2() {
// 	imagen1.style.display =  'none';
// 	imagen2.style.display =  'block';
// 	imagen3.style.display =  'none';
// }
// function mostrar3() {
// 	imagen1.style.display =  'none';
// 	imagen2.style.display =  'none';
// 	imagen3.style.display =  'block';
// }
// function mostrar2() {
// 	// body...
// 	if(imagen2.style.display ==  'block'){
// 		imagen2.style.display =  'none';
// 	}else{
// 		imagen2.style.display =  'block';
// 	}
// }
// function mostrar3() {
// 	// body...
// 	if(imagen3.style.display ==  'block'){
// 		imagen3.style.display =  'none';
// 	}else{
// 		imagen3.style.display =  'block';
// 	}
// }
// var imagenes = document.getElementsByClassName('imagenes');
// var btnChicos = document.getElementsByClassName('btn-chicos');
// var imagen1 = document.getElementById('imagen-1');
// var imagen2 = document.getElementById('imagen-2');
// var imagen3 = document.getElementById('imagen-3');
// for(var i=0; i < imagenes.length; i++){
// 	btnChicos[i].addEventListener('click',mostrar);
// }

// function mostrar(){
// 	if(imagen1.style.display == 'none'){
// 		imagen1.style.display = 'block';
// 	}else{
// 		imagen1.style.display = 'none';
// 	}
// }

// if(imagen2.style.display == 'none'){
// 	imagen2.style.display = 'block';
// }else{
// 	imagen2.style.display = 'none';
// }

// if(imagen3.style.display == 'none'){
// 	imagen3.style.display = 'block';
// }else{
// 	imagen3.style.display = 'none';
// }