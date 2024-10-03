class SetoresView {
	_container = null;

	constructor(container) {
		this._container = container;
	}
	
	emptyAlert() {
		return `
			<div class="container">
				<div class="row">
					<div class="col-12">
						<div class="alert alert-secondary" role="alert">Nenhum setor encontrado</div>
					</div>
				</div>
			</div>
		`;
	}

	setores(setores) {
		const setoresHtml = setores.map(setor => `
			<div class="col-12 col-md-6">
				<div class="card" style="background-color: ${setor.cor};">
					<h5 class="card-header">${setor.nome}</h5>
					<div class="card-body">
						<p class="card-text">${setor.descricao}</p>
					</div>
					<div class="card-footer d-flex justify-content-end">
						<a class="btn btn-outline-light btn-sm" href="./detalhes.html?setor=${setor.codigo}">Detalhes</a>
					</div>
				</div>
			</div> 
		`).join('')

		return `
			<div class="container">
				<div class="row g-3">${setoresHtml}</div>
			</div>
		`
	}

	desenhar(setores) {
		this._container.innerHTML = setores?.length > 0 ? this.setores(setores) : this.emptyAlert();
	}
}