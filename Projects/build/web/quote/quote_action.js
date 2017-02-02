/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var getQuote = function () {
	$.ajax({
		url:"http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
		success: function (data) {
			var post = data.shift();
			$("#words").html(post.content);
			$("#speak").html("<b><em>"+post.title+"</em></b>");
			changeColor();
		},
		cache: false
	});
};
var values = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E'];
var changeColor = function () {
	var currColor = "#";
	for (var i = 0; i < 6; i++) {
		currColor += values[Math.round(Math.random()*10)];
	}
	$("body").css("background-color",currColor);
	$("body").css("color", currColor);
};

var tweetIt = function () {
	var content = $("#words").text().trim();
	var author_arr = $("#speak").text().split(' ');
	var author = author_arr.reduce(function (a,b) {return a + b[0] + ". ";}, "");
	author = author.substring(0, author.length-3) + author_arr[author_arr.length-1];
	var characters = 140 - (10+author.length);
	if (content.length > characters) {content = content.substring(0, characters-3) + "...";}
	window.open("https://twitter.com/intent/tweet?hashtags=quotes&text=" + content + "%20~" + author);
	
};

$(document).ready(function () {
	getQuote();
	changeColor();
	$("#new-quote").on("click", getQuote);
	$("#tweet").on("click", tweetIt);
	
});
//https://twitter.com/intent/tweet?hashtags=quotes&text=