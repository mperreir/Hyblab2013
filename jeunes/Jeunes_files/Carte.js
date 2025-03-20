i// recupere les donnée est affiche le quartier ainsi que l'inbulle pour la carte en pourcentage
function getCoordoneesPourcent(event) {
	
	var quartier;
	var sourisX = event.clientX;
	  var sourisY = event.clientY;
	  // permet de connaitre la position du scroll
	  var scroll= Array((document.documentElement && document.documentElement.scrollLeft) || window.pageXOffset || self.pageXOffset || document.body.scrollLeft,(document.documentElement && document.documentElement.scrollTop) || window.pageYOffset || self.pageYOffset || document.body.scrollTop);
	  // on rajoute la valeur du scroll car le event.clientY renvoi la coordonée par rapport au coin en haut à gauche de l'écran et non d ela fenetre
	  sourisY+=scroll[1];
	  sourisX+=scroll[0];
	  var obj=document.getElementById('imagecarte1');
	 // var x= (sourisX-z);
//	  var y=(sourisY-a);
	  var curleft = obj.offsetLeft || 0;
      var curtop = obj.offsetTop || 0;
      while (obj = obj.offsetParent) {
              curleft += obj.offsetLeft;
              curtop += obj.offsetTop;
      }
      var x=sourisX-curleft;
      var y=sourisY-curtop;
      var image=document.getElementById("imagecarte1");
      
      if ((x> 469 && x<576 && y>424 && y<492 )||(x> 509 && x<539 && y>409 && y<426 )) {
		  image.setAttribute("src", "image/Pourcentage/sud-sans.png");
		  quartier="SUD";
	// quartier ile de nantes
	  }else if ((x> 600 && x<664 && y>183 && y<331)||(x> 576 && x<600 && y>202 && y<345)||(x> 555 && x<575 && y>230 && y<354)||(x> 540 && x<564 && y>271 && y<305)||(x> 518 && x<528 && y>279 && y<288)) {
		  image.setAttribute("src", "image/Pourcentage/doulon-sans.png");
		  quartier="doulon";
	  }else if ((x> 398 && x<417 && y>408 && y<419)||(x> 416 && x<472 && y>397 && y<418)||(x> 418 && x<427 && y>397 && y<418)||(x> 429 && x<469 && y>388 && y<394)||(x> 429 && x<469 && y>388 && y<394)||(x> 478 && x<542 && y>385 && y<400)||(x> 540 && x<578 && y>368 && y<391)) {
		  image.setAttribute("src", "image/Pourcentage/ile-sans.png");
		  quartier="ile";
	  }else if ((x> 305 && x<342 && y>367 && y<384)||(x> 228 && x<405 && y>382 && y<456)||(x> 281 && x<340 && y>363 && y<343)||(x> 341 && x<371 && y>371 && y<433)||(x> 397 && x<412 && y>386 && y<400)||(x> 412 && x<420 && y>382 && y<388)||(x> 370 && x<400 && y>379 && y<421)) {
		  image.setAttribute("src", "image/Pourcentage/bellevue-sans.png");
		  quartier="bellevue";
	  }else if ((x> 327 && x<378 && y>323 && y<373)||(x> 383 && x<415 && y>323 && y<371)||(x> 320 && x<377 && y>299 && y<321)) {
		  image.setAttribute("src", "image/Pourcentage/derv-sans.png");
		  quartier="derv";
	  }else if ((x> 413 && x<445 && y>345 && y<377)||(x> 442 && x<462 && y>336 && y<379)||(x> 460 && x<485 && y>336 && y<378)||(x> 482 && x<500 && y>355 && y<376)) {
		  image.setAttribute("src", "image/Pourcentage/centre-sans.png");
		  quartier="centre";
	  }else if ((x> 351 && x<391 && y>234 && y<303)||(x> 375 && x<390 && y>366 && y<315)||(x> 411 && x<444 && y>238 && y<287)||(x> 440 && x<459 && y>244 && y<257)) {
		  image.setAttribute("src", "image/Pourcentage/breil-sans.png");
		  quartier="breil";
	  }else if ((x> 461 && x<481 && y>249 && y<257)||(x> 440 && x<481 && y>261 && y<278)||(x> 443 && x<472 && y>280 && y<301)||(x> 396 && x<460 && y>301 && y<317)||(x> 404 && x<470 && y>318 && y<332)) {
		  image.setAttribute("src", "image/Pourcentage/hauts-sans.png");
		  quartier="hauts";
	  }else if ((x> 369 && x<506 && y>126 && y<216)||(x> 410 && x<487 && y>208 && y<243)||(x> 428 && x<487 && y>238 && y<250)||(x> 477 && x<501 && y>165 && y<228)) {
		  image.setAttribute("src", "image/Pourcentage/nord-sans.png");
		  quartier="nord";
	  }else if ((x> 503 && x<596 && y>52 && y<197)||(x> 508 && x<577 && y>198 && y<213)||(x> 500 && x<543 && y>227 && y<245)||(x> 486 && x<526 && y>246 && y<267)||(x> 480 && x<516 && y>268 && y<280)) {
		  image.setAttribute("src", "image/Pourcentage/erdre-sans.png");
		  quartier="erdre";
	  }else if ((x> 483 && x<505 && y>282 && y<285)||(x> 479 && x<527 && y>290 && y<300)||(x> 470 && x<544 && y>304 && y<325)||(x> 477 && x<558 && y>330 && y<343)||(x> 498 && x<562 && y>348 && y<354)) {
		  image.setAttribute("src", "image/Pourcentage/malakoff-sans.png");
		  quartier="malakoff";
	  }else{
		  image.setAttribute("src", "image/Pourcentage/vide.png");
		  quartier="";
		  
	  }
      affichebullequartier(quartier,event,scroll,0);
}

function affichebullequartier(quartier, event, scroll,glob){
	var sourisX = event.clientX;
	 var sourisY = event.clientY;
	 sourisY+=scroll[1];
	 sourisX+=scroll[0];
	
	 if (quartier!="") { 
		 if (glob==0) {
			 	cacherdiv();
			 	document.getElementById(quartier).style.display = "block";
				document.getElementById(quartier).style.marginTop=(sourisY+5)+"px";
				document.getElementById(quartier).style.marginLeft=(sourisX+5)+"px";
		 }else {
			 	cacherdivVolume();
			 	document.getElementById(quartier+"Volume").style.display = "block";
				document.getElementById(quartier+"Volume").style.marginTop=(sourisY+5)+"px";
				document.getElementById(quartier+"Volume").style.marginLeft=(sourisX+5)+"px";
		 }

	}else{
		cacherdiv();
		cacherdivVolume();
	}
	
	
}
function cacherdiv(){
	//var tab=Array('malakoff','erdre','nord','breil','centre','derv','bellevue','ile','doulon','sud');
	
		if (document.getElementById("malakoff").style.display != "none"){
			document.getElementById("malakoff").style.display = "none";
		}
		if (document.getElementById("erdre").style.display != "none"){
			document.getElementById("erdre").style.display = "none";
		}
		if (document.getElementById("nord").style.display != "none"){
			document.getElementById("nord").style.display = "none";
		}
		if (document.getElementById("breil").style.display != "none"){
			document.getElementById("breil").style.display = "none";
		}
		if (document.getElementById("centre").style.display != "none"){
			document.getElementById("centre").style.display = "none";
		}
		if (document.getElementById("derv").style.display != "none"){
			document.getElementById("derv").style.display = "none";
		}
		if (document.getElementById("bellevue").style.display != "none"){
			document.getElementById("bellevue").style.display = "none";
		}
		if (document.getElementById("ile").style.display != "none"){
			document.getElementById("ile").style.display = "none";
		}
		if (document.getElementById("doulon").style.display != "none"){
			document.getElementById("doulon").style.display = "none";
		}
		if (document.getElementById("SUD").style.display != "none"){
			document.getElementById("SUD").style.display = "none";
		}
		if (document.getElementById("hauts").style.display != "none"){
			document.getElementById("hauts").style.display = "none";
		}
		
	
	
}
function cacherdivVolume(){
	//var tab=Array('malakoff','erdre','nord','breil','centre','derv','bellevue','ile','doulon','sud');
	
		if (document.getElementById("malakoffVolume").style.display != "none"){
			document.getElementById("malakoffVolume").style.display = "none";
		}
		if (document.getElementById("erdreVolume").style.display != "none"){
			document.getElementById("erdreVolume").style.display = "none";
		}
		if (document.getElementById("nordVolume").style.display != "none"){
			document.getElementById("nordVolume").style.display = "none";
		}
		if (document.getElementById("breilVolume").style.display != "none"){
			document.getElementById("breilVolume").style.display = "none";
		}
		if (document.getElementById("centreVolume").style.display != "none"){
			document.getElementById("centreVolume").style.display = "none";
		}
		if (document.getElementById("dervVolume").style.display != "none"){
			document.getElementById("dervVolume").style.display = "none";
		}
		if (document.getElementById("bellevueVolume").style.display != "none"){
			document.getElementById("bellevueVolume").style.display = "none";
		}
		if (document.getElementById("ileVolume").style.display != "none"){
			document.getElementById("ileVolume").style.display = "none";
		}
		if (document.getElementById("doulonVolume").style.display != "none"){
			document.getElementById("doulonVolume").style.display = "none";
		}
		if (document.getElementById("SUDVolume").style.display != "none"){
			document.getElementById("SUDVolume").style.display = "none";
		}
		if (document.getElementById("hautsVolume").style.display != "none"){
			document.getElementById("hautsVolume").style.display = "none";
		}
		
	
	
}

// recupere les donnée est affiche le quartier ainsi que l'inbulle pour la carte en volume
function getCoordoneesVol(event) {
	var sourisX = event.clientX;
	  var sourisY = event.clientY;
	  // permet de connaitre la position du scroll
	  var scroll= Array((document.documentElement && document.documentElement.scrollLeft) || window.pageXOffset || self.pageXOffset || document.body.scrollLeft,(document.documentElement && document.documentElement.scrollTop) || window.pageYOffset || self.pageYOffset || document.body.scrollTop);
	  // on rajoute la valeur du scroll car le event.clientY renvoi la coordonée par rapport au coin en haut à gauche de l'écran et non d ela fenetre
	  sourisY+=scroll[1];
	  sourisX+=scroll[0];
	  var obj=document.getElementById('imagecarte2');
	 // var x= (sourisX-z);
//	  var y=(sourisY-a);
	  var curleft = obj.offsetLeft || 0;
      var curtop = obj.offsetTop || 0;
      while (obj = obj.offsetParent) {
              curleft += obj.offsetLeft;
              curtop += obj.offsetTop;
      }
      var x=sourisX-curleft;
      var y=sourisY-curtop;
      var image=document.getElementById("imagecarte2");
      var quartier;
      if ((x> 469 && x<576 && y>424 && y<492 )||(x> 509 && x<539 && y>409 && y<426 )) {
		  image.setAttribute("src", "image/Volume/sud-sans.png");
		  quartier="SUD";
	// quartier ile de nantes
	  }else if ((x> 600 && x<664 && y>183 && y<331)||(x> 576 && x<600 && y>202 && y<345)||(x> 555 && x<575 && y>230 && y<354)||(x> 540 && x<564 && y>271 && y<305)||(x> 518 && x<528 && y>279 && y<288)) {
		  image.setAttribute("src", "image/Volume/doulon-sans.png");
		  quartier="doulon";
	  }else if ((x> 398 && x<417 && y>408 && y<419)||(x> 416 && x<472 && y>397 && y<418)||(x> 418 && x<427 && y>397 && y<418)||(x> 429 && x<469 && y>388 && y<394)||(x> 429 && x<469 && y>388 && y<394)||(x> 478 && x<542 && y>385 && y<400)||(x> 540 && x<578 && y>368 && y<391)) {
		  image.setAttribute("src", "image/Volume/ile-sans.png");
		  quartier="ile";
	  }else if ((x> 305 && x<342 && y>367 && y<384)||(x> 228 && x<405 && y>382 && y<456)||(x> 281 && x<340 && y>363 && y<343)||(x> 341 && x<371 && y>371 && y<433)||(x> 397 && x<412 && y>386 && y<400)||(x> 412 && x<420 && y>382 && y<388)||(x> 370 && x<400 && y>379 && y<421)) {
		  image.setAttribute("src", "image/Volume/bellevue-sans.png");
		  quartier="bellevue";
	  }else if ((x> 327 && x<378 && y>323 && y<373)||(x> 383 && x<415 && y>323 && y<371)||(x> 320 && x<377 && y>299 && y<321)) {
		  image.setAttribute("src", "image/Volume/derv-sans.png");
		  quartier="derv";
	  }else if ((x> 413 && x<445 && y>345 && y<377)||(x> 442 && x<462 && y>336 && y<379)||(x> 460 && x<485 && y>336 && y<378)||(x> 482 && x<500 && y>355 && y<376)) {
		  image.setAttribute("src", "image/Volume/centre-sans.png");
		  quartier="centre";
	  }else if ((x> 351 && x<391 && y>234 && y<303)||(x> 375 && x<390 && y>366 && y<315)||(x> 411 && x<444 && y>238 && y<287)||(x> 440 && x<459 && y>244 && y<257)) {
		  image.setAttribute("src", "image/Volume/breil-sans.png");
		  quartier="breil";
	  }else if ((x> 461 && x<481 && y>249 && y<257)||(x> 440 && x<481 && y>261 && y<278)||(x> 443 && x<472 && y>280 && y<301)||(x> 396 && x<460 && y>301 && y<317)||(x> 404 && x<470 && y>318 && y<332)) {
		  image.setAttribute("src", "image/Volume/hauts-sans.png");
		  quartier="hauts";
	  }else if ((x> 369 && x<506 && y>126 && y<216)||(x> 410 && x<487 && y>208 && y<243)||(x> 428 && x<487 && y>238 && y<250)||(x> 477 && x<501 && y>165 && y<228)) {
		  image.setAttribute("src", "image/Volume/nord-sans.png");
		  quartier="nord";
	  }else if ((x> 503 && x<596 && y>52 && y<197)||(x> 508 && x<577 && y>198 && y<213)||(x> 500 && x<543 && y>227 && y<245)||(x> 486 && x<526 && y>246 && y<267)||(x> 480 && x<516 && y>268 && y<280)) {
		  image.setAttribute("src", "image/Volume/erdre-sans.png");
		  quartier="erdre";
	  }else if ((x> 483 && x<505 && y>282 && y<285)||(x> 479 && x<527 && y>290 && y<300)||(x> 470 && x<544 && y>304 && y<325)||(x> 477 && x<558 && y>330 && y<343)||(x> 498 && x<562 && y>348 && y<354)) {
		  image.setAttribute("src", "image/Volume/malakoff-sans.png");
		  quartier="malakoff";
	  }else{
		  image.setAttribute("src", "image/Volume/vide.png");
		  quartier="";
		  
	  }
      affichebullequartier(quartier,event,scroll,1);
}

function afficheinfolieu(event, nomlieu){
	var sourisX = event.clientX;
	  var sourisY = event.clientY;
	cahcheinfobullelieu();
	var iddivlieu= nomlieu+"i";
	//alert(iddivlieu);
	var scroll= Array((document.documentElement && document.documentElement.scrollLeft) || window.pageXOffset || self.pageXOffset || document.body.scrollLeft,(document.documentElement && document.documentElement.scrollTop) || window.pageYOffset || self.pageYOffset || document.body.scrollTop);

	sourisY+=scroll[1];
	sourisX+=scroll[0];
	//alert(sourisY+","+sourisX);
	
	var largeurBulle=(document.getElementById(iddivlieu).offsetWidth);
	var hauteurBulle=(document.getElementById(iddivlieu).offsetHeight);
	var positionY=sourisY-266; // taille de l'image en Y
	var positionX=sourisX-215;// taille de l'image en X
	//alert(largeurBulle+','+hauteurBulle);
	document.getElementById(iddivlieu).style.display = "block";
	document.getElementById(iddivlieu).style.marginTop=positionY+"px";
	document.getElementById(iddivlieu).style.marginLeft=positionX+"px";
}

function cahcheinfobullelieu() {
	
	if (document.getElementById("machinesi").style.display != "none"){
		document.getElementById("machinesi").style.display = "none";
	}
	if (document.getElementById("trempolinoi").style.display != "none"){
		document.getElementById("trempolinoi").style.display = "none";
	}
	if (document.getElementById("stereoluxi").style.display != "none"){
		document.getElementById("stereoluxi").style.display = "none";
	}
	if (document.getElementById("ecolearchii").style.display != "none"){
		document.getElementById("ecolearchii").style.display = "none";
	}
	if (document.getElementById("polegraphiquei").style.display != "none"){
		document.getElementById("polegraphiquei").style.display = "none";
	}
	if (document.getElementById("palaissporti").style.display != "none"){
		document.getElementById("palaissporti").style.display = "none";
	}
	if (document.getElementById("centrecommercialbeaulieui").style.display != "none"){
		document.getElementById("centrecommercialbeaulieui").style.display = "none";
	}
	if (document.getElementById("lcclubi").style.display != "none"){
		document.getElementById("lcclubi").style.display = "none";
	}
	if (document.getElementById("altercafei").style.display != "none"){
		document.getElementById("altercafei").style.display = "none";
	}
	if (document.getElementById("rondpointi").style.display != "none"){
		document.getElementById("rondpointi").style.display = "none";
	}
	if (document.getElementById("ferrailleuri").style.display != "none"){
		document.getElementById("ferrailleuri").style.display = "none";
	}
}

