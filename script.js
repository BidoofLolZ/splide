document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#image-slider' ).mount();
} );

document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#image-slider', {
		'cover'      : true,
		'heightRatio': 0.8,
	} ).mount();
} );


new Glide('.glide', {
	type: 'carousel',
	startAt: 0,
	perView: 4
  }).mount()
