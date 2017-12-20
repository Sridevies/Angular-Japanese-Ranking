$(document).ready(function(){
	$('input[name="pro-type"]').change(function(){
		$("#residential").attr('checked',true);
		var pType = $(this).val();
		if(pType == "commercial"){
			window.open('http://www.jll.co.uk/united-kingdom/en-gb/Pages/stamp-duty-calculator.aspx');
			$("#commercial").attr('checked',false);
		}
	});

	$('.calculateRSDLT, #non-primary').click(function(){
		$('span.error-keyup-1').hide();
		calculatestampduty();
	});

	$('.ResetRSDLT').click(function(){
		$('span.error-keyup-1').hide();
		$('#price').val('');
		$('.result-wrap').fadeOut('1000');
		$('#non-primary').attr('checked',false);
	});

	$(document).keypress(function(e) {
		if(e.which == 13) {
			calculatestampduty();
		}
	});

	$.fn.digits = function(){ 
		return this.each(function(){ 
			$(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); 
		});
	}

	$('#price').keyup(function(e){
		if(e.which == 13) {
			$('span.error-keyup-1').hide();
			calculatestampduty();
		}

		if($(".result-wrap").is(":visible") == true)
		{
			calculatestampduty();
		}
	});

	$('#price').keyup(function(){ 
		var val = $(this).val();
		if(isNaN(val)){
			 val = val.replace(/[^0-9\.]/g,'');
			 if(val.split('.').length>2) 
				 val =val.replace(/\.+$/,"");
		}
		$(this).val(val); 
	});

	$('#price').keydown(function(event) {

			var key=event.which;
			$('span.error-keyup-1').hide();
			if(key != 8 && key != 9 && key != 16 && key != 17 && key != 18 && key != 20 && key != 33 && key != 34 && key != 45 && key != 91 && key != 92 && key != 93 && key != 86 && key != 13 && key != 46 && key != 110 && key != 144 &&  key != 190 && (key <= 34 || key >= 40) && (key <= 48 || key >= 57) && (key <= 95 || key >= 106))
				{


				var inputVal = $(this).val();	
				var regex = new RegExp("^[0-9]+$");
				  var strkey = String.fromCharCode(event.which);	  
				  
					  if (!regex.test(strkey)) { 
					  
					 event.preventDefault();
					 $('#price').before('<span class="error error-keyup-1">Please enter a numerical Value</span>');
					 return false;
					  }
				  }
	});

	$('#price').on('paste', function (e) {
	 var $this = $(this);
	 $('span.error-keyup-1').hide();
	 setTimeout(function () {
		 var regex = new RegExp("^[0-9]+$");
		 if (!regex.test($this.val())) { 
			 $('#price').before('<span class="error error-keyup-1">Please enter a numerical Value</span>');
		 }
	 $this.val($this.val().replace(/[^0-9\.]/g, ''));
	 }, 5);
	}); 
	
  });
		
function calculatestampduty()
{
	var priceVal = $('#price').val();
	
	if(priceVal != ''){ 
		$('.result-wrap').fadeIn('1000');

		if(priceVal == 0){
				$('.result-pay').html("&pound; 0");
				$('.result-tax').html("0%");
		}

		if(priceVal > 0  && priceVal <= 125000){
			if($('input[type="checkbox"]').is(":checked")){
				var pricePay = 0.03*priceVal;
				$('.result-pay').html("&pound; "+pricePay.toFixed(2)).digits();
				$('.result-tax').html("3.0%");
			}
			else{
				$('.result-pay').html("&pound; 0");
				$('.result-tax').html("0%");
			}
		}

		if(priceVal > 125000 && priceVal <= 250000){
			if($('input[type="checkbox"]').is(":checked")){
				var pricePay = ((priceVal - 125000)*0.02)+0.03*priceVal;
			}
			else{
				var pricePay = (priceVal - 125000)*0.02;
			}
			var taxVal = pricePay/(priceVal*0.01);
			$('.result-pay').html("&pound; "+pricePay.toFixed(2)).digits();
			$('.result-tax').html(taxVal.toFixed(1)+"%");
		}

		if(priceVal > 250000 && priceVal <= 925000){
			if($('input[type="checkbox"]').is(":checked")){
				var pricePay = ((priceVal - 250000)*0.05 + 2500)+0.03*priceVal;
			}
			else{
				var pricePay = (priceVal - 250000)*0.05 + 2500;
			}
			var taxVal = pricePay/(priceVal*0.01);
			$('.result-pay').html("&pound; "+pricePay.toFixed(2)).digits();
			$('.result-tax').html(taxVal.toFixed(1)+"%");
		}

		if(priceVal > 925000 && priceVal <=  1500000){
			if($('input[type="checkbox"]').is(":checked")){
				var pricePay = ((priceVal - 925000)*0.1 + 2500 + 33750) + 0.03*priceVal;
			}
			else{
				var pricePay = (priceVal - 925000)*0.1 + 2500 + 33750;
			}
			var taxVal = pricePay/(priceVal*0.01);
			$('.result-pay').html("&pound; "+pricePay.toFixed(2)).digits();
			$('.result-tax').html(taxVal.toFixed(1)+"%");
		}

		if(priceVal > 1500000){
			if($('input[type="checkbox"]').is(":checked")){
				var pricePay = ((priceVal - 1500000)*0.12 + 2500 + 33750 + 57500) + 0.03*priceVal;
			}
			else{
				var pricePay = (priceVal - 1500000)*0.12 + 2500 + 33750 + 57500;
			}	
			var taxVal = pricePay/(priceVal*0.01);
			$('.result-pay').html("&pound; "+pricePay.toFixed(2)).digits();
			$('.result-tax').html(taxVal.toFixed(1)+"%");
		}
		
	}else{
		$('span.error-keyup-1').hide();
		$('.result-wrap').fadeOut(1000);
		$('#non-primary').attr('checked',false);
		$('#price').before('<span class="error error-keyup-1">Please enter the property price</span>');
	}
}
