//---------event click----------
$('page-scroll').on('click', function(e) {

	//ambil value href
	var tujuan = $(this).attr('href');
	//tangkap element ybs
	var elementTujuan = $(tujuan);

	//pindahkan scroll
	$('body').animate({
		scrollTop: elementTujuan.offset().top - 50
	}, 1000, 'swing');


	e.preventDefault()
});