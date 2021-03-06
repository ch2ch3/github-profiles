$('document').ready(function(){
	$('#add-profile').on('submit', function(event){
		$(this).css('margin-top', '15%')

		event.preventDefault();

		var url = "https://api.github.com/users/" + $('#get-username').val() + "?access_token=3915bcabf5daf232c2a10fafea97c614edd0efa4";

		var userData = $.get(url, function(user){
			var template = $('#profile-template').html();
			$(Mustache.render(template, user)).prependTo('.profile-container')
			$(".profile-container .profile:gt(2)").remove();
			if(user.followers > 999){
				$('.profile:first-of-type .follower.count').css({'font-size': '1.9em',
						'margin-top': '+=8px',
						'margin-bottom': '+=8px'
				})
			} if(user.followers > 9999){
				$('.profile:first-of-type .follower.count').css({'font-size': '1.6em',
						'margin-top': '+=5px',
						'margin-bottom': '+=5px'
				})
			}
		}).fail(function(){
			alert('Could not find this user.');
		}).always(function(){
			$('#get-username').val('');
		});
	});

	$('.profile-container').on('mouseenter', '.profile', function(){
		$(this).find('.username').show();
	});

	$('.profile-container').on('mouseleave', '.profile', function(){
		$(this).find('.username').hide();
	})

});