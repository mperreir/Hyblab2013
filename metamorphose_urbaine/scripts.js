//SECTION 3
function load_graph_section3(prefix,rep,extention){
	 delete_graph_captions();
	$("#graph1").empty().css("display","none");
	$("#graph1").fadeIn("3500").append('<img src="images/section3/'+rep+'/'+prefix+'20032006.'+extention+'?reload=<?=time();?>" alt="">');
	$("#graph1_caption").append('<h4><a style="cursor: pointer;" onclick="load_graph_section3_by_date(\'20032006\')">2003-2006</a></h4>');
	
	$("#graph2").empty().css("display","none");
	$("#graph2").fadeIn("4000").append('<img src="images/section3/'+rep+'/'+prefix+'20072010.'+extention+'?reload=<?=time();?>" alt="">');
	$("#graph2_caption").append('<h4><a style="cursor: pointer;" onclick="load_graph_section3_by_date(\'20072010\')">2007-2010</a></h4>');
	
	$("#graph3").empty().css("display","none");
	$("#graph3").fadeIn("4500").append('<img src="images/section3/'+rep+'/'+prefix+'20112014.'+extention+'?reload=<?=time();?>" alt="">');
	$("#graph3_caption").append('<h4><a style="cursor: pointer;" onclick="load_graph_section3_by_date(\'20112014\')">2011-2014</a></h4>');
	
	$("#graph4").empty().css("display","none");
	$("#graph4").fadeIn("5000").append('<img src="images/section3/'+rep+'/'+prefix+'2015.'+extention+'?reload=<?=time();?>" alt="">');
	$("#graph4_caption").append('<h4><a style="cursor: pointer;" onclick="load_graph_section3_by_date(\'2015\')">2015</a></h4>');
	
}
function delete_graph_captions(){
	$("#graph1_caption").empty();
	$("#graph2_caption").empty();
	$("#graph3_caption").empty();
	$("#graph4_caption").empty();
}
function load_graph_section3_by_date(date){
	delete_graph_captions();
	$("#graph1").empty().css("display","none");
	$("#graph1").fadeIn("3500").append('<img src="images/section3/survols/public/public'+date+'.png?reload=<?=time();?>" alt="">');
	$("#graph1_caption").append('<h4><a style="cursor: pointer;" onclick="click_public()">Equipements public</a></h4>');
	
	$("#graph2").empty().css("display","none");
	$("#graph2").fadeIn("4000").append('<img src="images/section3/survols/eco/eco'+date+'.png?reload=<?=time();?>" alt="">');
	$("#graph2_caption").append('<h4><a style="cursor: pointer;" onclick="click_eco()">Activités économiques</a></h4>');
	
	$("#graph3").empty().css("display","none");
	$("#graph3").fadeIn("4500").append('<img src="images/section3/survols/log/log'+date+'.png?reload=<?=time();?>" alt="">');
	$("#graph3_caption").append('<h4><a style="cursor: pointer;" onclick="click_log()">Logements</a></h4>');
	
	$("#graph4").empty().css("display","none");
	$("#graph4").fadeIn("5000").append('<img src="images/section3/survols/mixte/mixte'+date+'.png?reload=<?=time();?>" alt="">');
	$("#graph4_caption").append('<h4><a style="cursor: pointer;" onclick="click_mixte()">Mixtes</a></h4>');
}

function click_public(){
	// Public
	document.getElementById("btn2").src='images/section3/boutonmixtesurvol.png';
	document.getElementById("btn3").src='images/section3/boutonlogsurvol.png';
	document.getElementById("btn4").src='images/section3/boutonecosurvol.png';
	load_graph_section3("public","survols/public","png");
}
function click_mixte(){
	// logement
	document.getElementById("btn1").src='images/section3/boutonpublicsurvol.png';
	document.getElementById("btn3").src='images/section3/boutonlogsurvol.png';
	document.getElementById("btn4").src='images/section3/boutonecosurvol.png';
	load_graph_section3("mixte","survols/mixte","png");
}
function click_log(){
	// mixte
	document.getElementById("btn1").src='images/section3/boutonpublicsurvol.png';
	document.getElementById("btn2").src='images/section3/boutonmixtesurvol.png';
	document.getElementById("btn4").src='images/section3/boutonecosurvol.png';
	load_graph_section3("log","survols/log","png");
}
function click_eco(){
	// activité eco
	document.getElementById("btn1").src='images/section3/boutonpublicsurvol.png';
	document.getElementById("btn2").src='images/section3/boutonmixtesurvol.png';
	document.getElementById("btn3").src='images/section3/boutonlogsurvol.png';
	load_graph_section3("eco","survols/eco","png");
}
function retablir_bureau_logement_autre(){
	document.getElementById("btn1").src='images/section3/boutonpublic.png';
	document.getElementById("btn2").src='images/section3/boutonmixte.png';
	document.getElementById("btn3").src='images/section3/boutonlog.png';
	document.getElementById("btn4").src='images/section3/boutoneco.png';
	load_graph_section3("graph","gifs","gif");
}
/*function disposition_section3_date(){
	$("#section3").append('<div class="row-fluid"><div =id="innerSection"><div class="span1"></div><div class="span10 subtitle">III. EVOLUTION DE LA TYPOLOGIE DES BATIMENTS DE L\'ÎLE</div><div class="span1"></div></div></div>');
	$("#section3").append("<div class=\"row-fluid\">" +
			"<div class=\"span1\"></div>" +
			"<div class='span3' style='text-align: center;'>" +
			"<div class='row-fluid'>" +
			"<div =id='innerSection'>" +
			"<div class='span12'>Texte de présentation Texte de " +
			"présentation Texte de présentation Texte de présentation Texte " +
			"de présentation Texte de présentation Texte de présentation " +
			"Texte de présentation Texte de présentation</div></div></div>" +
			"<table style='width: 100%;'>" +
			"<tr>" +
			"<td><div class='span3'> " +
			"<button class='btn btnTypeImmeuble' id='btn1' " +
			"onmouseover='cahcer_logement_autre();'	onmouseout='retablir_bureau_logement_autre();'" +
			"style='background-image: url('images/section3/survol-bureau_03.png');'>" +
			"</button></div></td><td><div class='span3'>" +
			"<button class='btn btnTypeImmeuble' id='btn2' " +
			"onmouseover='cahcer_bureau_autre();' onmouseout='retablir_bureau_logement_autre();' style='background-image: url('images/section3/survol-logement_05.png');'>" +
			"<!-- 									<img alt='' src='images/section3/survol-logement_05.png'> -->" +
			"</button>" +
			"</div></td>" +
			"</tr>" +
			"<tr>" +
			"<td><div class='span3'>" +
			"<button class='btn btnTypeImmeuble' id='btn3' onmouseover='cahcer_bureau_logement();' onmouseout='retablir_bureau_logement_autre();'" +
			"style='background-image: url('images/section3/survol-autre_07.png');'>" +
			"<!-- 									<img alt='' src='images/section3/survol-autre_07.png'> -->" +
			"</button>" +
			"</div></td>" +
			"<td><div class='span3'>" +
			"<button class='btn btnTypeImmeuble' id='btn'" +
			"onmouseover='cahcer_bureau_logement2();'" +
			"onmouseout='retablir_bureau_logement_autre();'" +
			"style='background-image: url('images/section3/survol-autre_07.png');'>" +
			"<!-- 									<img alt='' src='images/section3/survol-autre_07.png'> -->" +
			"</button></div></td></tr></table>" +
			"<h4><a style='cursor: pointer;'onclick='load_graph_section3_by_date(\"20032006\")'>2003-2006</a>" +
			"
					</h4>
					<h4>
						<a style='cursor: pointer;'
							onclick='load_graph_section3_by_date('20072010')'>2007-2010</a>
					</h4>
					<h4>
						<a style='cursor: pointer;'
							onclick='load_graph_section3_by_date('20112014')'>2011-2014</a>
					</h4>
					<h4>
						<a style='cursor: pointer;'
							onclick='load_graph_section3_by_date('2015')'>2015</a>
					</h4>
				</div>

				<div class='span6'>
					<div class='row-fluid'>
						<ul class='thumbnails'>
							<li class='span6'>
								<div class='thumbnail'>
									<a class='thumbnail'>
										<div id='graph1' class='graph_section3'></div> </a>
									<div id='graph1_caption' class='caption' style='text-align: center'>
										
									</div>
								</div>
							</li>
							<li class='span6'>
								<div class='thumbnail'>
									<a class='thumbnail'>
										<div id='graph2' class='graph_section3'>
											<img src='images/section3/gifs/graph20072010.gif' alt=''>
										</div> </a>
									<div id='graph2_caption' class='caption' style='text-align: center'>
										
									</div>
								</div></li>
						</ul>
						<ul class='thumbnails'>
							<li class='span6'><div class='thumbnail'>
									<a class='thumbnail'><div id='graph3'
											class='graph_section3'>
											<img src='images/section3/gifs/graph20112014.gif' alt=''>
										</div> </a>
									<div id='graph3_caption' class='caption' style='text-align: center'>
										
									</div>
								</div></li>
							<li class='span6'><div class='thumbnail'>
									<a class='thumbnail'>
										<div id='graph4' class='graph_section3'>
											<img src='images/section3/gifs/graph2015.gif' alt=''>
										</div> </a>
									<div id='graph4_caption' class=\'caption' style='text-align: center'>
										
									</div>
								</div></li>
						</ul>
					</div>
				</div>
			</div>");
}*/