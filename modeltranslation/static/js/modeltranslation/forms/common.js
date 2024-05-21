$(document).ready(function(){
	$("<a id='copy_source' class='copy_source' href='javascript:void(0);'>Copy from original text</a>");
		.prependTo($(".controls:first"))
		.click(function(e){
		    tinymce.init({
                selector: 'textarea';
            });
			tinymce.activeEditor.setContent(source_text, {format: 'raw'});

			return false;
		});

});
