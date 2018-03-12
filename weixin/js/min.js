	$(document).ready(function(){
		$("#music").trigger("play");
	});
	$("#yinyue").css("animation-play-state","running");
	$("#yinyue").css("-moz-animation-play-state","running");
	$("#yinyue").css("-webkit-animation-play-state","running");
	$("#yinyue").css("-o-animation-play-state","running");

	function control(){
		var music = document.getElementById("music");
		if(music!==null){
			if(music.paused)$("#music").trigger("play");
			else $("#music").trigger("pause");
		}

		if($("#yinyue").css("animation-play-state")=="running" || $("#yinyue").css("-moz-animation-play-state")=="running" || $("#yinyue").css("-webkit-animation-play-state")=="running" || $("#yinyue").css("-o-animation-play-state")=="running"){
			$("#yinyue").css("animation-play-state","paused");
			$("#yinyue").css("-moz-animation-play-state","paused");
			$("#yinyue").css("-webkit-animation-play-state","paused");
			$("#yinyue").css("-o-animation-play-state","paused");
		}
		else {
			$("#yinyue").css("animation-play-state","running");
			$("#yinyue").css("-moz-animation-play-state","running");
			$("#yinyue").css("-webkit-animation-play-state","running");
			$("#yinyue").css("-o-animation-play-state","running");
		}
	}