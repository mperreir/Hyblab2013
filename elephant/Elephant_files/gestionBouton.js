/**
 * 
 */

function lancementfenetre() {
	var x=document.getElementById("bouton");
	var largeurParent=x.parentNode.style.offsetWidth;
	x.style.width=largeurParent-600;
	//salert(largeurParent);
	
}


function deplieruban(bouton) {
	
	var x=document.getElementById("bouton"+bouton); 
	resetBouton();
	x.setAttribute("src", "image/boutonlong/"+bouton+".png");
	document.getElementById(bouton).style.marginLeft="6px";
}

function resetBouton() {
	for (i=1;i<=12;i++){
		document.getElementById("bouton"+i).setAttribute("src", "image/boutoncourt/"+i+".png");
		document.getElementById(i).style.marginLeft="344px";
	}
}

function changedataviz(bouton){
	var x = document.getElementById("imagechange");
    switch (bouton) {
    case 1:  imageelephant(); 
    		x.setAttribute("src", "image/Poids-tailles.png"); 
    		x.style.width="800px";
    		x.style.height="600px"; 
    		x.style.marginTop="-100px"; 
    		x.style.marginLeft="-110px";
    		document.getElementById("legende").innerHTML="Donn&eacute;es issues des Machines";
    		document.getElementById("legende").setAttribute("href", "http://www.lamachine.fr/");
    		break;  //poI
    case 2:   imageelephant();
    		x.setAttribute("src", "image/VERINs.png");
    		document.getElementById("legende").innerHTML="Donn&eacute;es issues des Machines";
    		document.getElementById("legende").setAttribute("href", "http://www.lamachine.fr/");
    		break; // verrin
    case 3: imageelephant(); 
    		x.setAttribute("src", "image/Materiaux.png");
    		document.getElementById("legende").innerHTML="Donn&eacute;es issues des Machines";
    		document.getElementById("legende").setAttribute("href", "http://www.lamachine.fr/");
    		break;  //COMPO
    case 4:  imageelephant();
    		x.setAttribute("src", "image/construction.png"); 
    		document.getElementById("legende").innerHTML="Donn&eacute;es issues des Machines";
    		document.getElementById("legende").setAttribute("href", "http://www.lamachine.fr/");break;
    case 5:   financement(); 
    			document.getElementById("legende").innerHTML="Donn&eacute;es issues des Machines de Nantes";
    			document.getElementById("legende").setAttribute("href", "http://www.lesmachines-nantes.fr"); break;  //FINANCEMENT
    case 6:  imageelephant();
    		x.setAttribute("src", "image/kmh.gif"); 
    		document.getElementById("legende").innerHTML="Donn&eacute;es issues des Machines de Nantes";
			document.getElementById("legende").setAttribute("href", "http://www.lesmachines-nantes.fr"); break;   //vitess
    case 7:   viesurleNet(); 
    		document.getElementById("legende").innerHTML="Donn&eacute;es issues des Machines de Nantes";
    		document.getElementById("legende").setAttribute("href", "http://www.lesmachines-nantes.fr"); break;
    		break;  // WEB
    case 8:  imageelephant();
    		x.setAttribute("src", "image/Capacite.png");
    		document.getElementById("legende").innerHTML="Donn&eacute;es issues des Machines de Nantes";
			document.getElementById("legende").setAttribute("href", "http://www.lesmachines-nantes.fr");break;  //CAPACITE
    case 9:  imageelephant(); 
    		x.setAttribute("src", "image/carte-FRANCE.png"); 
    		document.getElementById("legende").innerHTML="Donn&eacute;es issues de data.nantes.fr";
    		document.getElementById("legende").setAttribute("href", "http://data.nantes.fr/");break; break;  //freq par DEP
    case 10: imageelephant(); 
    		x.setAttribute("src", "image/carte-europe.png"); 
    		x.style.width="533px";
    		x.style.height="400px";
    		document.getElementById("legende").innerHTML="Donn&eacute;es issues de data.nantes.fr";
    		document.getElementById("legende").setAttribute("href", "http://data.nantes.fr/");break;  //frq par dPAYS
    case 11: imageelephant(); 
    		x.setAttribute("src", "image/frequentation.png");
    		document.getElementById("legende").innerHTML="Donn&eacute;es issues du voyage &agrave; Nantes";
    		document.getElementById("legende").setAttribute("href", "http://www.levoyageanantes.fr/");break ;
    case 12: freqparan();
    	document.getElementById("legende").innerHTML="Donn&eacute;es issues du voyage &agrave; Nantes";
    	document.getElementById("legende").setAttribute("href", "http://www.levoyageanantes.fr/");break ;
    }
}

function financement() {
	document.getElementById("imagechange").style.display = "none";
    document.getElementById("financement").style.display = "block";
    document.getElementById("viesurleNet").style.display = "none";
    document.getElementById("paran").style.display = "none";
    document.getElementById("financement").style.marginTop="0px";
    document.getElementById("financement").style.marginLeft="0px";
}
function viesurleNet() {
	document.getElementById("imagechange").style.display = "none";
    document.getElementById("financement").style.display = "none";
    document.getElementById("viesurleNet").style.display = "block";
    document.getElementById("paran").style.display = "none";
    document.getElementById("viesurleNet").style.marginTop="0px";
    document.getElementById("viesurleNet").style.marginLeft="20px";
    
}
function freqparan() {
	document.getElementById("imagechange").style.display = "none";
    document.getElementById("financement").style.display = "none";
    document.getElementById("viesurleNet").style.display = "none";
    document.getElementById("paran").style.display = "block";
    document.getElementById("paran").style.marginTop="-30px";
    document.getElementById("paran").style.marginLeft="30px";
}

function imageelephant() {
	document.getElementById("imagechange").style.display = "block";
    document.getElementById("financement").style.display = "none";
    document.getElementById("viesurleNet").style.display = "none";
    document.getElementById("paran").style.display = "none";
    document.getElementById("imagechange").style.marginTop="00px";
    document.getElementById("imagechange").style.marginLeft="00px";
    document.getElementById("imagechange").style.width="500px";
    document.getElementById("imagechange").style.height="375px";
}

