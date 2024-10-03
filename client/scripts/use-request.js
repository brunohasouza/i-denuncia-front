function useRequest() {
	const baseUrl = `http://localhost:8080`;
	const headers = new Headers();
	headers.set('Content-Type', 'application/json');

	const get = (url) => new Promise((resolve, reject) => fetch(url, { method: 'GET', headers })
		.then(response => response.json())
		.then(response => resolve(response))
		.catch(error => reject(error))
	);

	const post = (url, body) => new Promise((resolve, reject) => fetch(url, {
			method: 'POST',
			headers,
			body: JSON.stringify(body)
		})
		.then(response => resolve(response))
		.catch(error => reject(error))
	);

	const listarSetores = () => get(`${baseUrl}/setores`);

	const listarFuncionarios = (setor) => get(`${baseUrl}/setores/${setor}/funcionarios`);

	const buscaSetor = (codigo) => get(`${baseUrl}/setores/${codigo}`);

	const listaDenuncias = () => get(`${baseUrl}/denuncias`);

	const criarDenuncia = (funcionario, denuncia) => post(`${baseUrl}/denuncias`, { funcionario, denuncia });

	return {
		listarSetores,
		listarFuncionarios,
		buscaSetor,
		listaDenuncias,
		criarDenuncia
	}
}