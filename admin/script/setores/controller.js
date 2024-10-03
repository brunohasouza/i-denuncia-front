class SetoresController {
	listarSetores(container) {
		const service = new SetorService();
		const view = new SetoresView(container);

		service.listarSetores()
			.then(setores => view.desenhar(setores))
			.catch(error => {
				console.error(error);
				view.desenhar([]);
			});
	}

	criarSetor(setor, onSuccess, onError) {
		const service = new SetorService();

		service.criarSetor(setor).then(onSuccess).catch(onError)
	}
}