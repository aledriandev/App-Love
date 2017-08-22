/*
 * Archivo principal de funcionalidad de JS
 */
var products = document.getElementById('products');
var imgProducts = ['img-1.jpg', 'img-2.jpg', 'img-3.jpg', 'img-4.jpg', 'img-5.jpg', 'img-6.jpg', 'img-7.jpg', 'img-8.jpg', 'img-9.jpg'];
var description = ['TAIMAN', 'KERALA', 'THE BRASS COQ', 'SUNGENRE', 'MITRAGYNA SPECIOSA', 'FOAM KINE', 'VOLITION', 'OWLS & APPLES', 'SHERWOOD'];
var row = document.createElement('div');
	row.setAttribute('class','row');
products.appendChild(row)
var img_Products = []; //array construido con las imagenes de los productos, no con sus src
var position; //dara la posicion de la imagen seleccionada
var pantalla; //es el elemento de fondo donde se agregara la imagen
var imgBig; // imagen que aparece en el centro de la pantalla;

for (var i = 0; i < imgProducts.length; i++) {
	var col_4 = document.createElement('div');
		col_4.setAttribute('class','col-4');
	var contenido = document.createElement('div');
	var imagen = document.createElement('img');
		imagen.setAttribute('class','img-product');
		imagen.setAttribute('onclick','big(this)')
		imagen.src = 'assets/images/'+imgProducts[i];
		img_Products.push(imagen);
	var text = document.createElement('p');
		var content = document.createTextNode(description[i]);
		text.setAttribute('class','description');
		text.appendChild(content);
	contenido.appendChild(imagen);
	contenido.appendChild(text);
	col_4.appendChild(contenido);
	row.appendChild(col_4);
}

function big(event){
		position = img_Products.indexOf(event);
		pantalla = document.createElement('div'); // es donde se ubicara la imagen
		pantalla.setAttribute('class','fondo');
	var atras = document.createElement('button');
		atras.setAttribute('id', 'atras');
		atras.setAttribute('onclick','atras(this)');
	var adelante = document.createElement('button');
		adelante.setAttribute('id', 'adelante');
		adelante.setAttribute('onclick','adelante(this)');
	var galeria = document.createElement('div');
		galeria.setAttribute('class', 'galeria');
		imgBig = document.createElement('img'); 
		imgBig.src ='assets/images/'+imgProducts[position];
		imgBig.setAttribute('class','img-big');
	var btnCancel = document.createElement('button');
		btnCancel.setAttribute('class','btn-cancel');
		btnCancel.setAttribute('onclick','borrar(this)');
		galeria.appendChild(btnCancel);
		galeria.appendChild(atras);
		galeria.appendChild(imgBig);
		galeria.appendChild(adelante);
		pantalla.appendChild(galeria);
		products.appendChild(pantalla);
}

function borrar(event){
	products.removeChild(pantalla);
}

function adelante(e){
	if (position >= img_Products.length-1){
		position = 0;
	}
	position++;
	imgBig.src ='assets/images/'+imgProducts[position];
}

function atras(e){
	if (position <= 0){
		position = img_Products.length;
	}
	position--;
	imgBig.src ='assets/images/'+imgProducts[position];
}