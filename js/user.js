
$(document).ready(function(){
  const url = 'https://randomuser.me/api/?results=12&inc=name,email,picture,location,cell,login,dob&nat=us';

$.getJSON(url,function (data) {
  var overlay = $("body").append("<div id= 'overlay'></div>");
  	for (i = 0; i < 12; i++) {
  	const array = data.results;
 	var email = array[i].email;
 	var city = array[i].location.city; 
 	var pictureSmall = array[i].picture.thumbnail;
 	var pictureLarge = array[i].picture.medium;
 	var cell = array[i].cell;
 	var street = array[i].location.street;
 	var state = array[i].location.state;
 	var postCode = array[i].location.postcode;
 	var firstName = array[i].name.first;  
 	var lastName =  array[i].name.last;
 	var dob = array[i].dob;
 	var userName = array[i].login.username;
  let empCard = document.getElementsByClassName('list-');
  let modCard = document.getElementsByClassName('overlay');

  	var status = $('#col-1').append('<ul value="'+ (i) + '"  class="list-" id="rist-'+ i + '" ></ul>');
  	console.log(array)
  	 //Overlay div
  	$('#rist-' + i +'').append('<Li class="photo-cont"><img class="photo" src="' + pictureSmall + '"></li>')
  	$('#rist-' + i +'').append("<ul class='data-list-' id='inside-list-"+ i + "'></ul>")
  	$('#inside-list-' + i +'').append('<li class="email-col in">' + email + '</li>');
  	$('#inside-list-' + i +'').append('<li class="name-col in">' + firstName + lastName + '</li>');
  	$('#inside-list-' + i +'').append('<li class="username-col in">' + userName + '</li>');
  	$('#inside-list-' + i +'').append('<li class=" city-col in">' + city + '</li>');

  	//Modal div
	var modal = "<div id='modal" + i + "'>";
	modal += '<ul><span class="closebtn"><button>×</button></span><li><li class="top-container"><img class="picture modal" src="' + pictureLarge + '">';
	modal += '<section class="top">'
	modal += '<li class="name-modal">' + firstName + ' ' + lastName + '</li>';
	modal += '<li class="username-modal">' + userName + '</li>';
	modal += '<li class="email-modal"> ' + email + ' </li>';
	modal += '<li class="city-modal"> ' + city + ' </li></li>';
	modal += '</section>'
	modal += '<li class="cell-modal"> ' + cell + ' </li>';
	modal += '<li class="address-modal"> ' + street , state , postCode + ' </li>';
	modal += '<li class="dob-modal"> '+ dob + ' </li>';
	modal += '</ul>';
	modal += '</div>';
	

	var modalCell = $('#overlay').append("<div id='modal" + i +"' class='overlay'></div>");
	var coral = $('#modal' + i +'').append(modal);
  $(modCard).css("display", "none");
 
$(".list-").click(function() {
        $('#background').css("visibility", "visible");
        $('#overlay').css("z-index", "5");
        $('#overlay').css("display", "");
        let index = $(this).index();
        $(modCard[index]).css("left", "28%");
        $(modCard[index]).css("transition", "left .5s ease-in");
        $(modCard[index]).css("display", "");
        $("button").click(function(){
		$("#background").css("visibility", "hidden");
		$('#overlay').css("z-index", "");
		let index = $(this).index();
		$('.overlay').css("left", "150%");


	

				});
      });//end open modal click




 }	


 });

});







