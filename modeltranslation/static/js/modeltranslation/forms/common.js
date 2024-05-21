$(document).ready(function(){
	$("<a id='copy_source' class='copy_source' href='javascript:void(0);'>Copy from original text</a>");
		.prependTo($(".controls:first"))
		.click(function(e){
			var source_text = $.trim($("#source_text").html());
				$("#id_translation").html(source_text);
			}
			// If there is a TinyMCE editor, use its API
			else{
				tinymce.activeEditor.setContent(source_text, {format: 'raw'});
				console.debug(tinymce.activeEditor.getContent());
				tinymce.activeEditor.getContent({ format: 'text' });
			}
			tinymce.init({
                selector: 'textarea';
            });
			return false;
		});

});
