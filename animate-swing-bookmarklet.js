// css-bookmarklet.js

function addStyleString(str) {
	var node = document.createElement('style');
	node.innerHTML = str;
	document.body.appendChild(node);
}

// animate.css (only the swing animation)
addStyleString('@charset "UTF-8";/*!;Animate.css - http://daneden.me/animate;Licensed under the MIT license - http://opensource.org/licenses/MIT;;Copyright (c) 2015 Daniel Eden;*/.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes swing{20%{-webkit-transform:rotate3d(0,0,1,15deg);transform:rotate3d(0,0,1,15deg)}40%{-webkit-transform:rotate3d(0,0,1,-10deg);transform:rotate3d(0,0,1,-10deg)}60%{-webkit-transform:rotate3d(0,0,1,5deg);transform:rotate3d(0,0,1,5deg)}80%{-webkit-transform:rotate3d(0,0,1,-5deg);transform:rotate3d(0,0,1,-5deg)}100%{-webkit-transform:rotate3d(0,0,1,0deg);transform:rotate3d(0,0,1,0deg)}}@keyframes swing{20%{-webkit-transform:rotate3d(0,0,1,15deg);transform:rotate3d(0,0,1,15deg)}40%{-webkit-transform:rotate3d(0,0,1,-10deg);transform:rotate3d(0,0,1,-10deg)}60%{-webkit-transform:rotate3d(0,0,1,5deg);transform:rotate3d(0,0,1,5deg)}80%{-webkit-transform:rotate3d(0,0,1,-5deg);transform:rotate3d(0,0,1,-5deg)}100%{-webkit-transform:rotate3d(0,0,1,0deg);transform:rotate3d(0,0,1,0deg)}}.swing{-webkit-transform-origin:top center;transform-origin:top center;-webkit-animation-name:swing;animation-name:swing}');

var divs = document.querySelectorAll('body *'),
		l = divs.length;
		test = [];

while(l--) {
	
	var el = divs[l],
			display = window.getComputedStyle( el, null).getPropertyValue("display"),
			isBlock = ( display == 'block' ? true : false );
	
	// console.log( display );

	if( isBlock ) {
		// animate with animate.css
		el.classList.add('animated');
		el.classList.add('swing');
		// clean
		el.addEventListener('webkitAnimationEnd', function(event) {
			event.target.classList.remove('animated');
			event.target.classList.remove('swing');
		} );
	
	}

}

