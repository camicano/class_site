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
			var html = '<div class="student" id="' + student.id + '"><p>' + student.name + '</p><img id="triangle" src="assets/triangle.png" /><div class="' + student.id + '"></div></div>';
			$('#container').append(html);
			var id = '#' + student.id;
			$('#' + student.id).css({
				"position": "absolute",
				"left": student.left_percent + '%',
				"top": student.top_percent
			});
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
						"width": '80%',
						"height": '80%',
						"left": "10%",
						"top": "5%",
						"opacity": "0.8"
					});


					var html = '<div class="info">';
					html += '<div><img id="info-img" src="'+student.photo_link+'" /></div>'
					html += '<div><h3>Contact Info<i class="icon-times icon-3x"></i></h3>';
					html +='<p>' + student.email + '</p>';

					if(student.website){
						html += '<a href="' + student.website + '" target="blank"><p>' + student.website + '</p></a>';
					}
					if(student.github){
						html += '<a href="http://github.com/' + student.github + '" target="blank"><p>' + student.github + '</p></a>';
					}
					if(student.project_url || student.project_url2 || student.project_url3){
						html += '<h3>Work</h3>';
					}
					if(student.project_url){
						html += '<a href="' + student.project_url + '" target="blank"><p>' + student.project_url + '</p></a>';
					}
					html += '<p class="exit-button">Exit</p></div>';
					html += '</div>'
					$('#' + data.id).addClass('animated fadeInUp');
					$('#' + data.id).append(html);

					$('.exit-button').on('click', function(e){
						e.preventDefault();
						$('#' + data.id).addClass('animated fadeOutDown');
						$('#container').empty();
						ajax();
					});

				});
			});
		});
	});
}

function footerOut(){
	$('#footer').css({
		"height": 80 + "%"
	});
	$('#footer').removeClass('fadeInDown');
	$('#footer').addClass('animated fadeInUp');
	$('#footer_content').show();
}

function footerIn(){
	$('#footer_content').hide();
	$('#footer').css({
		"height": 70 + "px"
	});
	$('#footer').removeClass('fadeInUp');
	$('#footer').addClass('animated fadeInDown');
}

$(function(){
	$('#footer_content').hide();
	ajax();
	$('#about').on('click', function(e){
		e.preventDefault();
		footerOut();
	});
	$('#footer-button').on('click', function(e){
		e.preventDefault();
		footerIn();
	});
});
















