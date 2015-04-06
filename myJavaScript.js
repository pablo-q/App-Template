jQuery(document).ready(function (){
	jQuery("#myInput").focusout(function(){

		var input = jQuery("#myInput").val();
		if(input !== undefined){
			input += " hola que ase";
			jQuery("#myInput").val(input);
		}
	
		//alert('hola');
	});

	jQuery("#myDiv").click(function(){
		jQuery("#myDiv").height(180);
		jQuery("#myDiv").width(180);
	
	});
});
