var a = document.querySelectorAll('a'),
		urls = [],
		l = a.length;

while(l--) {

	var h = a[l].getAttribute("href");
	urls.push( '<a href="' + h + '" target="_blank">' + h + '</a>' );
	
	// with extension
	/* e = h.substr((~-h.lastIndexOf(".")>>>0)+2);
	"png"== e && urls.push(h); */
}

// console.log(urls);

aside = document.createElement( 'aside' );
aside.setAttribute('id','getLInks');

aside.innerHTML = '<div style="width: 60%; height: 100%; position: absolute; top: 0px; left: 0px; overflow: auto; display: block; padding: 20px; border: 1px solid rgb(204, 204, 204); line-height: 1.5em; z-index: 666666; background: rgb(249, 249, 249);">'+
									'<p>' + urls.length + ' links(s) on page '+
									'<a href="javascript:document.getElementById(\'getLInks\').remove();">[close]</a></p>'+
									urls.join('<br>')+
									'</div>';

document.body.appendChild(aside);

			

