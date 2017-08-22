$(function(){

    $(' .mainContent__replyControl-specialLabel ').hover(
        function() {
            $(' .mainContent__replyControl-specialSpan ').addClass( "hover" )
        }, function() {
            $( '.mainContent__replyControl-specialSpan' ).removeClass( "hover" );
        }
    )


    $(' .ticket__formOption ').click(function() {
        $(' #formArrow ').toggleClass( 'spinMe' );
    });

});

function myFunction(){
    var x = document.getElementById("uploadFile");
    var txt = "";
    if ('files' in x) {
        if (x.files.length == 0) {
        } else {
            for (var i = 0; i < x.files.length; i++) {
                var file = x.files[i];
                if ('name' in file) {
                    txt += "<div class=\"uploadedFiles__oneFileHolder\"><div class=\"uploadedFiles__oneFile\"><div class=\"uploadedFiles__title\">" + file.name;
                }
                if ('size' in file) {
                    var a = file.size;
                    var size = a * 0.001;
                    txt += "<p class=\"fileSize\"> (" + size + " Кб)</p> </div> </div> <a class=\"icon-delete\">&times;</a> </div>";
                }
            }
        }
    }

    document.getElementById("files").innerHTML = txt;
    $( '.icon-delete' ).click(function() {
        $( this ).parent().remove();
    });
}
