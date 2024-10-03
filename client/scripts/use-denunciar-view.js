function useDenunciarView() {
	const alertaMensagem = (msg) => `<div class="alert alert-success" role="alert">${msg}</div>`;

	const nenhumFuncionario = () => `
		<div class="col-12">
			<div class="alert alert-secondary mb-0" role="alert">
				Nenhum setor cadastrado
			</div>
		</div>
	`;

	const listaFuncionarios = (funcionarios) => funcionarios.map(funcionario => `
		<div class="col-12 col-md-6">
			<input onchange="atribuiFuncionario()" type="radio" class="btn-check" name="funcionario" required id="funcionario-${funcionario.codigo}" value="${funcionario.codigo}">
			<label class="btn btn-outline-secondary btn-lg" style="width: 100%" for="funcionario-${funcionario.codigo}">${funcionario.nome}</label>
		</div>
	`).join('');

	const listaDenuncias = (denuncias) => denuncias.map(denuncia => `
		<div class="col-12 col-md-6">
			<input onchange="atribuiDenuncia()" type="radio" class="btn-check" name="denuncia" required id="denuncia-${denuncia.codigo}" value="${denuncia.codigo}">
			<label class="btn btn-outline-secondary btn-lg" style="width: 100%" for="denuncia-${denuncia.codigo}">${denuncia.nome}</label>
		</div>		
	`).join('');

	const nenhumaDenuncia = () => `
		<div class="col-12">
			<div class="alert alert-secondary mb-0" role="alert">
				Nenhum tipo de denúncia encontrado
			</div>
		</div>
	`;

	const desenhaFuncionarios = (funcionarios) => funcionarios?.length > 0 ? listaFuncionarios(funcionarios) : nenhumFuncionario();

	const desenhaDenuncias = (denuncias) => denuncias?.length > 0 ? listaDenuncias(denuncias) : nenhumaDenuncia();

	return {
		desenhaFuncionarios,
		alertaMensagem,
		desenhaDenuncias
	}

}