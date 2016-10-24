jQuery(document).ready(function($) {
    "use strict";

    var myPlaylist = new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1"
    }, [
        {
            title:"Midnight Pass - Gustavo del Pino w/ Berklee LA Studio Ensemble",
            mp3:"assets/media/midnight_pass.mp3",
            oga:"assets/media/midnight_pass.ogg"
        },
        {
            title:"Sam Smith - Your Face",
            mp3:"http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
            oga:"http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg"
        }

    ], {
        swfPath: "assets/jplayer",
        supplied: "oga, mp3",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
    });

    // Show The Current Track !!
    $("#jquery_jplayer_1").on($.jPlayer.event.ready, function (event) {
        var current = myPlaylist.current;
        var playlist = myPlaylist.playlist;
        $.each(playlist, function (index, obj) {
            if (index == current) {
                $("#nowPlaying").html(obj.title);
            }
        });
    });
    $("#jquery_jplayer_1").on($.jPlayer.event.play, function (event) {
        var current = myPlaylist.current;
        var playlist = myPlaylist.playlist;
        $.each(playlist, function (index, obj) {
            if (index == current) {
                $("#nowPlaying").html(obj.title);
            }
        });
    });
    // Open Close PlayList
    $('#playlist-toggle').click(function(e){
        e.preventDefault();
        $('.jp-playlist').slideToggle();
    });
    // Open Close Player Button
    $('#h-player').click(function() {
        $(this).toggleClass("rotate")
        $(".jPlayer-fixed").toggleClass("close-down");
    }),
        // Open Close Player on scroll
        $(window).on("scroll", function () {
            if ($(this).scrollTop() > 100) {
                $(".jPlayer-fixed").addClass("close-down");
                $("#h-player").addClass("rotate");
            }
            else {
                $(".jPlayer-fixed").removeClass("close-down");
                $("#h-player").removeClass("rotate");
            }
        });
    // Volume bar
    $("#jquery_jplayer_1").jPlayer("volume", '0.5');
    $('.jp-volume-controls li a').click(function(e){
        e.preventDefault();
        $('.jp-volume-controls li').removeClass('active');
        $("#jquery_jplayer_1").jPlayer("volume", ($(this).parent().index()+1)/10*2);
        for(var i=0;i<=$(this).parent().index();i++){
            $('.jp-volume-controls li').eq(i).addClass('active');
        }
    });
});