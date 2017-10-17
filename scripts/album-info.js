$(document).ready(function() {
  $("album-title").text(album.title);
  $("img#album-cover-art").attr("src", album.albumArtUrl);
  $(".artist").text(album.artist);
  $("div#release-info").html("<p>" + album.releaseInfo + "</p>");
});
