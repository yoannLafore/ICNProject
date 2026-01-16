var apparitiondumenu = 0
var LancementpourAnimation = 0
var AntiTriche1 = 0
var AntiTriche2 = 0


function ApparitionMenu(){
	if(apparitiondumenu > 0){
		document.getElementById("MenuJeu2").style.visibility = "hidden"
		apparitiondumenu = 0
	} else{
		document.getElementById("MenuJeu2").style.visibility = "visible"	
		apparitiondumenu = 1
	}
}
function Lancement(){
	document.getElementById("Jeu2").style.visibility = "visible"
	document.getElementById("Jeu1").style.visibility = "hidden";
	document.getElementById("ObjetJeu1").style.visibility = "hidden"
	document.getElementById("ju").style.visibility = "hidden"
	document.getElementById("fmd").style.visibility = "hidden"
	document.getElementById("boutonbleu").style.visibility = "hidden"
	document.getElementById("carre4").style.visibility = "hidden"
	document.getElementById("playv3").style.visibility = "hidden"
	document.getElementById("vivant").style.visibility = "hidden"
	document.getElementById("chronotime").style.visibility = "hidden"
	document.getElementById("MenuJeu2").style.visibility = "hidden"
}

function LancementAnimation(){
	if(LancementpourAnimation < 1){
		AnimationRoute()
		LancementpourAnimation = 1
	}
}
function AnimationRoute(){
		Initial = document.getElementById("Route").style.left
		Initial2 = parseInt(Initial) ;
		document.getElementById("Route").style.left = Initial2 - 1 + "%"
		
		Initialbis = document.getElementById("Route2").style.left 
		Initialbis2 = parseInt(Initialbis)
		document.getElementById("Route2").style.left = Initialbis2 - 1 + "%"
		if(Initial2 < -99){
			document.getElementById("Route").style.left = 99 + "%"
		}
		if(Initialbis2 < -99){
			document.getElementById("Route2").style.left = 99 + "%"
		}
		setTimeout("AnimationRoute()",10)
}

function voiture1(){
	var touche = event.which || event.keyCode;
	if(touche == 39 && AntiTriche1 < 1){
	AvancementVehicule("VoitureCourse1",1)
	AntiTriche1 = 1
	}
	if(touche == 37 && AntiTriche1 > 0){
	AvancementVehicule("VoitureCourse1",1)
	AntiTriche1 = 0
	}
	
}

function voiture2(){
	var touche = event.which || event.keyCode;
	if(touche == 69 && AntiTriche2 < 1){
	AvancementVehicule("VoitureCourse2",1)
	AntiTriche2 = 1
	}
	if(touche == 65 && AntiTriche2 > 0){
	AvancementVehicule("VoitureCourse2",1)
	AntiTriche2 = 0
	}
	
}

function AvancementVehicule(objet,Avance){
		Initial = document.getElementById(objet).style.left
		Initial2 = parseInt(Initial) ;
		document.getElementById(objet).style.left = Initial2 + Avance + "%"
}