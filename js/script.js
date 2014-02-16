$(function(){

	var $formulario = $('#formulario'),
		$titulo = $('#titulo'),
		$link = $('#link'),
		$primeraNota = $('#nota'),
		$notas = $('#notas'),
		$texto = $('#texto'),
		$aviso = $('#aviso');

	function mostrarForm (e){
		$formulario.slideToggle();
		e.preventDefault();
	}

	function agregarNota(e){
		var titulo = $titulo.val(),
			link = $link.val(),
			texto = $texto.val(),
			clone = $primeraNota
							.clone()
							.css('display', 'block');

			if ($('#link').val().length>1){
				clone.find('a').attr('href', link);
			}else {
				clone.find('a').remove();
			}

		clone.find('h2').text(titulo);
		clone.find('p').text(texto);
		clone.hide();
		$aviso.remove();
		$notas.prepend(clone);
		clone.slideDown();
		e.preventDefault();
		$titulo.val('');
		$link.val('');
		$texto.val('');
	}

	$('header a').click(mostrarForm);
	$('.icon-close').click(mostrarForm);
	$('#formulario').on('submit', agregarNota);
	$('#formulario').on('submit', mostrarForm);

});
