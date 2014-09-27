$('document').ready(function(){
	$('#add-profile').on('submit', function(event){
		event.preventDefault();

		var url = "https://api.github.com/users/" + $('#username').val() + "?access_token=3915bcabf5daf232c2a10fafea97c614edd0efa4";

		var userData = $.get(url, function(user){
			var template = $('#profile-template').html();
			$(Mustache.render(template, user)).prependTo('.profile-container');
		}).fail(function(){
			alert('Could not find this user.');
		}).always(function(){
			$('#username').val('');
		});
	});
});