class SetorService {
	url = `http://localhost:8080/setores`;
	headers = new Headers();

	constructor() {
		this.headers.append('Content-Type', 'application/json');
	}	

	listarSetores() {
		return new Promise((resolve, reject) => {
			const config = {
				method: 'GET',
				headers: this.headers,
			}

			fetch(this.url, config)
				.then(response => response.json())
				.then(setores => resolve(setores))
				.catch(error => reject(error))
		})
	}

	criarSetor(setor) {
		return new Promise((resolve, reject) => {
			const config = {
				method: 'POST',
				headers: this.headers,
				body: JSON.stringify(setor)
			}

			fetch(this.url, config)
				.then(() => resolve())
				.catch(error => reject(error))
		})
	}

	listarFuncionarios(codigo) {
		return new Promise((resolve, reject) => {
			const config = {
				method: 'GET',
				headers: this.headers,
			}

			fetch(`${this.url}/${codigo}/funcionarios`, config)
				.then(response => response.json())
				.then(funcionarios => resolve(funcionarios))
				.catch(error => reject(error))
		})
	}
}