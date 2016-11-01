document.getElementById("su").addEventListener('click',function(){
	var c=document.getElementById("name").value;
	var d=0;
	var b=["tousif","pulock","taijul","sharif"];
	for(i=0; i<b.length;i++)
	{
		if(c==b[i]){
		var e=2;}
	
		else {
		var e=3;}
	d+=e; }
	
	alert(d)
var a=document.getElementById("password").value;
alert(a);
if(a==4415 && d==11){
document.getElementById("w").innerHTML='right password';}
else
{
document.getElementById("w").innerHTML='wrong password';}

});

