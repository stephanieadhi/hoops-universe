console.log('connect');

function validation(){
	// alert("tes")
	var uname = document.forms['purchase']['uname'].value
	var uphone = document.forms['purchase']['uphone'].value
	var uemail = document.forms['purchase']['uemail'].value
	var ugender = document.forms['purchase']['ugender'].value
	var uage = document.forms['purchase']['uage'].value
	var udistrict = document.forms['purchase']['udistrict'].value
	var uaddress = document.forms['purchase']['uaddress'].value
	var upostal = document.forms['purchase']['upostal'].value
	var unote = document.forms['purchase']['unote'].value

	// alert(uname+uphone+uemail+ugender+uage+udistrict+uaddress+upostal+unote)

	var bool = true;
	if(uname == ""){
		document.getElementById('err-uname').innerHTML="Name must filled";
		bool = false;
	}
	else{
		document.getElementById('err-uname').innerHTML="";
	}

	if(uphone == ""){
		document.getElementById('err-uphone').innerHTML="Phone Number must filled";
		bool = false;
	}
	else{
		document.getElementById('err-uphone').innerHTML="";
	}

	if(uemail == ""){
		document.getElementById('err-uemail').innerHTML="Email must be filled";
		bool = false;
	}
	else if(validateEmail(uemail)== false){
		document.getElementById('err-uemail').innerHTML="Invalid Email Format";
		bool = false;
	}else{
		document.getElementById('err-uemail').innerHTML="";
	}

	if(ugender == ""){
		document.getElementById('err-ugender').innerHTML="Gender must be chosen";
		bool = false;
	}else{
		document.getElementById('err-ugender').innerHTML="";
	}

	if(uage == ""){
		document.getElementById('err-uage').innerHTML="Age must filled";
		bool = false;
	}
	else{
		document.getElementById('err-uage').innerHTML="";
	}

	if(udistrict == ""){
		document.getElementById('err-udistrict').innerHTML="District must filled";
		bool = false;
	}
	else{
		document.getElementById('err-udistrict').innerHTML="";
	}

	if(uaddress == ""){
		document.getElementById('err-uaddress').innerHTML="Address must filled";
		bool = false;
	}
	else{
		document.getElementById('err-uaddress').innerHTML="";
	}

	if(upostal == ""){
		document.getElementById('err-upostal').innerHTML="Postal Code must filled";
		bool = false;
	}
	else{
		document.getElementById('err-upostal').innerHTML="";
	}

	if(bool){
		alert("Order Success");
		location.reload();
	}
}

function validateEmail(uemail){
	if(uemail.startsWith("@") || uemail.startsWith(".")){
		return false;
	}
	else if(uemail.endsWith("@") || uemail.endsWith("."))	{
		return false;
	}
	else if(uemail.indexOf("@.") > -1 || uemail.indexOf(".@") > -1 )
	{
		return false;
	}
	else if(uemail.indexOf("@") < 0 || uemail.indexOf(".") < 0)
	{
		return false;
	}
		else
	{
		return true;
	}
}