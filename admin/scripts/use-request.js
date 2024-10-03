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

	const criarSetor = (body) => post(`${baseUrl}/setores`, body);

	const listarFuncionarios = (setor) => get(`${baseUrl}/setores/${setor}/funcionarios`);

	const criarFuncionario = (body) => post(`${baseUrl}/funcionarios`, body);

	const buscaSetor = (codigo) => get(`${baseUrl}/setores/${codigo}`)

	const listarDenuncias = (setor, dataCriacao) => {
		console.log(dataCriacao)
		let url = `${baseUrl}/denuncias/${setor}`;

		if (dataCriacao) {
			url += `?data=${dataCriacao}`;
		}

		return get(url)
	};

	return {
		listarSetores,
		criarSetor,
		listarFuncionarios,
		criarFuncionario,
		listarDenuncias,
		buscaSetor
	}
}