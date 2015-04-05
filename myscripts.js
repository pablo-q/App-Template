jQuery(document).ready(function (){
	jQuery("#control").focusout(function(){

		var input = jQuery("#control").val();
		if(input !== undefined){
			input += "hola que ase";
			jQuery("#control").val(input);
		}
	
		//alert('hola');
	});

	jQuery("#canvas").click(function(){
		jQuery("#canvas").height(180);
		jQuery("#canvas").width(180);
	
	});
});
