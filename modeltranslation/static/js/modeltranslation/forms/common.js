$(document).ready(function(){
	$("<a id='copy_source' class='copy_source' href='javascript:void(0);'>Copy from original text</a>");
		.prependTo($(".controls:first"))
		.click(function(e){
			var source_text = $.trim($("#source_text").html());
				$("#id_translation").html(source_text);
		});

    tinymce.init({
      selector: 'textarea'
    });
});
