$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var numbers = parseInt($("#numbers").val());

    if(numbers == 0){
      numbers == 1;
    } else if(!numbers){
      alert("enter number");
    } else if (numbers < 0){
      alert("enter number greater than zero");
    }

    for (i = numbers -1; i > 0; i--){
      numbers = numbers * i
    }
    $("#results").children().remove();
     $("#results").append("<li>" + numbers  + "</li>");


  });

});
