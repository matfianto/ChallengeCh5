// pilihan dari komputer
function getCompChoice() {
	const comp = Math.random();
	if (comp < (1 / 3)) return 'rock';
	if (comp >= (1 / 3) && comp < (2 / 3)) return 'paper';
	return 'scissor';
}

// Rules
let result = null;

function getResult(comp, player) {
	if (player == comp) return result = 'DRAW';
	if (player == 'rock') return (comp == 'scissor') ? result = 'PLAYER 1 WIN' : result = 'COM WIN';
	if (player == 'paper') return (comp == 'rock') ? result = 'PLAYER 1 WIN' : result = 'COM WIN';
	if (player == 'scissor') return (comp == 'paper') ? result = 'PLAYER 1 WIN' : result = 'COM WIN';
}

/**** Game dimulai ****/

/* DOM */
const versus = document.querySelector('.versus h1');
const compBox = document.querySelectorAll('.greyBox.compImage');
const playerBox = document.querySelectorAll('.greyBox.playerImage');
const hasilClass = document.querySelector('.versus div div');
const hasilText = document.querySelector('.versus h5');

/* delay komputer */

function wait() {
	const start = new Date().getTime();
	let i = 0;

	setInterval(function () {

		if (new Date().getTime() - start >= 1000) {
			clearInterval;
			return;
		}

		compBox[i++].style.backgroundColor = '#c4c4c4';
		if (i == compBox.length) i = 0;

		hasilClass.classList.remove('result');

		versus.style.color = 'rgb(189,48,46)';

	}, );

	setTimeout(function () {
		setInterval(function () {
			if (new Date().getTime() - start >= 1000) {
				clearInterval;
				return;
			}

			compBox[i++].style.backgroundColor = '#9c835f';
			if (i == compBox.length) i = 0;
		}, );
	}, );
}


/* Mendapatkan pilihan player */
const player = document.querySelectorAll('.contentImage .player');
player.forEach(function (choice) {
	choice.addEventListener('click', function () {

		for (let i = 0; i < playerBox.length; i++) {
			playerBox[i].style.backgroundColor = '#9c835f';
		}


		if (result === null) {

			const compChoice = getCompChoice();


			const playerChoice = choice.className.substr(7, 7);


			result = getResult(compChoice, playerChoice);


			if (playerChoice == 'rock') {
				playerBox[0].style.backgroundColor = '#c4c4c4';
			} else if (playerChoice == 'paper') {
				playerBox[1].style.backgroundColor = '#c4c4c4';
			} else {
				playerBox[2].style.backgroundColor = '#c4c4c4';
			}


			wait();

			setTimeout(function () {

				versus.style.color = '#9c835f';


				hasilClass.classList.add('result');


				hasilText.innerHTML = result;
				if (result == "DRAW") {
					hasilText.style.backgroundColor = '#225c0e';
				} else {
					hasilText.style.backgroundColor = '#4c9654';
				}


				if (compChoice == 'rock') {
					compBox[0].style.backgroundColor = '#c4c4c4';
				} else if (compChoice == 'paper') {
					compBox[1].style.backgroundColor = '#c4c4c4';
				} else {
					compBox[2].style.backgroundColor = '#c4c4c4';
				}
			}, 1200);
		} else {
			alert('Silahkan anda tekan tombol refresh terlebih dahulu !');
		}
	});
});

/* Reset Button */
const reset = document.querySelector('.refresh');
reset.addEventListener('click', function () {

	hasilText.innerHTML = '';

	hasilClass.classList.remove('result');

	for (let i = 0; i < compBox.length; i++) {
		playerBox[i].style.backgroundColor = '#9c835f';
		compBox[i].style.backgroundColor = '#9c835f';
	}

	versus.style.color = 'rgb(189,48,46)';

	result = null;
});