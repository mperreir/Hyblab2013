(function ($) {

    $.get("../partenaires/partenaires.html", function(data){
        $('#partenaires').html(data);
    },'html');

}(jQuery));
