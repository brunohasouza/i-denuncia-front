function useIndexView() {
	const alertaMensagem = (msg) => `<div class="alert alert-success" role="alert">${msg}</div>`

	const nenhumSetor = () => `
		<div class="col-12">
			<div class="alert alert-secondary mb-0" role="alert">
				Nenhum setor cadastrado
			</div>
		</div>
	`

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
	`).join('')

	const nenhumFuncionario = () => `
		<div class="alert alert-secondary mb-0" role="alert">
			Nenhum setor cadastrado
		</div>	
	`

	const listaFuncionarios = (funcionarios) => `
		<table class="table table-striped mb-0">
			<thead>
				<tr>
					<th style="width: 60px">#</th>
					<th>Nome</th>
					<th style="width: 96px">Ano Nasc.</th>
				</tr>
			</thead>
			<tbody>
				${funcionarios.map(funcionario => `
					<tr>
						<th class="py-3">${funcionario.codigo}</th>
						<td class="py-3">${funcionario.nome}</td>
						<td class="py-3 text-end">${funcionario.anoNascimento}</td>
					</tr>
				`).join('')}
			</tbody>
		</table>
	`

	const desenhaSetores = (setores) => setores?.length > 0 ? listaSetores(setores) : nenhumSetor()

	const desenhaFuncionarios = (funcionarios) => funcionarios?.length > 0 ? listaFuncionarios(funcionarios) : nenhumFuncionario()

	return {
		alertaMensagem,
		desenhaSetores,
		desenhaFuncionarios,
	}
}