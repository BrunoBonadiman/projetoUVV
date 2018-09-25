
window.onload = Jogadas;

var Jogador = 0;
var Placar = 0;
var Maquina = 0;

function Jogadas(value)
{
	var jogando = Math.floor(Math.random() * 3 + 1);
	if(jogando == 1 && value == 1)
	{
		++Placar;
		document.getElementById('Placar').innerHTML = Placar;
	}
	else if(jogando == 1 && value == 2)
	{
		++Jogador;
		document.getElementById('Jogador').innerHTML = Jogador;
	}
	else if(jogando == 1 && value == 3)
	{
		++Maquina;
		document.getElementById('Maquina').innerHTML = Maquina;
	}
	else if(jogando == 2 && value == 1)
	{
		++Maquina;
		document.getElementById('Maquina').innerHTML = Maquina;
	}
	else if(jogando == 2 && value == 2)
	{
		++Placar;
		document.getElementById('placar').innerHTML = Placar;
	}
	else if(jogando == 2 && value == 3)
	{
		++Jogador;
		document.getElementById('Jogador').innerHTML = Jogador;
	}
	else if(jogando == 3 && value == 1)
	{
		++Jogador;
		document.getElementById('Jogador').innerHTML = Jogador;
	}
	else if(jogando == 3 && value == 2)
	{
		++ia;
		document.getElementById('Maquina').innerHTML = Maquina
	}
	else if(jogando == 3 && value == 3)
	{
		++Placar;
		document.getElementById('Placar').innerHTML = Placar;
	}
}
 function reload()
 {
 	parent.window.document.location.href = '';
 }
