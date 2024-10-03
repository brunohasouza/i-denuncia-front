function useIndexView() {
	const nenhumSetor = () => `
		<div class="col-12">
			<div class="alert alert-secondary mb-0" role="alert">
				Nenhum setor cadastrado
			</div>
		</div>
	`;

  	const listaSetores = (setores) => setores.map(setor => `
		<div class="col-12 col-md-6">
			<div class="card" style="background-color: ${setor.cor}">
				<h5 class="card-header">${setor.nome}</h5>
				<div class="card-body">
					<p class="card-text descricao">${setor.descricao}</p>
				</div>
				<div class="card-footer d-flex justify-content-end gap-4">
					<a class="btn btn-outline-light position-relative" href="/client/denunciar?setor=${setor.codigo}">
						Criar denúncia
					</a>
				</div>
			</div>
		</div>	
	`).join('');

	const desenhaSetores = (setores) => setores?.length > 0 ? listaSetores(setores) : nenhumSetor()

	return {
		desenhaSetores,
	}
}