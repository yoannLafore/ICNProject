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

function hyg(){
	i = 1
	document.cookie = "Test1";
}


function modifierPositionBouton(décalageHorizontal, décalageVertical) {
		gaucheInitialAvecPx = document.getElementById("carre").style.left ;
		gaucheInitial = parseInt(gaucheInitialAvecPx) ;
		gaucheFinal = gaucheInitial + décalageHorizontal ;
		gaucheFinalAvecPx = gaucheFinal + "%" ;
		document.getElementById("carre").style.left = gaucheFinalAvecPx ;
		
		hautInitialAvecPx = document.getElementById("carre").style.top ;
		hautInitial = parseInt(hautInitialAvecPx) ;
		hautFinal = hautInitial + décalageVertical ;
		hautFinalAvecPx = hautFinal + "%" ;
		document.getElementById("carre").style.top = hautFinalAvecPx ;
}
function test(event) {
	if(i > 0){
	var touche = event.which || event.keyCode; 

	if (touche == 39) 
	{
		r3 = 0
		r2 = 2
		r1 = 2
		r = 2
		p1 = p1 + 1
		modifierPositionObjet("carre",1,0) ;
		modifierPositionObjet("carre1",1,0) ;
		modifierPositionObjet("carre2",1,0) ;
		modifierPositionObjet("carre3",1,0) ;
		modifierPositionObjet("carre4",1,0) ;
		modifierPositionObjet("carre5",1,0) ;
		modifierPositionObjet("carre6",1,0) ;
		modifierPositionObjet("carre7",1,0) ;
		
		if(ani3 < 1 & ani3 > -1 & r3 > -1){ //0
		document.getElementById("carre1").style.visibility = "hidden" ;
		document.getElementById("carre").style.visibility = "hidden" ;
		document.getElementById("carre2").style.visibility = "hidden" ;
		document.getElementById("carre3").style.visibility = "hidden" ;	
		document.getElementById("carre4").style.visibility = "hidden" ;	
		document.getElementById("carre5").style.visibility = "hidden" ;	
		document.getElementById("carre6").style.visibility = "visible" ;
		document.getElementById("carre7").style.visibility = "hidden" ;	
		ani3 = ani3 - 1
		r3 = -1
		}
		if(ani3 < 0 & ani3 > -2 & r3 > -1){ //-1
		document.getElementById("carre1").style.visibility = "hidden" ;
		document.getElementById("carre").style.visibility = "hidden" ;
		document.getElementById("carre2").style.visibility = "hidden" ;
		document.getElementById("carre3").style.visibility = "hidden" ;
		document.getElementById("carre4").style.visibility = "hidden" ;	
		document.getElementById("carre5").style.visibility = "hidden" ;
		document.getElementById("carre6").style.visibility = "hidden" ;
		document.getElementById("carre7").style.visibility = "visible" ;	
		
		ani3 = ani3 + 1
		r3 = -1
		}

		chronoStart();
		h = h + 1
		arrive();
	}
	else if (touche == 37) 
	{
		r = 2
		r1 = 0
		r2 = 2
		r3 = 2
		p1 = p1 - 1
		modifierPositionBouton(-1,0) ;
		modifierPositionBouton1(-1,0) ;
		modifierPositionBouton2(-1,0) ;
		modifierPositionBouton3(-1,0) ;
		modifierPositionBouton4(-1,0) ;
		modifierPositionBouton5(-1,0) ;
		modifierPositionBouton6(-1,0) ;
		modifierPositionBouton7(-1,0) ;
		if(ani1 < 1 & ani1 > -1 & r1 > -1){ //0
		document.getElementById("carre1").style.visibility = "hidden" ;
		document.getElementById("carre").style.visibility = "hidden" ;
		document.getElementById("carre2").style.visibility = "visible" ;
		document.getElementById("carre3").style.visibility = "hidden" ;		
		document.getElementById("carre4").style.visibility = "hidden" ;
		document.getElementById("carre5").style.visibility = "hidden" ;	
		document.getElementById("carre6").style.visibility = "hidden" ;
		document.getElementById("carre7").style.visibility = "hidden" ;	
		ani1 = ani1 - 1
		r1 = -1
		}
		if(ani1 < 0 & ani1 > -2 & r1 > -1){ //-1
		document.getElementById("carre1").style.visibility = "hidden" ;
		document.getElementById("carre").style.visibility = "hidden" ;
		document.getElementById("carre2").style.visibility = "hidden" ;
		document.getElementById("carre3").style.visibility = "visible" ;
		document.getElementById("carre4").style.visibility = "hidden" ;	
		document.getElementById("carre5").style.visibility = "hidden" ;	
		document.getElementById("carre6").style.visibility = "hidden" ;
		document.getElementById("carre7").style.visibility = "hidden" ;	
		ani1 = ani1 + 1
		r1 = -1
		}
		chronoStart();
		h = h - 1
		arrive();
	}
	else if (touche == 38) 
	{
		r = 0
		r1 = 2
		r2 = 2
		r3 = 2
		p2 = p2 - 1
		modifierPositionBouton(0,-1) ;
		modifierPositionBouton1(0,-1) ;
		modifierPositionBouton2(0,-1) ;
		modifierPositionBouton3(0,-1) ;	
		modifierPositionBouton4(0,-1) ;
		modifierPositionBouton5(0,-1) ;
		modifierPositionBouton6(0,-1) ;
		modifierPositionBouton7(0,-1) ;
		if(ani < 1 & ani > -1 & r > -1){ //0
		document.getElementById("carre1").style.visibility = "visible" ;
		document.getElementById("carre").style.visibility = "hidden" ;
		document.getElementById("carre2").style.visibility = "hidden" ;
		document.getElementById("carre3").style.visibility = "hidden" ;	
		document.getElementById("carre4").style.visibility = "hidden" ;
		document.getElementById("carre5").style.visibility = "hidden" ;	
		document.getElementById("carre6").style.visibility = "hidden" ;
		document.getElementById("carre7").style.visibility = "hidden" ;	
		ani = ani - 1
		r = -1
		}
		if(ani < 0 & ani > -2 & r > -1){  //-1
		document.getElementById("carre1").style.visibility = "hidden" ;
		document.getElementById("carre").style.visibility = "visible" ;
		document.getElementById("carre2").style.visibility = "hidden" ;
		document.getElementById("carre3").style.visibility = "hidden" ;
		document.getElementById("carre4").style.visibility = "hidden" ;
		document.getElementById("carre5").style.visibility = "hidden" ;	
		document.getElementById("carre6").style.visibility = "hidden" ;
		document.getElementById("carre7").style.visibility = "hidden" ;	
		ani = ani + 1
		r = -1
		}
		chronoStart();
		l = l - 1
		arrive();
	}
	else if (touche == 40)
	{
		r = 2
		r1 = 2
		r2 = 0
		r3 = 2
		p2 = p2 + 1
		modifierPositionBouton(0,1) ;
		modifierPositionBouton1(0,1) ;
		modifierPositionBouton2(0,1) ;
		modifierPositionBouton3(0,1) ;
		modifierPositionBouton4(0,1) ;
		modifierPositionBouton5(0,1) ;
		modifierPositionBouton6(0,1) ;
		modifierPositionBouton7(0,1) ;
		if(ani2 < 1 & ani2 > -1 & r2 > -1){ //0
		document.getElementById("carre1").style.visibility = "hidden" ;
		document.getElementById("carre").style.visibility = "hidden" ;
		document.getElementById("carre2").style.visibility = "hidden" ;
		document.getElementById("carre3").style.visibility = "hidden" ;	
		document.getElementById("carre4").style.visibility = "visible" ;	
		document.getElementById("carre5").style.visibility = "hidden" ;	
		document.getElementById("carre6").style.visibility = "hidden" ;
		document.getElementById("carre7").style.visibility = "hidden" ;	
		ani2 = ani2 - 1
		r2 = -1
		}
		if(ani2 < 0 & ani2 > -2 & r2 > -1){ //-1
		document.getElementById("carre1").style.visibility = "hidden" ;
		document.getElementById("carre").style.visibility = "hidden" ;
		document.getElementById("carre2").style.visibility = "hidden" ;
		document.getElementById("carre3").style.visibility = "hidden" ;
		document.getElementById("carre4").style.visibility = "hidden" ;	
		document.getElementById("carre5").style.visibility = "visible" ;	
		document.getElementById("carre6").style.visibility = "hidden" ;
		document.getElementById("carre7").style.visibility = "hidden" ;	
		ani2 = ani2 + 1
		r2 = -1
		}
		chronoStart();
		l = l + 1
		arrive();
	}
	}
	}
function mouv1(event) {
	if(i > 0){
	var touche = event.which || event.keyCode;	
		r = 0
		r1 = 2
		r2 = 2
		r3 = 2
		p2 = p2 - 1
		modifierPositionBouton(0,-1) ;
		modifierPositionBouton1(0,-1) ;
		modifierPositionBouton2(0,-1) ;
		modifierPositionBouton3(0,-1) ;	
		modifierPositionBouton4(0,-1) ;
		modifierPositionBouton5(0,-1) ;
		modifierPositionBouton6(0,-1) ;
		modifierPositionBouton7(0,-1) ;
		if(ani < 1 & ani > -1 & r > -1){ //0
		document.getElementById("carre1").style.visibility = "visible" ;
		document.getElementById("carre").style.visibility = "hidden" ;
		document.getElementById("carre2").style.visibility = "hidden" ;
		document.getElementById("carre3").style.visibility = "hidden" ;	
		document.getElementById("carre4").style.visibility = "hidden" ;
		document.getElementById("carre5").style.visibility = "hidden" ;	
		document.getElementById("carre6").style.visibility = "hidden" ;
		document.getElementById("carre7").style.visibility = "hidden" ;	
		ani = ani - 1
		r = -1
		}
		if(ani < 0 & ani > -2 & r > -1){  //-1
		document.getElementById("carre1").style.visibility = "hidden" ;
		document.getElementById("carre").style.visibility = "visible" ;
		document.getElementById("carre2").style.visibility = "hidden" ;
		document.getElementById("carre3").style.visibility = "hidden" ;
		document.getElementById("carre4").style.visibility = "hidden" ;
		document.getElementById("carre5").style.visibility = "hidden" ;	
		document.getElementById("carre6").style.visibility = "hidden" ;
		document.getElementById("carre7").style.visibility = "hidden" ;	
		ani = ani + 1
		r = -1
		}
	l = l - 1
	arrive();
	}
}
function mouv2(event) {
	if(i > 0){
	var touche = event.which || event.keyCode;
		r = 2
		r1 = 2
		r2 = 0
		r3 = 2
		p2 = p2 + 1
		modifierPositionBouton(0,1) ;
		modifierPositionBouton1(0,1) ;
		modifierPositionBouton2(0,1) ;
		modifierPositionBouton3(0,1) ;
		modifierPositionBouton4(0,1) ;
		modifierPositionBouton5(0,1) ;
		modifierPositionBouton6(0,1) ;
		modifierPositionBouton7(0,1) ;
		if(ani2 < 1 & ani2 > -1 & r2 > -1){ //0
		document.getElementById("carre1").style.visibility = "hidden" ;
		document.getElementById("carre").style.visibility = "hidden" ;
		document.getElementById("carre2").style.visibility = "hidden" ;
		document.getElementById("carre3").style.visibility = "hidden" ;	
		document.getElementById("carre4").style.visibility = "visible" ;	
		document.getElementById("carre5").style.visibility = "hidden" ;	
		document.getElementById("carre6").style.visibility = "hidden" ;
		document.getElementById("carre7").style.visibility = "hidden" ;	
		ani2 = ani2 - 1
		r2 = -1
		}
		if(ani2 < 0 & ani2 > -2 & r2 > -1){ //-1
		document.getElementById("carre1").style.visibility = "hidden" ;
		document.getElementById("carre").style.visibility = "hidden" ;
		document.getElementById("carre2").style.visibility = "hidden" ;
		document.getElementById("carre3").style.visibility = "hidden" ;
		document.getElementById("carre4").style.visibility = "hidden" ;	
		document.getElementById("carre5").style.visibility = "visible" ;	
		document.getElementById("carre6").style.visibility = "hidden" ;
		document.getElementById("carre7").style.visibility = "hidden" ;	
		ani2 = ani2 + 1
		r2 = -1
		}
	l = l + 1
	arrive();
	}
}
function mouv3(event) {
	if(i > 0){
	var touche = event.which || event.keyCode;
		r3 = 0
		r2 = 2
		r1 = 2
		r = 2
		p1 = p1 + 1
		modifierPositionBouton(1,0) ;
		modifierPositionBouton1(1,0) ;
		modifierPositionBouton2(1,0) ;
		modifierPositionBouton3(1,0) ;
		modifierPositionBouton4(1,0) ;
		modifierPositionBouton5(1,0) ;
		modifierPositionBouton6(1,0) ;
		modifierPositionBouton7(1,0) ;
		if(ani3 < 1 & ani3 > -1 & r3 > -1){ //0
		document.getElementById("carre1").style.visibility = "hidden" ;
		document.getElementById("carre").style.visibility = "hidden" ;
		document.getElementById("carre2").style.visibility = "hidden" ;
		document.getElementById("carre3").style.visibility = "hidden" ;	
		document.getElementById("carre4").style.visibility = "hidden" ;	
		document.getElementById("carre5").style.visibility = "hidden" ;	
		document.getElementById("carre6").style.visibility = "visible" ;
		document.getElementById("carre7").style.visibility = "hidden" ;	
		ani3 = ani3 - 1
		r3 = -1
		}
		if(ani3 < 0 & ani3 > -2 & r3 > -1){ //-1
		document.getElementById("carre1").style.visibility = "hidden" ;
		document.getElementById("carre").style.visibility = "hidden" ;
		document.getElementById("carre2").style.visibility = "hidden" ;
		document.getElementById("carre3").style.visibility = "hidden" ;
		document.getElementById("carre4").style.visibility = "hidden" ;	
		document.getElementById("carre5").style.visibility = "hidden" ;
		document.getElementById("carre6").style.visibility = "hidden" ;
		document.getElementById("carre7").style.visibility = "visible" ;	
		
		ani3 = ani3 + 1
		r3 = -1
		}
	h = h + 1
	arrive();
	}
}
function mouv4(event) {
	if(i > 0){
	var touche = event.which || event.keyCode;
		r = 2
		r1 = 0
		r2 = 2
		r3 = 2
		p1 = p1 - 1
		modifierPositionBouton(-1,0) ;
		modifierPositionBouton1(-1,0) ;
		modifierPositionBouton2(-1,0) ;
		modifierPositionBouton3(-1,0) ;
		modifierPositionBouton4(-1,0) ;
		modifierPositionBouton5(-1,0) ;
		modifierPositionBouton6(-1,0) ;
		modifierPositionBouton7(-1,0) ;
		if(ani1 < 1 & ani1 > -1 & r1 > -1){ //0
		document.getElementById("carre1").style.visibility = "hidden" ;
		document.getElementById("carre").style.visibility = "hidden" ;
		document.getElementById("carre2").style.visibility = "visible" ;
		document.getElementById("carre3").style.visibility = "hidden" ;		
		document.getElementById("carre4").style.visibility = "hidden" ;
		document.getElementById("carre5").style.visibility = "hidden" ;	
		document.getElementById("carre6").style.visibility = "hidden" ;
		document.getElementById("carre7").style.visibility = "hidden" ;	
		ani1 = ani1 - 1
		r1 = -1
		}
		if(ani1 < 0 & ani1 > -2 & r1 > -1){ //-1
		document.getElementById("carre1").style.visibility = "hidden" ;
		document.getElementById("carre").style.visibility = "hidden" ;
		document.getElementById("carre2").style.visibility = "hidden" ;
		document.getElementById("carre3").style.visibility = "visible" ;
		document.getElementById("carre4").style.visibility = "hidden" ;	
		document.getElementById("carre5").style.visibility = "hidden" ;	
		document.getElementById("carre6").style.visibility = "hidden" ;
		document.getElementById("carre7").style.visibility = "hidden" ;	
		ani1 = ani1 + 1
		r1 = -1
		}
	h = h - 1
	arrive();
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


function modifierPositioncanon(décalageHorizontal, décalageVertical) {
		gaucheInitialAvecPx = document.getElementById("canon").style.left ;
		gaucheInitial = parseInt(gaucheInitialAvecPx) ;
		gaucheFinal = gaucheInitial + décalageHorizontal ;
		gaucheFinalAvecPx = gaucheFinal + "%" ;
		document.getElementById("canon").style.left = gaucheFinalAvecPx ;
		
		hautInitialAvecPx = document.getElementById("canon").style.top ;
		hautInitial = parseInt(hautInitialAvecPx) ;
		hautFinal = hautInitial + décalageVertical ;
		hautFinalAvecPx = hautFinal + "%" ;
		document.getElementById("canon").style.top = hautFinalAvecPx ;
}
function can(event) {
	if(i > 0){
	var touche = event.which || event.keyCode; 
	if (touche == 90) // z
	{
		p4 = p4 - 1
		modifierPositioncanon(0,-1) ;
		modifierPositionmissile(0,-1) ;
	}
	if (touche == 83) // s
	{
		p4 = p4 + 1
		modifierPositioncanon(0,1) ;
		modifierPositionmissile(0,1) ;
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
	mol(34)
	p3 = -51
	rb()
	
}
function boum(){
	if(m > 0){
	p3 = p3 + 1
	modifierPositionmissile(1,0)
	vi()
	bouge = setTimeout("boum()",10);
	}
}
function modifierPositionmissile(décalageHorizontal, décalageVertical) {
		gaucheInitialAvecPx = document.getElementById("missile").style.left ;
		gaucheInitial = parseInt(gaucheInitialAvecPx) ;
		gaucheFinal = gaucheInitial + décalageHorizontal ;
		gaucheFinalAvecPx = gaucheFinal + "%" ;
		document.getElementById("missile").style.left = gaucheFinalAvecPx ;
		
		hautInitialAvecPx = document.getElementById("missile").style.top ;
		hautInitial = parseInt(hautInitialAvecPx) ;
		hautFinal = hautInitial + décalageVertical ;
		hautFinalAvecPx = hautFinal + 0.5 + "%" ;
		document.getElementById("missile").style.top = hautFinalAvecPx ;
		rb();
}
function mol(k){
	gaucheInitialAvecPx = document.getElementById("missile").style.left ;
		gaucheInitial = parseInt(gaucheInitialAvecPx) ;
		gaucheFinal = k ;
		gaucheFinalAvecPx = gaucheFinal + "%" ;
		document.getElementById("missile").style.left = gaucheFinalAvecPx ;

}
	
function coeur(){
document.getElementById("vivant").innerHTML = vie - 20
vie = vie - 20
		modifierPositionBouton(10,0) ;
		modifierPositionBouton1(10,0) ;
		modifierPositionBouton2(10,0) ;
		modifierPositionBouton3(10,0) ;
		modifierPositionBouton4(10,0) ;
		modifierPositionBouton5(10,0) ;
		modifierPositionBouton6(10,0) ;
		modifierPositionBouton7(10,0) ;
		p1 = p1 + 10
		h = h + 10
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
		modifierPositioncanon(0,-1) ;
		modifierPositionmissile(0,-1) ;
	}
}
	
	function modifierPositionObjet(objet,décalageHorizontal, décalageVertical) {
		gaucheInitialAvecPx = document.getElementById("carres").getElementById(objet).style.left ;
		gaucheInitial = parseInt(gaucheInitialAvecPx) ;
		gaucheFinal = gaucheInitial + décalageHorizontal ;
		gaucheFinalAvecPx = gaucheFinal + "%" ;
		document.getElementById("carres").getElementById(objet).style.left = gaucheFinalAvecPx ;
		
		hautInitialAvecPx = document.getElementById("carres").getElementById(objet).style.top ;
		hautInitial = parseInt(hautInitialAvecPx) ;
		hautFinal = hautInitial + décalageVertical ;
		hautFinalAvecPx = hautFinal + "%" ;
		document.getElementById("carres").getElementById(objet).style.top = hautFinalAvecPx ;
}
	
	
function lol(event){
	if(i > 0){
	var touche = event.which || event.keyCode; 
		p4 = p4 + 1
		modifierPositioncanon(0,1) ;
		modifierPositionmissile(0,1) ;
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
}
	
function lp(){
	document.getElementById("fmd").style.visibility = "hidden"
	document.getElementById("fmd1").style.visibility = "visible"
}
	
function lp1(){
	document.getElementById("fmd").style.visibility = "visible"
	document.getElementById("fmd1").style.visibility = "hidden"
}
	
	
	
	
	
	
	
	
	
	



