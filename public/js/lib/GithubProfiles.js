$('document').ready(function(){
	$('#add-profile').on('submit', function(event){
		event.preventDefault();
		var url = "https://api.github.com/users/" + $('#username').val();

		var userData = $.get(url, function(user){
			$('<article class="profile"><section class="avatar"><img src="' + user.avatar_url + '"></section><section class="statistics"><h3><a href="' + user.html_url + '">' + user.login + '</a></h3><strong>Repos: ' + user.public_repos + '</strong><strong>Followers: ' + user.followers + '</strong></section><br clear="all"></article>').prependTo('.profile-container');
		});
	});
});