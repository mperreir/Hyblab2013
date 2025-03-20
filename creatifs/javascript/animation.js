$(document).ready(
		function(){
			var heightLoupe = 153;
			var deltaHeightLoupe = 14;
			var widthLoupe = 198;
			var deltaWidthLoupe = 14;
			var topLoupe = 525;
			var deltaTopLoupe = deltaHeightLoupe/2.4;
			var leftLoupe = 210;
			var deltaLeftLoupe = deltaWidthLoupe/3;
			var speed = 100;

			var timeOutLoupeGrossissement = 4000;
			var timerLoupeGrossissement = window.setTimeout(attenteLoupeGrossissement, timeOutLoupeGrossissement);
			var timeOutLoupeRetressissement = 500;
			var timerLoupeRetressissement = null;
			
			$("#loupe").mouseover(
					function(){
						window.clearTimeout(timerLoupeGrossissement);
						window.clearTimeout(timerLoupeRetressissement);
						transitionGrossir(null);
					}
			);
			$("#loupe").mouseout(
					function(){
						transitionRetressir(null);
					}	
			);
			$("#loupe").mousedown(
					function(){
						$("#loupe").css("height", heightLoupe).css("width", widthLoupe).css("top", topLoupe).css("left", leftLoupe);
					}	
			);
			$("#loupe").mouseup(
					function(){
						$("#loupe").css("height", heightLoupe+deltaHeightLoupe).css("width", widthLoupe+deltaWidthLoupe).css("top", topLoupe-deltaTopLoupe).css("left", leftLoupe-deltaLeftLoupe);
					}
			);
			
			function transitionGrossir(){
				$("#loupe").animate({height:heightLoupe+deltaHeightLoupe,width:widthLoupe+deltaWidthLoupe,top:topLoupe-deltaTopLoupe,left:leftLoupe-deltaLeftLoupe}, speed);
			}
			
			function transitionRetressir(){
				$("#loupe").animate({height:heightLoupe,width:widthLoupe,top:topLoupe,left:leftLoupe}, speed);
			}
			
			function attenteLoupeGrossissement(){
				var timerLoupeRetressissement = window.setTimeout(attenteLoupeRetressissement, timeOutLoupeRetressissement);
				transitionGrossir();
			}
			
			function attenteLoupeRetressissement(){
				timerLoupeGrossissement = window.setTimeout(attenteLoupeGrossissement, timeOutLoupeGrossissement);
				transitionRetressir();
			}
		}
);