jQuery(document).ready(function($) {
    "use strict";

    var myPlaylist = new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1"
    }, [
        {
            title:"Sam Smith -The Only One",
            mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
            oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg"
        },
        {
            title:"Sam Smith - Your Face",
            mp3:"http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
            oga:"http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg"
        },
        {
            title:"Sam Smith - Cyber Sonnet",
            mp3:"http://www.jplayer.org/audio/mp3/TSP-07-Cybersonnet.mp3",
            oga:"http://www.jplayer.org/audio/ogg/TSP-07-Cybersonnet.ogg"
        },
        {
            title:"Sam Smith - Tempered Song",
            mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
            oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg"
        },
        {
            title:"Sam Smith - Hidden",
            mp3:"http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
            oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg"
        },
        {
            title:"Sam Smith - Lentement",
            free:true,
            mp3:"http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
            oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg"
        },
        {
            title:"Sam Smith - Lismore",
            mp3:"http://www.jplayer.org/audio/mp3/Miaow-04-Lismore.mp3",
            oga:"http://www.jplayer.org/audio/ogg/Miaow-04-Lismore.ogg"
        },
        {
            title:"Sam Smith - The Separation",
            mp3:"http://www.jplayer.org/audio/mp3/Miaow-05-The-separation.mp3",
            oga:"http://www.jplayer.org/audio/ogg/Miaow-05-The-separation.ogg"
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