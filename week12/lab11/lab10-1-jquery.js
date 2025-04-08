//LAB 10 - 1 FAQ PAGE

//Listen for window load the jQuery way
$(window).on("load", function(){
	$('.contentBox').hide();


	//Inside of here is your jQuery/JavaScript


	//ADD CLICK EVENT TO <h2>
	$('h2').on("click", function(){
		$('.contentBox').slideUp();
		$(this).next('.contentBox').slideToggle();
	});
	
	
	
	
	//CHANGE <p> BACKGROUND ON HOVER
	$('.contentBox').hover(
		function(){$('.contentBox').css( {'background':'#FFE5C3','color':'#524737'} );},
		function(){$('.contentBox').css( {'background':'#524737','color':'#FFE5C3'} );}
	);



});

