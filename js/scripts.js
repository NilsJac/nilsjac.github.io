$(document).ready(function(){

        $("p").hide();
        $("p").fadeIn(2000);
        $("#presenttxt").hide();
        $("#presenttxt").fadeIn(2000);
        $("#formation").hide();
        $("#formation").fadeIn(2000);
        $("#experience").hide();
        $("#experience").fadeIn(2000);


                 $("#experiencebt").click(function() {
               $('html,body').animate({
                   scrollTop: $("#experience").offset().top},
                   'slow');
});


         $("#formationbt").click(function() {
       $('html,body').animate({
           scrollTop: $("#formation").offset().top},
           'slow');
   });
   $("#competencebt").click(function() {
 $('html,body').animate({
     scrollTop: $("#competences").offset().top},
     'slow');
});


var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

});
