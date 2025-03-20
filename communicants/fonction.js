var arrayQuartiers={ "CV" : "CENTRE VILLE",
					"CBS" : "CHANTENAY - BELLEVUE - SAINTE ANNE",
					"DZ"  : "DERVALLIÈRES - ZOLA",
					"HPS" : "HAUTS PAVÉS - SAINT FÉLIX",
					"SDM" : "SAINT DONATIEN - MALAKOFF",
					"IDN" : "ILE DE NANTES",
					"BB"  : "BREIL - BARBERIE",
					"QN"  : "QUARTIERS NORD",
					"NE"  : "NANTES ERDRE",
					"DB"  : "DOULON - BOTTIÈRE",
					"QS"  : "QUARTIERS SUD",
					"null"  : ""
						};

/*var quartier_choisi=null;*/
var etat="home_1";
var quartier_survole="null";
var quartier_choisi="CV";
var variable_choisi="NbEt";
function set_text_partie_gauche_page1(){
	var idDiv = document.getElementById("partieGauche");
	idDiv.innerHTML+="<p>Bienvenue à Nantes ! Grande métropole de l’ouest, ville de culture, d’histoire, d’innovation et... de communication ! Mais où se cachent les communicants de la cité des Ducs ? Un quartier semble attirer tous les regards : L’île de Nantes. Faites vous-même parler les données, en comparant ce nouveaux pôle de communication au quartier de votre choix. <a onclick='projet()'>En savoir plus</a>.</p>";
	idDiv.innerHTML+="<p class='espaceAvantImage'>" +
			"<img src='images/TEXTEChoisirUnQuartier2.png'>" +
			"</p>";
	idDiv.innerHTML+="<div id='quartier_survole' class='text-warning lead'>" +
	arrayQuartiers[quartier_survole] +
	"</p>";
	}

function set_quartier_survole(val){
	quartier_survole=val;
	
	if(etat=="home_1"){
		vider_partie_gauche();
		set_text_partie_gauche_page1();
	}else if (etat=="home_3") {
		//set_map_partie_gauche_3();
	}{
		
	}
	
}
function set_etat(val){
	etat=val;
}
function set_carte_partie_droite_page1(){
	var idDiv = document.getElementById("partieDroite");
	idDiv.innerHTML="<div id=\"test\" style='height: 400px;text-align: center;padding-left: 110px;padding-top: 110px;'><img id=\"Carte\" class=\"mapper \"  usemap =\"#map\" alt=\"\" src=\"CarteGrande/Carte.png\"></div>";
	idDiv.innerHTML+='<map name="map">'+
		
	'<area title="'+arrayQuartiers['CBS']+'" shape="polygon" coords=" 0,344 , 6,319 , 12,309 , 26,292 , 53,298 , 67,295 , 91,307 , 111,310 , 91,335 , 72,344 , 49,350 , 2,344"  target=_blank onmouseover="set_quartier_survole(\'CBS\');document.getElementById(\'Carte\').src=\'CarteGrande/02-ChantenayBellevueStAnne.png\'" onmouseout="set_quartier_survole(\'null\');document.getElementById(\'Carte\').src=\'CarteGrande/Carte.png\'" onclick="set_quartier_choisi(\'CBS\')">'+
	
	'<area title="'+arrayQuartiers['DZ']+'"  shape="polygon" coords="4122,303 , 119,306 ,  92,303 , 69,291 , 63,290 , 51,294 , 27,286 , 33,272 , 41,262 , 43,240 , 57,226 , 61,237 , 80,239 , 84,249 , 97,255 , 102,263 , 112,268 , 112,279 , 117,285 , 118,297 , 123,302" target=_blank onmouseover="set_quartier_survole(\'DZ\');document.getElementById(\'Carte\').src=\'CarteGrande/03-Dervalieres.png\'" onmouseout="set_quartier_survole(\'null\');document.getElementById(\'Carte\').src=\'CarteGrande/Carte.png\'" onclick="set_quartier_choisi(\'DZ\')">'+
	
	'<area title="'+arrayQuartiers['null']+'" shape="polygon" coords=" 112,333 , 114,326 , 120,314 , 132,306 , 152,307 , 166,311 , 175,310 , 199,301 , 227,296 , 255,283 , 257,283 , 255,287 , 221,319 , 183,335 , 176,335 , 115,335" class="noborder icolorFF6600" onclick="">'+
	
	'<area title="'+arrayQuartiers['QS']+'" shape="polygon" coords="180,345 , 181,350 , 202,375 , 202,387 , 229,401 , 240,401 , 242,387 , 244,383 , 250,382 , 256,383 , 254,377 , 248,374 , 225,367 , 223,359 , 225,350 , 221,347 , 215,346 , 215,342 , 221,336 , 221,331 , 214,330 , 192,343 , 180,344" target=_blank onmouseover="set_quartier_survole(\'QS\');document.getElementById(\'Carte\').src=\'CarteGrande/11-QuartiersSud.png\'" onmouseout="set_quartier_survole(\'null\');document.getElementById(\'Carte\').src=\'CarteGrande/Carte.png\'" onclick="set_quartier_choisi(\'QS\')">'+
	
	'<area title="'+arrayQuartiers['CV']+'" shape="polygon" coords="126,300 , 123,295 , 119,279 , 131,273 , 146,270 , 151,263 , 164,259 , 181,284 , 187,289 , 189,295 , 167,304 , 145,298 , 130,300 " target=_blank onmouseover="set_quartier_survole(\'CV\');document.getElementById(\'Carte\').src=\'CarteGrande/01-CentreVille.png\'" onmouseout="set_quartier_survole(\'null\');document.getElementById(\'Carte\').src=\'CarteGrande/Carte.png\'" onclick="set_quartier_choisi(\'CV\')">'+
	
	'<area title="'+arrayQuartiers['HPS']+'" shape="polygon" coords="117,275 , 116,267 , 104,259 , 103,254 , 100,251 , 89,246 , 101,233 , 115,232 , 142,213 , 144,201 , 161,187 , 175,186 , 170,199 , 172,214 , 172,220 , 163,232 , 158,237 , 157,244 , 160,255 , 150,258 , 142,266 , 128,268 " target=_blank onmouseover="set_quartier_survole(\'HPS\');document.getElementById(\'Carte\').src=\'CarteGrande/04-HautsStFelix.png\'" onmouseout="set_quartier_survole(\'null\');document.getElementById(\'Carte\').src=\'CarteGrande/Carte.png\'" onclick="set_quartier_choisi(\'HPS\')">'+
	
	'<area title="'+arrayQuartiers['BB']+'" shape="polygon" coords=" 86,244 , 82,236 , 73,232 , 64,232 , 61,224 , 90,208 , 90,204 , 77,189 , 84,181 , 108,167 , 117,174 , 127,174 , 134,181 , 146,181 , 156,186 , 139,199 , 139,211 , 117,227 , 100,228 , 88,241" target=_blank onmouseover="set_quartier_survole(\'BB\');document.getElementById(\'Carte\').src=\'CarteGrande/07-BreilBarberie.png\'" onmouseout="set_quartier_survole(\'null\');document.getElementById(\'Carte\').src=\'CarteGrande/Carte.png\'" onclick="set_quartier_choisi(\'BB\')">'+
	
	'<area title="'+arrayQuartiers['SDM']+'" shape="polygon" coords="197,292 , 194,286 , 177,268 , 164,245 , 165,243 , 177,226 , 177,224 , 175,212 , 212,222 , 242,256 , 250,271 , 240,277 , 230,286 , 205,291 " target=_blank onmouseover="set_quartier_survole(\'SDM\');document.getElementById(\'Carte\').src=\'CarteGrande/05-MalakoffStDonatien.png\'" onmouseout="set_quartier_survole(\'null\');document.getElementById(\'Carte\').src=\'CarteGrande/Carte.png\'" onclick="set_quartier_choisi(\'SDM\')">'+
	
	'<area title="'+arrayQuartiers['DB']+'" shape="polygon" coords="255,271 , 248,256 , 244,250 , 215,220 , 210,217 , 260,154 , 308,120 , 309,135 , 306,140 , 302,146 , 302,156 , 311,161 , 311,169 , 322,187 , 323,199 , 320,213 , 331,229 , 330,239 , 319,246 , 258,270" target=_blank onmouseover="set_quartier_survole(\'DB\');document.getElementById(\'Carte\').src=\'CarteGrande/10-Doulon.png\'" onmouseout="set_quartier_survole(\'null\');document.getElementById(\'Carte\').src=\'CarteGrande/Carte.png\'" onclick="set_quartier_choisi(\'DB\')">'+
	
	'<area title="'+arrayQuartiers['NE']+'" shape="polygon" coords="204,217 , 175,207 , 179,189 , 191,172 , 204,153 , 204,138 , 215,127 , 213,121 , 213,96 , 220,88 , 232,77 , 241,57 , 239,27 , 230,12 , 232,4 , 239,1 , 247,3 , 250,0 , 262,0 , 269,6 , 276,2 , 283,2 , 285,6 , 284,33 , 275,44 , 279,54 , 278,59 , 279,70 , 297,85 , 298,89 , 294,96 , 292,102 , 280,118 , 282,121 , 282,132 , 272,139 , 251,157 , 240,172 , 213,205" target=_blank onmouseover="set_quartier_survole(\'NE\');document.getElementById(\'Carte\').src=\'CarteGrande/09-NantesErdre.png\'" onmouseout="set_quartier_survole(\'null\');document.getElementById(\'Carte\').src=\'CarteGrande/Carte.png\'" onclick="set_quartier_choisi(\'NE\')">'+
	
	'<area title="'+arrayQuartiers['QN']+'" shape="polygon" coords="177,180 , 158,181 , 147,176 , 135,176 , 128,171 , 120,170 , 110,162 , 110,153 , 114,144 , 96,109 , 76,76 , 76,70 , 80,65 , 91,67 , 97,74 , 106,76 , 129,76 , 140,81 , 147,86 , 159,84 , 160,102 , 170,115 , 172,130 , 176,132 , 196,140 , 198,143 , 197,153 , 183,168 , 178,179" target=_blank onmouseover="set_quartier_survole(\'QN\');document.getElementById(\'Carte\').src=\'CarteGrande/08-QuartiersNord.png\'" onmouseout="set_quartier_survole(\'null\');document.getElementById(\'Carte\').src=\'CarteGrande/Carte.png\'" onclick="set_quartier_choisi(\'QN\')">'+
			'</map>';
}
function vider_partie_gauche(){
	var idDiv = document.getElementById("partieGauche");
	idDiv.innerHTML="";
	idDiv.style.height="";
}
function vider_partie_droite(){
	var idDiv = document.getElementById("partieDroite");
	idDiv.innerHTML="";
}
function home_1(){
	vider_partie_gauche();
	vider_partie_droite();
	set_text_partie_gauche_page1();
	set_carte_partie_droite_page1();
}
function set_map_partie_gauche_3(){
	//On remplit la carte de gauche
	var idDiv = document.getElementById("partieGauche");
	idDiv.innerHTML+="<p id='petite_carte' style='margin-top: 70px;' ><img id='carte_petite' style='margin-left: 38px;margin-top:-50px;' usemap='#map' name='img' src='CartePetite/"+quartier_choisi+".png'></p>";
	//idDiv.innerHTML+="<p id='petite_carte'><img style='margin-left: 38px;' src='CartePetite/null.png' usemap='#map' name='img'></p>";
	idDiv.innerHTML+='<map name="map">'+
	
	'<area shape="polygon" coords=" 1,167 , 0,167 , 0,163 , 4,152 , 14,142 , 25,145 , 33,144 , 42,148 , 55,151 , 44.5,163.5 , 25,170 , 9,168"  target=_blank onmouseover="document.getElementById(\'carte_petite\').src=\'CartePetite/CBS.png\'" onmouseout="document.getElementById(\'carte_petite\').src=\'CartePetite/'+quartier_choisi+'\'" onclick="set_quartier_choisi(\'CBS\')">'+
	
	'<area shape="polygon" coords="14,140 , 16,132 , 20,128 , 21,117 , 27,110 , 29,115 , 38,116 , 42,124 , 48,124 , 54,131 , 59,147 , 44,147 , 33,142 , 23,142"target=_blank onmouseover="document.getElementById(\'carte_petite\').src=\'CartePetite/DZ.png\'" onmouseout="document.getElementById(\'carte_petite\').src=\'CartePetite/'+quartier_choisi+'\'" onclick="set_quartier_choisi(\'DZ\')">'+
	
	'<area shape="polygon" coords="55,162 , 57,154 , 68,148 , 82,151 , 109,144 , 124,138 , 108,156 , 89,163 , 63,163" onclick="set_quartier_choisi(\'CV\')">'+
	
	'<area shape="polygon" coords="87,169 , 98,182 , 98,188 , 110,194 , 117,194 , 117,187 , 124,186 , 123,182 , 114,181 , 108,177 , 109,169 , 103,167 , 107,162 , 105,160 , 94,167 , 88,166" target=_blank onmouseover="document.getElementById(\'carte_petite\').src=\'CartePetite/QS.png\'" onmouseout="document.getElementById(\'carte_petite\').src=\'CartePetite/'+quartier_choisi+'\'" onclick="set_quartier_choisi(\'QS\')">'+
	
	'<area shape="polygon" coords="61,146 , 58,135 , 71,131 , 75,127 , 79,126 , 92,143 , 79,148 , 71,145 , 64,145" target=_blank onmouseover="document.getElementById(\'carte_petite\').src=\'CartePetite/CV.png\'" onmouseout="document.getElementById(\'carte_petite\').src=\'CartePetite/'+quartier_choisi+'\'" onclick="set_quartier_choisi(\'CV\')">'+
	
	'<area shape="polygon" coords="57,134 , 56,130 , 51,126 , 48,121 , 44,121 , 48,114 , 57,113 , 70,103 , 69,98 , 78,91 , 85,90 , 82,98 , 84,108 , 76,117 , 77,124 , 69,130 , 63,130 , 58,133" target=_blank onmouseover="document.getElementById(\'carte_petite\').src=\'CartePetite/HPS.png\'" onmouseout="document.getElementById(\'carte_petite\').src=\'CartePetite/'+quartier_choisi+'\'" onclick="set_quartier_choisi(\'HPS\')">'+
	
	'<area shape="polygon" coords="42,117 , 38,113 , 32,114 , 29,109 , 42,104 , 44,99 , 37,91 , 53,82 , 57,85 , 61,85 , 65,88 , 70,88 , 76,91 , 68,96 , 67,103 , 56,111 , 48,111 , 43,117" target=_blank onmouseover="document.getElementById(\'carte_petite\').src=\'CartePetite/BB.png\'" onmouseout="document.getElementById(\'carte_petite\').src=\'CartePetite/'+quartier_choisi+'\'" onclick="set_quartier_choisi(\'BB\')">'+
	
	'<area shape="polygon" coords="96,142 , 85,130 , 80,117 , 87,109 , 84,104 , 90,104 , 103,108 , 118,124 , 121,133 , 111,139" target=_blank onmouseover="document.getElementById(\'carte_petite\').src=\'CartePetite/SDM.png\'" onmouseout="document.getElementById(\'carte_petite\').src=\'CartePetite/'+quartier_choisi+'\'" onclick="set_quartier_choisi(\'SDM\')">'+
	
	'<area shape="polygon" coords="124,131 , 105,106 , 102,106 , 124,76 , 130,72 , 149,58 , 150,59 , 150,64 , 146,74 , 151,79 , 152,84 , 157,92 , 155,105 , 160,110 , 160,116 , 127,130" target=_blank onmouseover="document.getElementById(\'carte_petite\').src=\'CartePetite/DB.png\'" onmouseout="document.getElementById(\'carte_petite\').src=\'CartePetite/'+quartier_choisi+'\'" onclick="set_quartier_choisi(\'DB\')">'+
	
	'<area shape="polygon" coords="100,105 , 85,101 , 87,92 , 98,76 , 98,68 , 104,63 , 103,46 , 112,38 , 116,28 , 116,14 , 112,5 , 114,1 , 119,1 , 118,0 , 127,0 , 130,2 , 137,0 , 138,16 , 133,23 , 136,26 , 135,34 , 146,40 , 142,49 , 136,56 , 137,64 , 125,72 , 117,82 , 102,102" target=_blank onmouseover="document.getElementById(\'carte_petite\').src=\'CartePetite/NE.png\'" onmouseout="document.getElementById(\'carte_petite\').src=\'CartePetite/'+quartier_choisi+'\'" onclick="set_quartier_choisi(\'NE\')">'+
	
	'<area shape="polygon" coords="86,88 , 75,88 , 64,86 , 61,83 , 58,83 , 53,79 , 55,70 , 38,39 , 38,34 , 44,32 , 50,36 , 66,37 , 70,42 , 77,41 , 78,55 , 83,55 , 84,64 , 95,68 , 96,75 , 88,85" target=_blank onmouseover="document.getElementById(\'carte_petite\').src=\'CartePetite/QN.png\'" onmouseout="document.getElementById(\'carte_petite\').src=\'CartePetite/'+quartier_choisi+'\'" onclick="set_quartier_choisi(\'QN\')">'+
	'</map>';
	}
function set_quartier_choisi(val){
	quartier_choisi=val;
	home_3();
}
function set_variable_choisi(val){
	variable_choisi=val;
	home_3();
}
function home_3(){
	set_etat("home_3");
	vider_partie_gauche();
	vider_partie_droite();
	//On remplit la carte de gauche
	var idDiv = document.getElementById("partieGauche");
	
	
	idDiv.innerHTML+="<p class='text-warning lead' style='margin-left: 38px; margin-top: -45px;'>Quartier choisi :</p>";
	idDiv.innerHTML+="<p class='text-warning' style='margin-left: 38px;'>"+arrayQuartiers[quartier_choisi]+"</p>";
	set_map_partie_gauche_3();
	idDiv.innerHTML+="<p id=''><img style='margin-left: 38px;' src='images/home_3/"+variable_choisi+".png'></p>";
	//On remplit le content
	switch (variable_choisi) {
	case "NbEt":
		switch(quartier_choisi){
		case "CV":
			dataviz(1,nombreEtablissementCV,null,300,300);
			break;
		case "CBS":
			dataviz(1,nombreEtablissementCBS,null,300,300);
			break;
		case "DZ":
			dataviz(1,nombreEtablissementDZ,null,300,300);
			break;
		case "HPS":
			dataviz(1,nombreEtablissementHPS,null,300,300);
			break;
		case "SDM":
			dataviz(1,nombreEtablissementSDM,null,300,300);
			break;
		case "BB":
			dataviz(1,nombreEtablissementBB,null,300,300);
			break;
		case "QN":
			dataviz(1,nombreEtablissementQN,null,300,300);
			break;
		case "NE":
			dataviz(1,nombreEtablissementNE,null,300,300);
			break;
		case "DB":
			dataviz(1,nombreEtablissementDB,null,300,300);
			break;
		case "QS":
			dataviz(1,nombreEtablissementQS,null,300,300);
			break;
		default:
			dataviz(1,nombreEtablissementCV,null,300,300);
			break;
		}
		break;
	case "TE":
	switch(quartier_choisi){
		case "CV":
			dataviz(2,RatioNbMediaCV,RatioNbMediaIDN,300,300);
			break;
		case "CBS":
			dataviz(2,RatioNbMediaCBS,RatioNbMediaIDN,300,300);
			break;
		case "DZ":
			dataviz(2,RatioNbMediaDZ,RatioNbMediaIDN,300,300);
			break;
		case "HPS":
			dataviz(2,RatioNbMediaHPS,RatioNbMediaIDN,300,300);
			break;
		case "SDM":
			dataviz(2,RatioNbMediaSDM,RatioNbMediaIDN,300,300);
			break;
		case "BB":
			dataviz(2,RatioNbMediaBB,RatioNbMediaIDN,300,300);
			break;
		case "QN":
			dataviz(2,RatioNbMediaQN,RatioNbMediaIDN,300,300);
			break;
		case "NE":
			dataviz(2,RatioNbMediaNE,RatioNbMediaIDN,300,300);
			break;
		case "DB":
			dataviz(2,RatioNbMediaDB,RatioNbMediaIDN,300,300);
			break;
		case "QS":
			dataviz(2,RatioNbMediaQS,RatioNbMediaIDN,300,300);
			break;
		default:
			dataviz(2,RatioNbMediaCV,RatioNbMediaIDN,300,300);
			break;
		}	
		break;
	case "CA":
		switch(quartier_choisi){
		case "CV":
			dataviz(1,TauxCACV,null,300,300);
			break;
		case "CBS":
			dataviz(1,TauxCACBS,null,300,300);
			break;
		case "DZ":
			dataviz(1,TauxCADZ,null,300,300);
			break;
		case "HPS":
			dataviz(1,TauxCAHPS,null,300,300);
			break;
		case "SDM":
			dataviz(1,TauxCASDM,null,300,300);
			break;
		case "BB":
			dataviz(1,TauxCABB,null,300,300);
			break;
		case "QN":
			dataviz(1,TauxCAQN,null,300,300);
			break;
		case "NE":
			dataviz(1,TauxCANE,null,300,300);
			break;
		case "DB":
			dataviz(1,TauxCADB,null,300,300);
			break;
		case "QS":
			dataviz(1,TauxCAQS,null,300,300);
			break;
		default:
			dataviz(1,TauxCACV,null,300,300);
			break;
		}
		break;
	case "NpEp":
		switch(quartier_choisi){
		case "CV":
			dataviz(1,NbEmpCV,null,300,300);
			break;
		case "CBS":
			dataviz(1,NbEmpCBS,null,300,300);
			break;
		case "DZ":
			dataviz(1,NbEmpDZ,null,300,300);
			break;
		case "HPS":
			dataviz(1,NbEmpHPS,null,300,300);
			break;
		case "SDM":
			dataviz(1,NbEmpSDM,null,300,300);
			break;
		case "BB":
			dataviz(1,NbEmpBB,null,300,300);
			break;
		case "QN":
			dataviz(1,NbEmpQN,null,300,300);
			break;
		case "NE":
			dataviz(1,NbEmpNE,null,300,300);
			break;
		case "DB":
			dataviz(1,NbEmpDB,null,300,300);
			break;
		case "QS":
			dataviz(1,NbEmpQS,null,300,300);
			break;
		default:
			dataviz(1,TauxCACV,null,300,300);
			break;
		}
		break;

	default:
		dataviz(1,nombreEtablissementCV,null,300,300);
		break;
	}
	}
function projet(){
	vider_partie_gauche();
	vider_partie_droite();
	// On charge le content de droite
	var idDiv = document.getElementById("partieDroite");
	idDiv.innerHTML="<div id='texte_partie_droite' class='texte_partie_droite' style='padding-left:26px;padding-right:20px ; padding-top:10em;'>";
	var idDiv = document.getElementById("texte_partie_droite");
	idDiv.innerHTML+="<p class='text-warning '>Présentation du projet</p>";
	idDiv.innerHTML+="<p class=''>Bienvenue sur cette visualisation de données interactive développée et mise en forme par une équipe de 6 étudiants de Polytech, AGR et SciencesCom : trois écoles renommées dans les domaines respectifs que sont l’informatique, le graphisme et la communication.</p>"+
	"<p>Cette réalisation s’inscrit dans le cadre du HybLab, vaste projet de datajournalisme mené par Ouest MediaLab. Le sujet traité ici est par ailleurs appuyé par le magazine Com&Médias.</p>";
	idDiv.innerHTML+="<p><br/></p>";
	idDiv.innerHTML+="<h1 class='titre'>« L’ile de la création » : réalité ou fiction ?</h1>";
	idDiv.innerHTML+="<p><img src='images/photoArticle.png'/></p>";
	idDiv.innerHTML+="<p><br/>A forte influence décalée et de nature éclectique, le quartier de l’île de Nantes est souvent considéré comme “l’île de la création”. École d’Architecture et de Design, cabinets d’architectes, studios graphiques, agences de communications... Toutes ces structures liées à la création présentes sur le territoire Ile de Nantes contribuent au développement de cette image."+
	"Mais le quartier de l’île de Nantes est-il en phase avec cette idée que l’on se fait de lui ? Est-il LE quartier de la création de la métropole Nantaise ?</p>";
	idDiv.innerHTML+="<h1 class='interTitre'>L'Hypercentre, le vrai quartier de la création ?</h1>";
	idDiv.innerHTML+="<p>Le premier élément à remarquer est celui qu’il existe deux fois plus d’établissements communicants dans le centre-ville que sur l’île de Nantes. Cœur historique et commercial de la cité, l’hypercentre attire aussi les entreprises créatives. Le quartier de la rue des Olivettes (à proximité de l’Hotel-Dieu) concentre par exemple de nombreuse agences de communication."+
	"L’île de Nantes demeure cependant le deuxième secteur de la métropole regroupant le plus de ces établissements, répartis en 80% de prestataires de communication, les 20% restant étant les médias présents sur l’Ile de Nantes. Ce contraste s’explique par le nombre élevé de studios graphiques et d’agences installées sur le territoire."+
	"Cette différence notable avec le Centre Ville nantais se retrouve également au niveau du nombre de collaborateurs. En effets, ils sont quatre fois moins nombreux dans l’Hyper-Centre que sur l’île de Nantes."+
	"Tous ces éléments démontrent que, même si l’Île de Nantes demeure une place forte de la communication à Nantes, ce n’est pas le territoire central dédié à la création dans la Cité des Ducs. D’autres quartiers revendiquent une forte influence créative.</p>";
	idDiv.innerHTML+="<p><img src='images/photoArticle2.png'/></p>";
	idDiv.innerHTML+="<p><br/></p>";
	idDiv.innerHTML+="<h1 class='interTitre'>L'Hyper-Centre sera-t-il détrôné par l'île à l'Horizon 2020 ?</h1>";
	idDiv.innerHTML+="<p>Depuis quelques années, les lancements de nouveaux projets se sont multipliés et ont tendance à bouleverser l’ordre établi. L’île de Nantes est-elle en fait en train de devenir le principal quartier créatif ? Notons que même si l’Ile n’est pas, à l’heure actuelle, le quartier qui concentre le plus de communiquants, elle le devient au regard des données relatives au nombre d’établissements tous secteurs confondus. En effet, 15% des établissements tous secteurs confondus sont des établissements appartenant au domaine de la communication. Une proportion près de deux fois supérieur que celle relevée dans le centre-ville. </p>";
	idDiv.innerHTML+="<p>En somme, si l’île de Nantes attire les regards des communicants, ce n’est sans doute pas pour ce qu’elle est aujourd’hui, mais plutôt pour ce qu’elle sera demain. L’école de la communication SciencesCom, Télénantes, Loire Atlantique Tourisme ou encore les écoles ESMA ou CinéCréatis on en commun la volonté de s'implanter, dans un avenir proche, dans le quartier de la création. </p>";
	idDiv.innerHTML+="<p>Le fait que l’île ne se démarque pas, à première vue, comme étant le principal quartier de la communication, s’explique par le fait que c’est l'un des plus petits de Nantes. Pourtant, elle reste le deuxième pôle le plus “communicationnel” de Nantes, et deviendra sans doute le coeur innovant et créatif de la cité des Ducs à l’horizon 2020.</p>";
	idDiv.innerHTML+="</div>";
	// on charge le content de gauche
	var idDiv = document.getElementById("partieGauche");
	idDiv.style.height="390px";
	idDiv.innerHTML+="<p class='text-warning lead'>L'EQUIPE</p>";
	//Journalistes
	idDiv.innerHTML+='<div class="row-fluid">';
		idDiv.innerHTML+="<div class='span3'><img src='images/picto_projet/Journalistes.png'></div>"; 
		idDiv.innerHTML+="<div class='span8'><blockquote>" +
			"<p>Les journalistes</p>" +
			"  <small>Maxime Chabroud</small>" +
			"  <small>Jérémy Merlet</small>" +
			"			</blockquote></div>";
		idDiv.innerHTML+='</div>';
	//Dev
		idDiv.innerHTML+='<div class="row-fluid">';
		idDiv.innerHTML+="<div class='span3'><img src='images/picto_projet/Designers.png'></div>"; 
		idDiv.innerHTML+="<div class='span8'><blockquote>" +
			"<p>Les développeurs</p>" +
			"  <small><a href='http://www.doyoubuzz.com/edem-adjamagbo/'>Edem Adjamagbo</a></small>" +
			"  <small>Pierre-Yves Hervo</small>" +
			"			</blockquote></div>";
		idDiv.innerHTML+='</div>';
	//Design
		idDiv.innerHTML+='<div class="row-fluid">';
		idDiv.innerHTML+="<div class='span3'><img src='images/picto_projet/Dev.png'></div>"; 
		idDiv.innerHTML+="<div class='span8'><blockquote>" +
			"<p>Les designers</p>" +
			"  <small>Pauline Decker</small>" +
			"  <small>Nicolas Galkowski</small>" +
			"			</blockquote></div>";
		idDiv.innerHTML+='</div>';
}

function interview(){
	vider_partie_gauche();
	vider_partie_droite();
	var idDiv = document.getElementById("partieGauche");
	idDiv.innerHTML="<div id='titre_partie_gauche' class='titre_partie_gauche'>";
	idDiv.innerHTML+="<p class='text-warning texte_partie_gauche'>L’avis des Expert(e)s ! </p>";
	idDiv.innerHTML+="<p class=''><strong>Gina Di Orio</strong>, Rédactrice en Chef du magazine <strong>Idile</strong> et <strong>Elizabeth Clément</strong>, Directrice Générale de <strong>TéléNantes</strong>, sont toutes les deux concernées par le territoire de l’île de Nantes.</p><p> Elles nous livrent leurs impressions quand à la renommée de ce territoire en matière d’implantations médiatiques.</p>";
	idDiv.innerHTML+="<p class=''></p>";
	idDiv.innerHTML+="</div>";
	var idDiv = document.getElementById("partieDroite");
	idDiv.innerHTML="<div id='texte_partie_droite' class='texte_partie_droite' style='padding-left:26px;padding-right:20px;padding-top:10em;'>"
	var idDiv = document.getElementById("texte_partie_droite");
	idDiv.innerHTML+="<p class=''><img src='images/Picto_interview.png'/></p><br/><br/><blockquote><small>Gina Di Orio, Rédactrice en chef du magazine Idile</small></blockquote>";
	idDiv.innerHTML+="<p><b>Qu&#39; est ce qui vous a poussé à installer vos locaux sur l'île de Nantes&#63;</b><p>";
	idDiv.innerHTML+="<p><em>A l&#39;origine, nous sommes habitants de l&#39;île de Nantes. Cela fait maintenant deux mois que nous avons installés notre activité sur l’Ile. Nous ne voulions nous implanter que sur ce territoire car il nous parait cohérent avec notre ligne éditoriale. En effet, nous avons développé un magazine avec pour sujet l&#39;insularité. L&#39;Ile de Nantes est donc au coeur de notre activité, c&#39;est notre ligne de mire.<em></p>";
	idDiv.innerHTML+="<p><b>Considérez-vous l&#39;île de Nantes comme LE quartier de la communication, des médias et de la création à Nantes ?</b></p>";
	idDiv.innerHTML+="<p><em>Je ne dirais pas que c’est LE quartier de la communication et des médias. Je dirais plus que c’est le quartier qui développe la majorité des industries culturelles et créatives de Nantes. </em></p>";
	idDiv.innerHTML+="<p><b>Comment appréhendez-vous l'implantation prochaine d'acteurs de la com et des médias (TéléNantes,…) sur l'île de Nantes ? </b></p>";
	idDiv.innerHTML+="<p><em>L’Île étant encore en mutation, c’est un plus que ce type d’acteurs s’implantent sur ce territoire. Cela va permettre de créer de nouveaux projet, de croiser nos idées. Je pense que cette proximité sera réellement un plus pour notre activité.</em></p>";
	idDiv.innerHTML+="<p></br></p>";
	idDiv.innerHTML+="<p class=''><img src='images/Picto_interview.png'/></p><br/><br/><blockquote><small>Elizabeth Clément, Directrice de TéléNantes</small></blockquote>";
	idDiv.innerHTML+="<p><b>Qu'est ce qui vous a poussé à déménager de la Halle Alstom en 2011 pour s'installer dans vos locaux actuels ?</b></p>";
	idDiv.innerHTML+="<p><em>Deux éléments ont contribué à ce déménagement. L'évolution de la halle vers le quartier de la création (nous avons été obligés de quitter les lieux)  ajouté au fait de la fusion des chaînes Nantes 7 et Télénantes nous ont poussé à nous installer dans nos locaux actuels (ndlr, TéléNantes est actuellement situé rue Voltaire).</em></p>";
	idDiv.innerHTML+="<p><b>Considérez-vous l'île de Nantes comme LE quartier de la communication et de la création à Nantes ?</b></p>";
	idDiv.innerHTML+="<p><em>L’île de Nantes est un quartier important dans le domaine de la communication et des médias mais il n’est pas le seul. Il y a beaucoup d’autres points de concentration dans la métropole.</em></p>";
	idDiv.innerHTML+="<p><b>Qu'est ce qui vous a poussé à entreprendre le déménagement futur de votre chaine sur l'île de Nantes ?</b></p>";
	idDiv.innerHTML+="<p><em>Ce futur déménagement s’inscrit dans le projet du Mediacampus qui prévoit l'implantation de Télénantes dans les mêmes locaux que Sciences Com, l’école de la communication et des Médias. Au delà de l'opportunité, c'est réellement une chance d'être dans un lieu ou les contacts peuvent développer des actions communes dans le secteurs des médias.</em></p>";
	idDiv.innerHTML+="</div>";
}

/*fonction pour afficher les dataviz. Prend en parametre le nombre de dataviz, le jeu de donnees, la taille des dataviz
(largeur ou hauteur totale de la div, il faut que ce soit un carre)*/
function dataviz(nbDataviz,JSON1,JSON2,tailleDiv1,tailleDiv2){

	var idDiv = document.getElementById("partieDroite");
	var idDiv = document.getElementById("partieDroite");
	idDiv.innerHTML+="<div class='row-fluid' >" +
			"				<div class='span6' id='left'>" +
					
			"				</div>" +
			"				<div class='span6' id='right'>" +
					
			"				</div>" +
			"	</div>";
	idDiv.innerHTML+="<div class='row-fluid' >" +
	"				<div class='span6' id='left2'>" +
			
	"				</div>" +
	"				<div class='span6' id='right2'>" +
			
	"				</div>" +
	"	</div>";
	idDiv.innerHTML+="<div class='row-fluid' style='text-align: right;' >" +
	"				<div class='span11' id='bottomTexte'>" +
			
	"				</div>" +
	
	"	</div>";
	var left = document.getElementById("left");
	var right = document.getElementById("right");
	var left2 = document.getElementById("left2");
	var right2 = document.getElementById("right2");
	var bottomTexte = document.getElementById("bottomTexte");
	if(nbDataviz==1){
		left.innerHTML+="<div id='holderUnique'></div>";
		right.innerHTML+="<div class='texteDataviz'><p>"+JSON1[0].description+"</p></div>";
		left2.innerHTML+="<div class='textSousHorloge1unique'><p><img src='images/DATAVIS_CarreLegende1.png'/>"+"<span>* "+arrayQuartiers[quartier_choisi]+"</span></p><p><img src='images/DATAVIS_CarreLegende2.png'/>* IDN</p></div>";
		draw(JSON1,"holderUnique",tailleDiv1);
	}else{
		left.innerHTML+="<div id='holder'></div>";
		right.innerHTML+="<div id='holder2'></div>";
		left2.innerHTML+="<div class='textSousHorloge1'><p><img src='images/DATAVIS_CarreLegende1.png'/>"+JSON1[0].val+"% de médias</p><p><img src='images/DATAVIS_CarreLegende2.png'/>"+JSON1[1].val+"% de communicants</p></div>";
		right2.innerHTML+="<div class='textSousHorloge2'><p><img src='images/DATAVIS_CarreLegende3.png'/>"+JSON2[0].val+"% de médias</p><p><img src='images/DATAVIS_CarreLegende4.png'/>"+JSON2[1].val+"% de communicants</p></div>";
		left2.innerHTML+="<div class='textExplicatif1' style=\"width:200px\"><p>Quartier "+arrayQuartiers[quartier_choisi]+"</p></div>";
		right2.innerHTML+="<div class='textExplicatif2' style=\"width:150px\"><p>île de Nantes</p></div>";
		draw(JSON1,"holder",tailleDiv1);
		draw(JSON2,"holder2",tailleDiv2);
	}
	bottomTexte.innerHTML+="<div class='menuIntegre'>"+
	"<span class='elementmenu'><a onclick='set_variable_choisi(\"NbEt\")'><img style='float: right;' src='images/Image-NbEtablissement.png'/></a></span>"+
	"<span class='elementmenu'><a onclick='set_variable_choisi(\"TE\")'><img style='float: right;' src='images/Image-TypeEtablissement.png'/></a></span>"+
	"<span class='elementmenu'><a onclick='set_variable_choisi(\"CA\")'><img style='float: right;' src='images/Image-ChiffreAffaire.png'/></a></span>"+
	"<span class='elementmenu'><a onclick='set_variable_choisi(\"NpEp\")'><img style='float: right;' src='images/Image-NbEmployes.png'/></a></span>"+
	"<p style='margin-left:-300px;padding-top:50px; font-size:10px;'>*Sources utilisées pour la Datavisualisation : Samoa / Insee / Com&Média</p>"+

	"</div>";
//	var idDiv = document.getElementById("partieDroite");
//	idDiv.innerHTML+=
}
