//LAB 10 - 2 INVENTORY PAGE
$(window).on("load", function(){
	$('.desc').hide();


	//ADD MOUSEOVER/MOUSEOUT FUNCTIONS FOR <tr>
	$('tr').hover(
		function(){$(this).find('td').css( {'background':'red','color':'white'} )},
		function(){$(this).find('td').css( {'background':'white','color':'black'} )}
	);


	//ADD CLICK EVENT TO <tr>
	$('tr').on("click", function(){
		$('.desc').hide();
		$(this).find('.desc').toggle();
	});


});