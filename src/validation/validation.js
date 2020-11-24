

 function validaRut(rutCompleto) {
	if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
		return false;
	var tmp 	= rutCompleto.split('-');
	var digv	= tmp[1]; 
	var rut 	= tmp[0];
	if ( digv == 'K' ) digv = 'k' ;
	return (dv(rut) == digv );
};

 function dv(T){
	var M=0,S=1;
	for(;T;T=Math.floor(T/10))
		S=(S+T%10*(9-M++%6))%11;
	return S?S-1:'k';
};


function telValidate(tel) {
	let isphone = /^\+56{1}[0-9]{9}$/g.test(tel);
    return isphone;
}

function emailValidate(email) {
    let isEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
    return isEmail;
}

/*function validaURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}*/

/**
 * Tiene que recibir:
 *  - la url a revisar
 *  - indicar si es obligatorio [1|0]. Si es obligatorio, devuelve
 *    false si la url esta vacia
 *  - indicar si validamos que la direccion pueda ser de un servidor
 *    ftp [1|0]
 * Devuelve True o False
 */
function validaURL(url)
{
	var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
    var regexp = new RegExp(expression);
    return regexp.test(url);
}

export {validaRut , telValidate, emailValidate, validaURL};