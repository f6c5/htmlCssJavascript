$(document).ready(function() {

	$("#sorgula").click(function() { 
  
  	var coordinates = $("#coordinates").val();		
  	
    var lat = coordinates.split(",")[0].trim();
    var lng = coordinates.split(",")[1].trim();
    
    
    
  	$.get("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lng + "&appid=a3a6bf27cb2b6bf2b081db659ac18f29&units=metric&lang=tr", function(response, status) { 
    	console.log(status);
      if (status == "success") {
      
    	
      $("#title").text(response.name);
      
     // $("#title").text($("#title").text() + " BURSA");
      if (response.weather.length > 0) {
        $("#degree").html(response.main.temp + "&#176C " + response.weather[0].description);

        var iconurl = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
        $("#icon").attr("src", iconurl);
      }
      else {
      	$("#degree").html("Konumunuzun hava durumu alınamıyor");
    	
      }
      }
      else {
       alert("Hava durumu alınamıyor");
      }
    });
   
    
    console.log("merhaba");
    
    
  });

	$("#location").click(function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {

            var lat = position.coords.latitude;
            var lng = position.coords.longitude;

            $.get("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lng + "&appid=a3a6bf27cb2b6bf2b081db659ac18f29&units=metric&lang=tr", function(response, status) { 
                console.log(status);
              if (status == "success") {
              
                
              $("#title").text(response.name);
              
             // $("#title").text($("#title").text() + " BURSA");
              if (response.weather.length > 0) {
                $("#degree").html(response.main.temp + "&#176C " + response.weather[0].description);
        
                var iconurl = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
                $("#icon").attr("src", iconurl);
              }
              else {
                  $("#degree").html("Konumunuzun hava durumu alınamıyor");
                
              }
              }
              else {
               alert("Hava durumu alınamıyor");
              }
            });

      });
    } else {
      $("#error").text("Lokasyon alma tarayıcınız tarafından desteklenmiyor.");
    }
	});

});



