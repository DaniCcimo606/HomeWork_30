const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);
const wrapBtns = document.createElement('div');
wrapBtns.classList.add('wrap-btns');
wrapper.appendChild(wrapBtns);

const btns = ['main', 'side', 'upWithoutMain', 'upWithMain', 'downWithoutMain', 'downWithMain', 'upWithoutSide', 'upWithSide', 'downWithoutSide', 'sumC', 'sumK'];
const btnsLabel = ['Главная диагональ', 'Побочная диагональ', 'Верх без главной диагонали', 'Верх с главной диагональю', 'Низ бкз главной диагонали', 'Низ с главной диагональю', 'Верх без побочной диагонали', 'Верх с побочной диагональю', 'Низ без побочной диагонали', 'Сумма строки', 'Сумма столбца'];
for (let i = 0; i < btns.length; i++) {
	const btn = document.createElement('button');
	btn.classList.add('btn');
	btn.id = btns[i];
	btn.innerHTML = btnsLabel[i];
	wrapBtns.appendChild(btn);
	const span = document.createElement('span');
	span.classList.add('anim');
	btn.appendChild(span);
};

const wrapMatrix = document.createElement('div');
wrapMatrix.classList.add('wrap-matrix');
wrapper.appendChild(wrapMatrix);
const wrapMatrixContent = document.createElement('div');
wrapMatrixContent.classList.add('wrap-matrix-content');
wrapMatrix.appendChild(wrapMatrixContent);
const wrapMatrixSum = document.createElement('div');
wrapMatrixSum.classList.add('wrap-matrix-sum');
wrapMatrix.appendChild(wrapMatrixSum);

const matrix = [];
for (let i = 0; i < 5; i++) {
	matrix[i] = []
	for (let j = 0; j < 5; j++) {
		const value = Math.round(Math.random()*9);
		matrix[i][j] = value;
		wrapMatrixContent.innerHTML += `${value} `;
	};
	wrapMatrixContent.innerHTML += '<br>';
};

const myBtns = document.querySelectorAll('.btn');
console.log(myBtns);

myBtns[0].addEventListener('click', function () {
	wrapMatrixSum.innerHTML = '';
	let sum = 0;
	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 5; j++) {
			if (i === j) {
				sum += matrix[i][j];
			}
		}
	}
	console.log(matrix);
	wrapMatrixSum.innerHTML += `Сумма главной диагонали: ${sum}`;
});
myBtns[1].addEventListener('click', function () {
	wrapMatrixSum.innerHTML = '';
	let sum = 0;
	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 5; j++) {
			if (i + j == (5 - 1)) {
				sum += matrix[i][j];
			}
		}
	}
	console.log(matrix);
	wrapMatrixSum.innerHTML += `Сумма побочной диагонали: ${sum}`;
});
myBtns[2].addEventListener('click', function () {
	wrapMatrixSum.innerHTML = '';
	let sum = 0;
	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 5; j++) {
			if(i < j) {
				sum += matrix[i][j];
			}
		}
	}
	console.log(matrix);
	wrapMatrixSum.innerHTML += `Сумма половины матрицы без главной диагонали сверху справа: ${sum}`;
});
myBtns[3].addEventListener('click', function () {
	wrapMatrixSum.innerHTML = '';
	let sum = 0;
	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 5; j++) {
			if (i <= j) {
				sum += matrix[i][j];
			}
		}
	}
	console.log(matrix);
	wrapMatrixSum.innerHTML += `Сумма половины матрицы с главной диагональю сверху справа: ${sum}`;
});
myBtns[4].addEventListener('click', function () {
	wrapMatrixSum.innerHTML = '';
	let sum = 0;
	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 5; j++) {
			if (i > j) {
				sum += matrix[i][j];
			}
		}
	}
	console.log(matrix);
	wrapMatrixSum.innerHTML += `Сумма половины матрицы без главной диагонали снизу слева: ${sum}`;
});
myBtns[5].addEventListener('click', function () {
	wrapMatrixSum.innerHTML = '';
	let sum = 0;
	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 5; j++) {
			if (i >= j) {
				sum += matrix[i][j];
			}
		}
	}
	console.log(matrix);
	wrapMatrixSum.innerHTML += `Сумма половины матрицы с главной диагональю снизу слева: ${sum}`;
});
myBtns[6].addEventListener('click', function () {
	wrapMatrixSum.innerHTML = '';
	let sum = 0;
	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 5; j++) {
			if (i + j < (5 - 1)) {
				sum += matrix[i][j];
			}
		}
	}
	console.log(matrix);
	wrapMatrixSum.innerHTML += `Сумма половины матрицы без побочной диагонали сверху слева: ${sum}`;
});
myBtns[7].addEventListener('click', function () {
	wrapMatrixSum.innerHTML = '';
	let sum = 0;
	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 5; j++) {
			if (i + j <= (5 - 1)) {
				sum += matrix[i][j];
			}
		}
	}
	console.log(matrix);
	wrapMatrixSum.innerHTML += `Сумма половины матрицы с побочной диагональю сверху слева: ${sum}`;
});
myBtns[8].addEventListener('click', function () {
	wrapMatrixSum.innerHTML = '';
	let sum = 0;
	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 5; j++) {
			if (i + j > (5 - 1)) {
				sum += matrix[i][j];
			}
		}
	}
	console.log(matrix);
	wrapMatrixSum.innerHTML += `Сумма половины матрицы без побочной диагонали внизу справа: ${sum}`;
});
myBtns[9].addEventListener('click', function () {
	wrapMatrixSum.innerHTML = '';
	let sum = 0;
	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 5; j++) {
			if (i == (3 - 1)) {
				sum += matrix[i][j];
			}
		}
	}
	console.log(matrix);
	wrapMatrixSum.innerHTML += `Сумма срока: ${sum}`;
});
myBtns[10].addEventListener('click', function () {
	wrapMatrixSum.innerHTML = '';
	let sum = 0;
	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 5; j++) {
			if (j == (3 - 1)) {
				sum += matrix[i][j];
			}
		}
	}
	console.log(matrix);
	wrapMatrixSum.innerHTML += `Сумма столбца: ${sum}`;
});