$(document).ready(function () {
    $("#load").show();
    $.getJSON( 
    "data.json",
    $("#load").fadeOut(300), 
    function(jsonData) {
      	
    var lang = $('html').attr('lang'),
        url  = lang  + "-url",
        name = lang  + "-name";

        var listItems = '<option data-url="" selected="selected" value="0">- select -</option>';

        for (var i = 0; i < jsonData.Table.length; i++) {
          listItems += "<option data-url='" + jsonData.Table[i][url] + "' value='" + jsonData.Table[i].Code + "'>" + jsonData.Table[i][name] + "</option>";
    	}

        $('#list').html(listItems).change(function(){
        	var datalink = $('#list option:selected').attr('data-url');
            var code = $('#list').val();

            if ( code < 1 ) {
                $('#continue').prop('disabled', true).html('x');
            }

            else {
                $('#continue').prop('disabled', false).html('jatka').click(function(){
                    window.location = datalink;
                });
            }     
        });
    });
});
