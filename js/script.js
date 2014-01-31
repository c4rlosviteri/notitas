$(function(){

	var $formulario = $('#formulario'),
		$titulo = $('#titulo'),
		$link = $('#link'),
		$primeraNota = $('#nota').first(),
		$notas = $('#notas'),
		$texto = $('#texto');

	function mostrarForm () {
		$formulario.slideToggle();
		return false;
	}

	function agregarNota(){
		var titulo = $titulo.val(),
			link = $link.val(),
			texto = $texto.val(),
			clone = $primeraNota.clone();

		clone.find('h2').text(titulo);
		clone.find('a').attr('href', link);
		clone.find('p').text(texto);
		clone.hide();
		$notas.prepend(clone);
		clone.slideDown();
		return false;
	}

	$('header a').click(mostrarForm);
	$('.icon-cancel-circle').click(mostrarForm);
	$('#formulario').on('submit', agregarNota);
	$('#formulario').on('submit', mostrarForm);

});
