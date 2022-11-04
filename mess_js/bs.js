
$(document).ready(function() {


    $("#btnModalAc").click(function() {
  
          $("#testModal").modal({
          backdrop: 'static',
        keyboard: false
      
      }).modal('show');
  
    });
  
  
      $("#btnModalKapat").click(function() {
    
        $("#testModal").modal('hide');
    
    });
    
    $("#testModal").on("hidden.bs.modal", function() {
        $("#infotext").text("Modal Kapatıldı");
    });
    
    $("#testModal").on("shown.bs.modal", function() {
        $("#infotext").text("Modal Açıldı");
    });
  
      setTimeout(function() {
    
        $("#alrInfo").hide(1000);
    
    }, 4000);
  
  });