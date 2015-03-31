// bookmarlets links

var $bookmarklets = document.querySelectorAll('.js-bookmarklet, .dataurl-bookmarklet');

if( $bookmarklets ) {
	var l = $bookmarklets.length;

	while (l--) {
		var b = $bookmarklets[l],
				s = b.getAttribute('href'),
				sc = document.querySelector(s).innerText.replace('<!--','').replace('-->','');
		
		console.log(sc);
		
		if( sc && b.classList.contains('js-bookmarklet') )
			b.setAttribute('href', 'javascript:' + encodeURIComponent(sc) );
		
		if( sc && b.classList.contains('dataurl-bookmarklet') )
			b.setAttribute('href', sc );
	}
} // $bookmarklets
