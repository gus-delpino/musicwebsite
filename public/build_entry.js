var path_js = './assets/js';
var path_less = './assets/less';

//-- Configure plugins for Gallery
var jQueryBridget   = require(path_js + '/lib/jquery-bridget');
var Masonry         = require( path_js + '/lib/masonry.pkgd');
var imagesLoaded    = require( path_js + '/lib/imagesloaded.pkgd');

// provide jQuery argument
imagesLoaded.makeJQueryPlugin( jQuery );

// make Masonry a jQuery plugin
jQueryBridget( 'masonry', Masonry, jQuery );

//Require dependencies
require( path_js + '/lib/bootstrap');
require( path_js + '/lib/jquery.cookie');
require( path_js + '/lib/jquery.magnific-popup');
require( path_js + '/lib/jquery.stellar');
require( path_js + '/lib/jquery.validate');
require( path_js + '/lib/smooth-scroll');
require( path_js + '/lib/soundcloud.player.api');
require( path_js + '/lib/switcher');
//require( path_lib + '/lib/jplayer.home');

//Main JS file
require( path_js + '/js');

//CSS
require( path_less + '/style.less');
