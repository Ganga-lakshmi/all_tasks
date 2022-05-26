
function myfunc() {
	var b1, b2, b3, b4, b5, b6, b7, b8, b9;
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	b4 = document.getElementById("b4").value;
	b5 = document.getElementById("b5").value;
	b6 = document.getElementById("b6").value;
	b7 = document.getElementById("b7").value;
	b8 = document.getElementById("b8").value;
	b9 = document.getElementById("b9").value;

	// Checking if Player X won or not....


	if ((b1 == 'X') && (b2 == 'X') && ( b3 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won &#128520;";
		
		window.alert('Player X won');
		// myfunc_2();
	}
	else if ((b1 == 'X') && (b4 == 'X') && ( b7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won &#128514;";
		

		window.alert('Player X won');
		// myfunc_2();
	}
	else if (( b7 == 'X') && (b8 == 'X') && ( b9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won &#128513;";
		
		window.alert('Player X won');
		// myfunc_2();
	}
	else if (( b3 == 'X') && (b6 == 'X') && (b9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won &#128526;";
		
		window.alert('Player X won');
		// myfunc_2();
	}
	else if (( b1 == 'X') && (b5 == 'X') && ( b9 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won &#128540;";
		
		window.alert('Player X won');
		// myfunc_2();
	}
	else if (( b3 == 'X') && (b5 == 'X') && ( b7 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won &#129321;";
		
		window.alert('Player X won');
		// myfunc_2();
	}
	else if (( b2 == 'X') && (b5 == 'X') && ( b8 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won &#127947;";
		
		window.alert('Player X won');
		// myfunc_2();
	}
	else if (( b4 == 'X') && (b5 == 'X') && (b6 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won &#129311;";
		
		window.alert('Player X won');
		// myfunc_2();
	}

	// Checking of Player X finish
	// Checking for Player 0 starts, Is player 0 won
	else if ((b1 == '0') && (b2 == '0') && (b3 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won &#127831;";
		
		window.alert('Player 0 won');
		// myfunc_2();
	}
	else if ((b1 == '0') && (b4 == '0') && (b7 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won &#127848;";
		
		window.alert('Player 0 won');
		// myfunc_2();
	}
	else if ((b7 == '0') && (b8 == '0') && (b9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won &#127947;";
		
		window.alert('Player 0 won');
		// myfunc_2();
	}
	else if ((b3 == '0') && (b6 == '0') && (b9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won &#128520; ";
		
		window.alert('Player 0 won');
		// myfunc_2();
	}
	else if (( b1 == '0') && (b5 == '0') && ( b9 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won &#127867; ";
		
		window.alert('Player 0 won');
		// myfunc_2();
	}
	else if (( b3 == '0') && (b5 == '0') && ( b7 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won &#127919;";
		
		window.alert('Player 0 won');
		// myfunc_2();
	}
	else if (( b2 == '0') && (b5 == '0') && ( b8 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won &#128520;";
		
		window.alert('Player 0 won');
		// myfunc_2();
	}
	else if (( b4 == '0') && (b5 == '0') && ( b6 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won &#127942;";
		
		window.alert('Player 0 won');
		// myfunc_2();
	}



	// Checking of Player 0 finish
	// Here, Checking about Tie
	else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
		|| b2 == '0') && (b3 == 'X' || b3 == '0') &&
		(b4 == 'X' || b4 == '0') && (b5 == 'X' ||
		b5 == '0') && (b6 == 'X' || b6 == '0') &&
		(b7 == 'X' || b7 == '0') && (b8 == 'X' ||
		b8 == '0') && (b9 == 'X' || b9 == '0')) {
			document.getElementById('print')
				.innerHTML = "Match Tie &#127917;";
			window.alert('Match Tie');
			myfunc_2();
	}
	else {

		// Here, Printing Result
		if (flag == 1) {
			document.getElementById('print')
				.innerHTML = "Player X Turn &#128103;";
		}
		else {
			document.getElementById('print')
				.innerHTML = "Player 0 Turn &#128102;";
		}
	}
}



// Function to reset game
function myfunc_2() {
	location.reload();
	document.getElementById('b1').value = '';
	document.getElementById("b2").value = '';
	document.getElementById("b3").value = '';
	document.getElementById("b4").value = '';
	document.getElementById("b5").value = '';
	document.getElementById("b6").value = '';
	document.getElementById("b7").value = '';
	document.getElementById("b8").value = '';
	document.getElementById("b9").value = '';

}

// first user X is started , using the flag variables we are deciding which turn is now X or 0
flag = 1;
function button_1() {
	if (flag == 1) {
		
		document.getElementById("b1").value = "X";
		document.getElementById("b1").style.color = "red";
		document.getElementById("b1").style.backgroundColor = "yellow";

		flag = 0;
	}
	else {
		document.getElementById("b1").value = "0";
		document.getElementById("b1").style.color = "green";
		document.getElementById("b1").style.backgroundColor = "yellow";
		flag = 1;
	}
}

function button_2() {
	if (flag == 1) {
		document.getElementById("b2").value = "X";
		document.getElementById("b2").style.color = "red";
		document.getElementById("b2").style.backgroundColor = "yellow";
		flag = 0;
	}
	else {
		document.getElementById("b2").value = "0";
		document.getElementById("b2").style.color = "green";
		document.getElementById("b2").style.backgroundColor = "yellow";
		flag = 1;
	}
}

function button_3() {
	if (flag == 1) {
		document.getElementById("b3").value = "X";
		document.getElementById("b3").style.color = "red";
		document.getElementById("b3").style.backgroundColor = "yellow";
		flag = 0;
	}
	else {
		document.getElementById("b3").value = "0";
		document.getElementById("b3").style.color = "green";
		document.getElementById("b3").style.backgroundColor = "yellow";
				flag = 1;
	}
}

function button_4() {
	if (flag == 1) {
		document.getElementById("b4").value = "X";
		document.getElementById("b4").style.color = "red";
		document.getElementById("b4").style.backgroundColor = "yellow";
		flag = 0;
	}
	else {
		document.getElementById("b4").value = "0";
		document.getElementById("b4").style.color = "green";
		document.getElementById("b4").style.backgroundColor = "yellow";
		flag = 1;
	}
}

function button_5() {
	if (flag == 1) {
		document.getElementById("b5").value = "X";
		document.getElementById("b5").style.color = "red";
		document.getElementById("b5").style.backgroundColor = "yellow";
		flag = 0;
	}
	else {
		document.getElementById("b5").value = "0";
		document.getElementById("b5").style.color = "green";
		document.getElementById("b5").style.backgroundColor = "yellow";
		flag = 1;
	}
}

function button_6() {
	if (flag == 1) {
		document.getElementById("b6").value = "X";
		document.getElementById("b6").style.color = "red";
		document.getElementById("b6").style.backgroundColor = "yellow";
		flag = 0;
	}
	else {
		document.getElementById("b6").value = "0";
		document.getElementById("b6").style.color = "green";
		document.getElementById("b6").style.backgroundColor = "yellow";
		flag = 1;
	}
}

function button_7() {
	if (flag == 1) {
		document.getElementById("b7").value = "X";
		document.getElementById("b7").style.color = "red";
		document.getElementById("b7").style.backgroundColor = "yellow";
		flag = 0;
	}
	else {
		document.getElementById("b7").value = "0";
		document.getElementById("b7").style.color = "green";
		document.getElementById("b7").style.backgroundColor = "yellow";
		flag = 1;
	}
}

function button_8() {
	if (flag == 1) {
		document.getElementById("b8").value = "X";
		document.getElementById("b8").style.color = "red";
		document.getElementById("b8").style.backgroundColor = "yellow";
		flag = 0;
	}
	else {
		document.getElementById("b8").value = "0";
		document.getElementById("b8").style.color = "green";
		document.getElementById("b8").style.backgroundColor = "yellow";
		flag = 1;
	}
}

function button_9() {
	if (flag == 1) {
		document.getElementById("b9").value = "X";
		document.getElementById("b9").style.color = "red";
		document.getElementById("b9").style.backgroundColor = "yellow";
		flag = 0;
	}
	else {
		document.getElementById("b9").value = "0";
		document.getElementById("b9").style.color = "green";
		document.getElementById("b9").style.backgroundColor = "yellow";
		flag = 1;
	}
}
