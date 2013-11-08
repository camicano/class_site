// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

var width = $(window).outerWidth();
var height = $(window).outerHeight();

function ajax(){
	$.ajax({
		url: '/',
		method: 'get',
		dataType: 'json'
	}).done(function(data){
		$.each(data, function(index, student){
			var html = '<div class="student" id="' + student.id + '"><p>' + student.name + '</p><div class="' + student.id + '"></div></div>';
			$('#container').append(html);
			var id = '#' + student.id;

			$(id).on('click', function(e){
				e.preventDefault();
				$('.info').empty();
				var url = this.innerText;
 
				$.ajax({
					url: '/show/' + url,
					method: 'get',
					dataType: 'json'
				}).done(function(data){
					$('#container :not("#'+data.id+'")').hide();
					$('#'+data.id+'').css({
						"width": (width - 40) + 'px',
						"height": (height - 100) + 'px',
						"margin-bottom": 50 + 'px',
						"margin-top": 40 + 'px'
					});

					var html = '<div class="info">';
					html += '<h3>Contact Info<i class="icon-times icon-3x"></i></h3>';
					html +='<p>' + student.email + '</p>';

					if(student.website){
						html += '<a href="' + student.website + '" target="blank"><p>' + student.website + '</p></a>';
					}
					if(student.github){
						html += '<a href="http://github.com/' + student.github + '" target="blank"><p>' + student.github + '</p></a>';
					}
					if(student.twitter){
						html += '<a href="http://twitter.com/' + student.twitter + '" target="blank"><p>' + student.twitter + '</p></a>';
					}
					if(student.bio){
						html += '<p>' + student.bio + '</p>';
					}
					if(student.project_url || student.project_url2 || student.project_url3){
						html += '<h3>Work</h3>';
					}
					if(student.project_url){
						html += '<a href="' + student.project_url + '" target="blank"><p>' + student.project_url + '</p></a>';
					}
					if(student.project_url2){
						html += '<a href="' + student.project_url2 + '" target="blank"><p>' + student.project_url2 + '</p></a>';
					}
					if(student.project_url3){
						html += '<a href="' + student.project_url3 + '" target="blank"><p>' + student.project_url3 + '</p></a>';
					}

					html += '<button class="exit-button">Exit</button></div>';
					
					$('#' + data.id).append(html);

					$('.exit-button').on('click', function(e){
						e.preventDefault();
						$('#container').empty();
						ajax();
					});

				});
			});
		});
	});
}

$(function(){
	ajax();


});
















