function addbutton() {
    var x = event.target.id;
	var element = '<div onclick="deletebutton()" id=' + event.target.id + '>' + document.getElementById(event.target.id).innerHTML + '</div>';
	document.getElementById('add').style.opacity = 1;
	document.getElementById('add').onclick = function() {
	  document.getElementById('add').style.opacity = 0.5;
	  $('#' + x).remove();
      $('#cart').append(element);
      $('#msg1').remove();
      var y = document.getElementById('options').innerHTML.trim();
      if(y=="") {
	      $('#options').append('<h6 id="msg2">It seems you are very hungry!</h6>');
        }
 	 };	
}

function deletebutton() {
    var x = event.target.id;
	var element = '<div onclick="addbutton()" id=' + event.target.id + '>' + document.getElementById(event.target.id).innerHTML + '</div>';
	document.getElementById('delete').style.opacity = 1;
	document.getElementById('delete').onclick = function() {
	  document.getElementById('delete').style.opacity = 0.5;
	  $('#' + x).remove();
      $('#options').append(element);
      $('#msg2').remove();
      var z = document.getElementById('cart').innerHTML.trim();
      if(z=="") {
	      $('#cart').append('<h6 id="msg1">Your cart is empty!</h6>');
        }
 	};	
}

var x = document.getElementById('cart').innerHTML.trim();
if(x=="") {
	$('#cart').append('<h6 id="msg1">Your cart is empty!</h6>');
}
