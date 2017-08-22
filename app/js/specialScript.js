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
                    txt += "<div class=\"uploadedFiles__oneFile\">" + file.name;
                }
                if ('size' in file) {
                    var a = file.size;
                    var size = a * 0.001;
                    txt += " (" + size + " Кб) </div>";
                }
            }
        }
    }

    document.getElementById("files").innerHTML = txt;
}
