function hesapla() {
	var sayi = parseInt(document.getElementById("sayi").value);
  var sonuc = sayi * sayi;
  document.getElementById("sonuc").innerText= sonuc;
}

function asalMi() {

	  var sayi = parseInt(document.getElementById("sayi").value);

		if (sayi == 0 || sayi == 1) {
    	console.log("asallık sorgulanmaz");
      return;
    }

		for (var i = 2; i < sayi; i++) {
    
    		if (sayi % i == 0)
    			{
          	console.log("asal değildir.");
            return;
          }    
    }

		console.log("sayı asaldır");
}

var sonuc = 0;

function arttir() {
		
   
   	sonuc++;
    
    document.getElementById("deger").innerText = sonuc;
   
}

function azalt() {
	sonuc--;
  document.getElementById("deger").innerText = sonuc;
  
}


var colors = ["yellow", "blue", "green"];
var counter = 0;

function degistir() {
	
  counter++;
  
  document.body.style.backgroundColor = colors[counter % colors.length];
  
  /*
  if (counter > colors.lenght)
  counter = 0;
  */
}


var otomatikIslem;
function otomatikDegistir() {
	otomatikIslem = setInterval(degistir, 1000);
}

function degisimiDurdur() {
	clearInterval(otomatikIslem);
}
