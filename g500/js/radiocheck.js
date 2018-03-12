$(document).on("click",".qws_checkbox",function(){
	if($(this).prop("checked")==false){
		$(this).parent().removeClass("icon-check-select").addClass("icon-check-notselect");
	}
	else{
		$(this).parent().removeClass("icon-check-notselect").addClass("icon-check-select");
	}
});
$(document).on("click",".qws_radio",function(){
	var name = $(this).attr("name");
	$('input[name="'+name+'"]').parent().removeClass("icon-radio-select").addClass("icon-radio-notselect");
	$(this).parent().removeClass("icon-radio-notselect").addClass("icon-radio-select");
});