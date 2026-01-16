var a = 1;
var h = 85;
var l = 40
var m = 0
var bouge = 0
var ani = 0
var ani1 = 0
var r = 0
var r1 = 0
var ani2 = 0
var r2 = 0
var ani3 = 0
var r3 = 0
var vie = 100
var p1 = 0
var p2 = 0
var p3 = -51
var p4 = 4
var jol = 0
var i = 0
var AliMis = 0
var mouvp1 = 0 //Haut
var mouvp2 = 0 //Bas
var mouvp3 = 0 //Droite
var mouvp4 = 0 //Gauche
function mouvpp1(){mouvp1 = 1}
function mouvpp2(){mouvp2 = 1}
function mouvpp3(){mouvp3 = 1}
function mouvpp4(){mouvp4 = 1}
function animation(){
	document.getElementById("carre1").style.visibility = "hidden" ;
	document.getElementById("carre").style.visibility = "hidden" ;
	document.getElementById("carre2").style.visibility = "hidden" ;
	document.getElementById("carre3").style.visibility = "hidden" ;	
	document.getElementById("carre4").style.visibility = "hidden" ;	
	document.getElementById("carre5").style.visibility = "hidden" ;	
	document.getElementById("carre6").style.visibility = "hidden" ;
	document.getElementById("carre7").style.visibility = "hidden" ;	


}
function hyg(){
	i = 1
    document.getElementById("playv3").style.visibility = "hidden" ;
}
function test(event) {
	if(i > 0){
	var touche = event.which || event.keyCode; 
	if (touche == 39 || mouvp3 > 0) //Droite
	{
		r3 = 0
		r2 = 2
		r1 = 2
		r = 2
		p1 = p1 + 1
		modifierPositionObjet("carres",1,0) ;
		if(ani3 < 1 & ani3 > -1 & r3 > -1){ //0
		animation()
		document.getElementById("carre6").style.visibility = "visible" ;
		ani3 = ani3 - 1
		r3 = -1
		}
		if(ani3 < 0 & ani3 > -2 & r3 > -1){ //-1
		animation()
		document.getElementById("carre7").style.visibility = "visible" ;	
		ani3 = ani3 + 1
		r3 = -1
		}
		chronoStart();
		h = h + 1
		arrive();
		mouvp3 = 0
	}
	else if (touche == 37 || mouvp4 > 0) //Gauche
	{
		r = 2;
		r1 = 0;
		r2 = 2;
		r3 = 2;
		p1 = p1 - 1;
		modifierPositionObjet("carres",-1,0) ;
		if(ani1 < 1 & ani1 > -1 & r1 > -1){ //0
		animation()
		document.getElementById("carre2").style.visibility = "visible" ;	
		ani1 = ani1 - 1
		r1 = -1
		}
		if(ani1 < 0 & ani1 > -2 & r1 > -1){ //-1
		animation()
		document.getElementById("carre3").style.visibility = "visible" ;
		ani1 = ani1 + 1
		r1 = -1
		}
		chronoStart();
		h = h - 1
		arrive();
		mouvp4 = 0
	}
	else if (touche == 38 || mouvp1 > 0) //Haut
	{
		r = 0
		r1 = 2
		r2 = 2
		r3 = 2
		p2 = p2 - 1
		modifierPositionObjet("carres",0,-1) ;
		if(ani < 1 & ani > -1 & r > -1){ //0
		animation()
		document.getElementById("carre1").style.visibility = "visible" ;
		ani = ani - 1
		r = -1
		}
		if(ani < 0 & ani > -2 & r > -1){  //-1
		animation()
		document.getElementById("carre").style.visibility = "visible" ;
		ani = ani + 1
		r = -1
		}
		chronoStart();
		l = l - 1
		arrive();
		mouvp1 = 0
	}
	else if (touche == 40 || mouvp2 > 0) //Bas
	{
		r = 2
		r1 = 2
		r2 = 0
		r3 = 2
		p2 = p2 + 1
		modifierPositionObjet("carres",0,1) ;
		if(ani2 < 1 & ani2 > -1 & r2 > -1){ //0
		animation()
		document.getElementById("carre4").style.visibility = "visible" ;	
		ani2 = ani2 - 1
		r2 = -1
		}
		if(ani2 < 0 & ani2 > -2 & r2 > -1){ //-1
		animation()
		document.getElementById("carre5").style.visibility = "visible" ;	
		ani2 = ani2 + 1
		r2 = -1
		}
		chronoStart();
		l = l + 1
		arrive();
		mouvp2 = 0
	}
	}
	}
function arrive(){
	if(h < 7 & h > 0 & l < 47 & l > 42){
	document.getElementById("carre1").style.visibility = "hidden" ;
	document.getElementById("carre").style.visibility = "hidden" ;
	document.getElementById("carre2").style.visibility = "hidden" ;
	document.getElementById("carre3").style.visibility = "hidden" ;		
	document.getElementById("carre4").style.visibility = "hidden" ;
	document.getElementById("carre5").style.visibility = "hidden" ;	
	document.getElementById("carre6").style.visibility = "hidden" ;
	document.getElementById("carre7").style.visibility = "hidden" ;	
	document.getElementById("HC5").style.visibility = "visible" ;
	document.getElementById("chronotime1").style.visibility = "visible" ;
	chronoStop()
	}
}
function can(event) {
	if(i > 0){
	var touche = event.which || event.keyCode; 
	if (touche == 90) // z
	{
		p4 = p4 - 1
		modifierPositionObjet("canon",0,-1) ;
		AliMis = 1
		modifierPositionObjet("missile",0,-1) ;
	}
	if (touche == 83) // s
	{
		p4 = p4 + 1
		modifierPositionObjet("canon",0,1) ;
		AliMis = 1
		modifierPositionObjet("missile",0,1) ;
	}
	}
}
function mis(event) {
	if(i > 0){
	var touche = event.which || event.keyCode; 
	if (touche == 32) // z
	{
	m = m + 1
	boum()
	setTimeout("mis2()",2000)
	}
}
}
function mis2(){
	m = 0
	document.getElementById("missile").style.left = "34%"
	p3 = -51
	rb()
	
}
function boum(){
	if(m > 0){
	p3 = p3 + 1
	AliMis = 1
	modifierPositionObjet("missile",1,0)
	vi()
	bouge = setTimeout("boum()",10);
	}
}
function coeur(){
document.getElementById("vivant").innerHTML = vie - 20
vie = vie - 20
		modifierPositionObjet("carres",10,0) ;
		h = h + 10
		p1 = p1 + 10
if(vie < 1 & vie > - 1){
alert("Vous avez perdu recommencez")
}
vi1()
}	
function vi(){
	if(p3 < p1 + 1 & p3 > p1 - 5 & p4 > p2 - 3 & p4 < p2 + 8 & jol < 1){	
		coeur()
	}		
}
function vi1(){
	jol = 1
	setTimeout("vi2()",2000)
}
function vi2(){
jol = 0
}
function cani(event) {
	if(i > 0){
	var touche = event.which || event.keyCode; 
		p4 = p4 - 1
		modifierPositionObjet("canon",0,-1) ;
		AliMis = 1
		modifierPositionObjet("missile",0,-1) ;
	}
}
function modifierPositionObjet(objet,décalageHorizontal, décalageVertical) {
		gaucheInitialAvecPx = document.getElementById(objet).style.left ;
		gaucheInitial = parseInt(gaucheInitialAvecPx) ;
		gaucheFinal = gaucheInitial + décalageHorizontal ;
		gaucheFinalAvecPx = gaucheFinal + "%" ;
		document.getElementById(objet).style.left = gaucheFinalAvecPx ;
		
		hautInitialAvecPx = document.getElementById(objet).style.top ;
		hautInitial = parseInt(hautInitialAvecPx) ;
		hautFinal = hautInitial + décalageVertical ;
		hautFinalAvecPx = hautFinal + "%" ;
		if(AliMis > 0){
			hautFinalAvecPx = hautFinal + 0.5 + "%" ;
			AliMis = 0
		}
		document.getElementById(objet).style.top = hautFinalAvecPx ;
}
function lol(event){
	if(i > 0){
	var touche = event.which || event.keyCode; 
		p4 = p4 + 1
		modifierPositionObjet("canon",0,1) ;
		AliMis = 1
		modifierPositionObjet("missile",0,1) ;
	}
}	
function rb(){
	if(m < 1){
		document.getElementById("boutonbleu").style.visibility = "visible" ;
		document.getElementById("boutonrouge").style.visibility = "hidden" ;
	}
	if(m > 0){
		document.getElementById("boutonbleu").style.visibility = "hidden" ;
		document.getElementById("boutonrouge").style.visibility = "visible" ;	
	}
}
function misbutton(event){
	if(i > 0){
	var touche = event.which || event.keyCode;
	m = m + 1
	boum()
	setTimeout("mis2()",2000)
}
}
function ji(){
	document.getElementById("ju").style.visibility = "hidden"
	document.getElementById("fmd").style.visibility = "hidden"
	document.getElementById("Jeu1").style.visibility = "visible"
}
