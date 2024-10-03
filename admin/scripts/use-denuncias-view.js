function useDenunciasView() {
	const nenhumaDenuncia = () => `<div class="alert alert-secondary mb-0" role="alert">Nenhum funcionário cadastrado</div>`;

	const listaDenuncias = (denuncias) => `
		<table class="table table-bordered table-striped">
			<thead>
				<tr>
					<th style="width: 76px">Código</th>
					<th>Funcionário</th>
					<th style="width: 256px">Denúncia</th>
					<th style="width: 112px">Data</th>
				</tr>
			</thead>
			<tbody>
				${denuncias.map(denuncia => `
					<tr>
						<td class="text-end py-3">${denuncia.codigo}</td>
						<td class="py-3">${denuncia.funcionario.nome}</td>
						<td class="py-3">${denuncia.denuncia.nome}</td>
						<td class="py-3">${denuncia.dataCriacao}</td>
					</tr>
				`).join('')}
			</tbody>
		</table>
	`;

	const desenhaDenuncias = (denuncias) => denuncias?.length > 0 ? listaDenuncias(denuncias) : nenhumaDenuncia();

	return {
		desenhaDenuncias
	}
}