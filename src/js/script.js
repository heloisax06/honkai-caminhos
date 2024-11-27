const listaSelecaohonkai = document.querySelectorAll(".star");

listaSelecaohonkai.forEach(star => {
	console.log(star);
	star.addEventListener("click", () => {
		escondercartaocaminho();

		const idstarSelecionado = mostrarcartaocaminhoSelecionado(star);

		desativarstarNaListagem();
		ativarstarSelecionadoNaListagem(idstarSelecionado);

	})
})


function ativarstarSelecionadoNaListagem(idstarSelecionado) {
	const starSelecionadoNaListagem = document.getElementById(idstarSelecionado);
	starSelecionadoNaListagem.classList.add("ativo");
}

function desativarstarNaListagem() {
	const starativoNaListagem = document.querySelector(".ativo");
	starativoNaListagem.classList.remove("ativo");
}

function mostrarcartaocaminhoSelecionado(star) {
	const idstarSelecionado = star.attributes.id.value;
	const idDocartaocaminhoParaAbrir = "cartao-" + idstarSelecionado;
	const cartaocaminhoParaAbrir = document.getElementById(idDocartaocaminhoParaAbrir);
	cartaocaminhoParaAbrir.classList.add("aberto");
	return idstarSelecionado;
}

function escondercartaocaminho() {
	const cartaocaminhoaberto = document.querySelector(".aberto");
	console.log(cartaocaminhoaberto);
	cartaocaminhoaberto.classList.remove("aberto");
}

