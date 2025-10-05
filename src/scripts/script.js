const anos = [...new Set(dados.map(item => item.ano))];
const localidades = [...new Set(dados.map(item => item.localidade))];
const indicadores = [...new Set(dados.map(item => item.indicador))];

var anoSelecionado = 2017;

document.querySelectorAll(".anos button").forEach(botao => {
  botao.onclick = function(e) {
		document.querySelector(".anos button[class='selected']").className = "";
		anoSelecionado = Number(e.target.textContent);
		e.target.className = "selected";
		atualizarDashboard();
  };
});

function atualizarDashboard() {
	let divIndicadores = document.querySelectorAll(".dashboard > div");

	divIndicadores.forEach(divIndicador => {
		let indicador = divIndicador.getAttribute('aria-indicador');

		if (indicador != "Número de matrículas na educação (milhões)" && indicador != "Indicadores de habitação") {
			let dadosFiltrados = dados.filter(dado =>
				dado.indicador == indicador &&
				dado.ano == anoSelecionado
			);
			divIndicador.querySelector("span:nth-child(1)").textContent = dadosFiltrados[0].valor.toString().replace(".", ",");
			divIndicador.querySelector("span:nth-child(2)").textContent = dadosFiltrados[1].valor.toString().replace(".", ",");
			divIndicador.querySelector("span:nth-child(3)").textContent = dadosFiltrados[2].valor.toString().replace(".", ",");
		}
	})

	let preEscolar = "";
	let ensinoFundamental = "";
	let ensinoMedio = "";

	switch (anoSelecionado) {
		case 2017:
			preEscolar = "8,5";
			ensinoFundamental = "27,3";
			ensinoMedio = "7,9";
			break;
		case 2019:
			preEscolar = "8,9";
			ensinoFundamental = "26,9";
			ensinoMedio = "7,7";
			break;
		case 2021:
			preEscolar = "8,9";
			ensinoFundamental = "26,6";
			ensinoMedio = "7,8";
			break;
		case 2023:
			preEscolar = "9,4";
			ensinoFundamental = "26,1";
			ensinoMedio = "7,7";
			break;
	}

	var matriculas = document.querySelector(".dashboard div[aria-indicador='Número de matrículas na educação (milhões)']");

	matriculas.querySelector("span:nth-child(1)").textContent = preEscolar;
	matriculas.querySelector("span:nth-child(2)").textContent = ensinoFundamental;
	matriculas.querySelector("span:nth-child(3)").textContent = ensinoMedio;
}

atualizarDashboard();