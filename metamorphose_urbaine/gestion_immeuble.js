/**
 * Class Immeuble 
 */
var ID_Immeuble=0;
var MAX_DPLTx=400;
var MAX_DPLTy=600;

function Vecteur_deplacement(x,y)
{
	this.x=x;
	this.y=y;
}
function Immeuble(type,posx,posy)
{
	this.id = ID_Immeuble;
	ID_Immeuble++;// ID_Immeuble = ID_Immeuble+1
	this.posx=posx;
	this.posy=posy;
	this.maDiv;
	this.divDescrption=document.getElementById("text_content");
	this.img;
	this.timerDplcmt=0;
	this.orientation;//définit l'orientation de l'image
	this.target=document.getElementById("image_content");
	
	this.title="Null";
	this.annee="année";
	this.superficie="superficie";
	this.description="description de l'immeuble";
	this.urlImage="images/HYBLAB_04.png";
	this.urlInfo="#";
	
	this.maDiv=document.createElement("div");
	var attMadiv = document.createAttribute("id");
	attMadiv.value=this.id;
	this.maDiv.setAttributeNode(attMadiv);
	
	attMadiv = document.createAttribute("width");
	attMadiv.value="11px";
	this.maDiv.setAttributeNode(attMadiv);

	this.maDiv.style.position="absolute";
	
	//On positionne les mini-div
	
	this.maDiv.style.width="11px";
	this.maDiv.style.height="11px";
	this.maDiv.style.left=this.posx+"px";
	this.maDiv.style.top=this.posy+"px";
	//On gere le système de class CSS
	attImg = document.createAttribute("class");
	switch (type) {
	case 0:
		attImg.value="bleu";
		break;
	case 1:
		attImg.value="orange";
		break;
	case 2:
		attImg.value="bleu-claire";
		break;
	case 3:
		attImg.value="orange-claire";
		break;
	default:
		attImg.value="";
		break;
	}
	attImg.value+=" immeuble";
		
	
	this.maDiv.setAttributeNode(attImg);
	
	this.target.appendChild(this.maDiv);
	
	
	return this;
}
Immeuble.prototype.effacer_description = function()
{
	var taille = this.divDescrption.childNodes.length;
	for(var i=0;i<taille;i++){
		this.divDescrption.removeChild(this.divDescrption.childNode[i]);
	}
};
Immeuble.prototype.afficher_description = function()
{
	//
	// this.divDescrption.innerHTML="O affichera la descrption ICI!";
	this.inserer_infos();
	$('#myModal').modal({
		  keyboard: false
		});
};
Immeuble.prototype.inserer_infos = function()
{
	$('#myModalLabel').replaceWith("<h3 id=\"myModalLabel\">"+this.title+"</h3>");
	$('.modal-body').empty();
	$('.modal-body').append("" +
			"<div class=\"row-fluid\"> " +
			"<div class=\"span5\"><a target=\"_blank\" href=\""+this.urlImage+"\"><img style=\"width:220px\" src=\""+this.urlImage+"\"></a></div>" +
			" <div class=\"span6\" id=\"infos_immeubles\">");
	$('.modal-body').append("</div></div><div id=\"description\"></div>");
	$('#infos_immeubles').append("<h3 id=\"myModalLabel\">Superficie:</h3>");
	$('#infos_immeubles').append("<p>"+this.superficie+" m²</p>");
	$('#infos_immeubles').append("<h3 id=\"myModalLabel\">Année de livraison:</h3>");
	$('#infos_immeubles').append("<p>"+this.annee+"</p>");
	$('#description').append("<h3 >Description:</h3>");
	$('#description').append("<div>"+this.description+"</div>");
	$('.modal-footer').empty();
	$('.modal-footer').append("<button class=\"btn\" data-dismiss=\"modal\">Fermer</button>");
	$('.modal-footer').append("<a type=\"button\" target=\"_blank\" class=\"btn btn-primary\" href=\""+this.urlInfo+"\">En savoir plus</a>");
	
};
Immeuble.prototype.set_description = function(desc){
	this.description=desc;
};
Immeuble.prototype.set_urlImage = function(url){
	this.urlImage=url;
};
Immeuble.prototype.set_annee = function(annee){
	this.annee=annee;
};
Immeuble.prototype.set_superficie = function(superficie){
	this.superficie=superficie;
};
Immeuble.prototype.set_title = function(title){
	this.title=title;
};
Immeuble.prototype.set_urlInfo = function(info){
	this.urlInfo=info;
};
Immeuble.prototype.deplacer_Immeuble = function(vecteur)//ici on passe en parametre un Objet de type Vecteur_deplacement
{
	this.effacer_Immeuble();
	this.posx=this.posx+vecteur.x;
	this.posy=this.posy+vecteur.y;
	this.afficher_Immeuble();
};
Immeuble.prototype.verifier_position = function()
{
	var E=null;
	if(this.posx<(MAX_DPLTx-30))
		{
		if(this.posy<MAX_DPLTy)
			{
			E=true;
			}else
				{
				E= false;
				}
		
		}else
			{
			E=false;
			}
	
	return E;
};
Immeuble.prototype.effacer_All_Immeubles = function(){
	var taille = document.getElementById("image_content").childNodes.length;
	//alert(document.getElementById("image_content").childNodes[0]);
	if(taille!=0){
		for(var i=1;i<=taille;i++){
			document.getElementById("image_content").removeChild(document.getElementById("image_content").firstChild);
		}
	}
	var img=document.createElement("img");
	var attImg = document.createAttribute("src");
	attImg.value="images/section1/map-contour_03.png";
	img.setAttributeNode(attImg);
	document.getElementById("image_content").appendChild(img);
	
};
Immeuble.prototype.detruire = function()
{
	//alert("attention on détuit!!!!!!");
	clearInterval(this.timerDplcmt);
};
Immeuble.prototype.orienterImage=function(vecteur)
{
	var norm = Math.sqrt(vecteur.x*vecteur.x + vecteur.y*vecteur.y);
	var cosO = vecteur.x/norm;
	var O = Math.acos(cosO);
	var deg = (360*O)/(2*Math.PI);
	//alert("on rotate de "+Math.ceil(deg)+" degres");
	this.img.style.WebkitTransform="rotate("+Math.ceil(deg)+"deg)";
	//this.maDiv.style.WebkitTransform="rotate("+Math.ceil(deg)+"deg)";
	//this.maDiv.getContext("2d").rotate(deg);
};