$(function(){

    $(' .mainContent__replyControl-specialLabel ').hover(
        function() {
            $(' .mainContent__replyControl-specialSpan ').addClass( "hover" )
        }, function() {
            $( '.mainContent__replyControl-specialSpan' ).removeClass( "hover" );
        }
    )

});

