function one() {
	var x = document.getElementById("type").value;
    document.getElementById("type").innerHTML = x+1;
}
function two() {
	var x = document.getElementById("type").value;
    document.getElementById("type").innerHTML = x+2;
}
function three() {
	var x = document.getElementById("type").value;
    document.getElementById("type").innerHTML = x+3;
}
function four() {
	var x = document.getElementById("type").value;
    document.getElementById("type").innerHTML = x+4;
}
function five() {
	var x = document.getElementById("type").value;
    document.getElementById("type").innerHTML = x+5;
}
function six() {
	var x = document.getElementById("type").value;
    document.getElementById("type").innerHTML = x+6;
}
function seven() {
	var x = document.getElementById("type").value;
    document.getElementById("type").innerHTML = x+7;
}
function eight() {
	var x = document.getElementById("type").value;
    document.getElementById("type").innerHTML = x+8;
}
function nine() {
	var x = document.getElementById("type").value;
    document.getElementById("type").innerHTML = x+9;
}
function zero() {
	var x = document.getElementById("type").value;
    document.getElementById("type").innerHTML = x+0;
}
function decimal() {
	var x = document.getElementById("type").value;
    document.getElementById("type").innerHTML = x+".";
}


function negation() {
	var x = document.getElementById("type").value;
	var y = document.getElementById("ans").value;
    document.getElementById("type").innerHTML = "0-"+x;
    if(parseFloat(x)<0)document.getElementById("type").innerHTML = x*-1;
    document.getElementById("ans").innerHTML = x*-1;
    if(isNaN(x*-1)){
    	document.getElementById("type").innerHTML = "0-"+y;
    	if(parseFloat(y)<0)document.getElementById("type").innerHTML = y*-1;
    	document.getElementById("ans").innerHTML = y*-1;
    }
}
function root() {
	var x = document.getElementById("type").value;
	var y = document.getElementById("ans").value;
    document.getElementById("type").innerHTML = x;
    document.getElementById("ans").innerHTML = Math.sqrt(x);
    if(isNaN(Math.sqrt(x))){
    	document.getElementById("ans").innerHTML = Math.sqrt(y);
    }
}
function percent() {
	var x = document.getElementById("type").value;
	var y = document.getElementById("ans").value;
    document.getElementById("type").innerHTML = x;
    document.getElementById("ans").innerHTML = x/100;
    if(isNaN(x/100)){
    	document.getElementById("ans").innerHTML = y/100;
    }
}
function addition() {
	var x = document.getElementById("type").value;
    document.getElementById("type").innerHTML = x+"+";
}
function subtraction() {
	var x = document.getElementById("type").value;
    document.getElementById("type").innerHTML = x+"-";
}
function multiplication() {
	var x = document.getElementById("type").value;
    document.getElementById("type").innerHTML = x+"×";
}
function division() {
	var x = document.getElementById("type").value;
    document.getElementById("type").innerHTML = x+"÷";
}
function equal() {
	var x = document.getElementById("type").value;
	var adder = x.split("+");
	var sum = 0;
	for(var i=0;i<adder.length;i++){
		var sub = adder[i].split("-");
		for(var j=0;j<sub.length;j++){
			var mul = sub[j].split("×");
			for(var k=0;k<mul.length;k++){
				var div = mul[k].split("÷");
				for(var l=0;l<div.length;l++){
					if(l>0)div[0] = div[0] / div[l];
				}
				if(k==0)mul[0] = div[0]
				else mul[0] = mul[0] * div[0];
			}
			if(j==0)sub[0] = parseFloat(mul[0]);
			else sub[0] = sub[0] - parseFloat(mul[0]);
		}
		sum = sum + parseFloat(sub[0]);
	}
    document.getElementById("ans").innerHTML = sum;
}