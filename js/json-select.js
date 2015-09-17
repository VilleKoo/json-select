$(document).ready(function () {
    $.getJSON( 
    "data.json", 
    function( jsonData ) {
      	
    var lang = $('html').attr('lang'),
        url  = lang  + "-url",
        name = lang  + "-name";

        var listItems = '<option data-url="" selected="selected" value="0">- select -</option>';

        for (var i = 0; i < jsonData.Table.length; i++) {
          listItems += "<option data-url='" + jsonData.Table[i][url] + "' value='" + jsonData.Table[i].Code + "'>" + jsonData.Table[i][name] + "</option>";
    	}
        
        $('#cancer').html(listItems).change(function(){
        	var datalink = $('select option:selected').attr('data-url');

            $('#continue').prop('disabled', false).text('continue').click(function(){
                window.location = datalink;
            });
            
        });
    });
});
