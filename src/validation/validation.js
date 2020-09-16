

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
	let isphone = /^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/.test(tel);
    return isphone;
}

function emailValidate(email) {
    let isEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
    return isEmail;
}


export {validaRut , telValidate, emailValidate};