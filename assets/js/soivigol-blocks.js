window.addEventListener( 'load', () => {
	const allGlider = document.querySelectorAll( '.glider-block' );
	allGlider.forEach( el => {
		const parent = el.parentNode;
		const numDesktop = parent.getAttribute( 'data-desktop' );console.log( numDesktop )
		const numMobile = parent.getAttribute( 'data-mobile' );
		const numTablet = parent.getAttribute( 'data-tablet' );

		const args = {
			slidesToScroll: 1,
			slidesToShow: parseInt( numMobile ),
			draggable: true,
			dots: parent.querySelector( '.dots' ),
			arrows: {
				prev: parent.querySelector( '.glider-prev' ),
				next: parent.querySelector( '.glider-next' ),
			},
			responsive: [
				{
				  breakpoint: 775,
				  settings: {
					slidesToShow: parseInt( numTablet ),
				  }
				},
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: parseInt( numDesktop ),
				  }
				}
			]
		}
		new Glider( el, args );
	});
});
