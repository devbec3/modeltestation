$(document).ready(function(){
    window.alert('Ready!');
    try{
        tinymce.init({
            selector: 'textarea'
        });
    } catch (e) {}

	$("<a id='copy_source' class='copy_source' href='javascript:void(0);'>Copy from original text</a>")
		.prependTo($(".controls:first"))
		.click(function(e){
			var source_text = $.trim($("#source_text").html());
			window.alert('clicked');

			console.log(source_text);
			tinymce.init({
                selector: 'textarea'
                setup: function (editor) {
                    editor.on('init', function (e) {
                        editor.setContent(source_text)
                    });
                }
            });
			return false;
		});

});
