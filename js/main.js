const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);
setTimeout(() => {
	wrapper.style.transform = 'scale(1.05)'
}, 1);

const wrapTitle = document.createElement('div');
wrapTitle.classList.add('wrap-title');
const wrapTitleContent = document.createElement('h1');
wrapTitleContent.classList.add('wrap-title-content');
wrapTitleContent.innerHTML = 'Введите желаемую длинну матрици<br>(Стороны будут пропорциональны друг другу(Квадрат), не менее 2 и не более 15)';
wrapTitle.appendChild(wrapTitleContent);
wrapper.appendChild(wrapTitle);

const wrapLength = document.createElement('div');
wrapLength.classList.add('wrap-length');
const wrapInputLengthContent = document.createElement('input');
wrapInputLengthContent.classList.add('wrap-input-length-content');
wrapLength.appendChild(wrapInputLengthContent);
const wrapBtnLengthContent = document.createElement('button');
wrapBtnLengthContent.classList.add('wrap-btn-length-content');
wrapBtnLengthContent.innerHTML = 'Далее';
wrapLength.appendChild(wrapBtnLengthContent);
wrapper.appendChild(wrapLength);

wrapper.classList.add('display');

let matrixLength = 0;
let matrixRigthUpCorner = 0;
let matrixRow = 0;
let matrixCol = 0;
wrapBtnLengthContent.addEventListener('click', function () {
	switch (wrapTitleContent.innerHTML) {
		case 'Введите желаемую длинну матрици<br>(Стороны будут пропорциональны друг другу(Квадрат), не менее 2 и не более 15)':
			matrixLength = Number(wrapInputLengthContent.value);
			if (matrixLength <= 15 && matrixLength > 1) {
				wrapInputLengthContent.value = '';
				wrapTitleContent.innerHTML = 'Введите угловой элемент квадрата вверх справа(От 0 до 9)';
			} else {
				alert('Вы ввели некоректное значение');
				wrapInputLengthContent.value = '';
			};
			break;
		case 'Введите угловой элемент квадрата вверх справа(От 0 до 9)':
			matrixRigthUpCorner = Number(wrapInputLengthContent.value);
			if (matrixRigthUpCorner < 10 && matrixRigthUpCorner >= 0) {
				wrapInputLengthContent.value = '';
				wrapTitleContent.innerHTML = `Введите номер строки для подсчета суммы(Не более/менее ${matrixLength})`;
			} else {
				alert('Вы ввели некоректное значение');
				wrapInputLengthContent.value = '';
			};
			break;
		case `Введите номер строки для подсчета суммы(Не более/менее ${matrixLength})`:
			matrixRow = Number(wrapInputLengthContent.value);
			if (matrixRow <= matrixLength && matrixRow > 0) {
				wrapInputLengthContent.value = '';
				wrapTitleContent.innerHTML = `Введите номер столбца для подсчета суммы(Не более/менее ${matrixLength})`;
			} else {
				alert('Вы ввели некоректное значение');
				wrapInputLengthContent.value = '';
			};
			break;
		case `Введите номер столбца для подсчета суммы(Не более/менее ${matrixLength})`:
			matrixCol = Number(wrapInputLengthContent.value);
			if (matrixCol <= matrixLength && matrixCol > 0) {
				wrapTitleContent.innerHTML = '';
				wrapLength.remove();
				console.log(matrixLength);
				console.log(matrixRigthUpCorner);
				console.log(matrixRow);
				console.log(matrixCol);
				wrapper.classList.remove('display');
				matrix();
			} else {
				alert('Вы ввели некоректное значение');
				wrapInputLengthContent.value = '';
			};
			break;
	
		default:
			break;
	}
})

function matrix() {
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
	for (let i = 0; i < matrixLength; i++) {
		matrix[i] = []
		for (let j = 0; j < matrixLength; j++) {
			if (i == 0 && j == matrixLength - 1) {
				matrix[i][j] = matrixRigthUpCorner;
				wrapMatrixContent.innerHTML += `${matrixRigthUpCorner} `;
			} else {
				const value = Math.round(Math.random()*9);
				matrix[i][j] = value;
				wrapMatrixContent.innerHTML += `${value} `;
			}
		};
		wrapMatrixContent.innerHTML += '<br>';
	};

	const myBtns = document.querySelectorAll('.btn');
	console.log(myBtns);

	myBtns[0].addEventListener('click', function () {
		wrapMatrixContent.innerHTML = '';
		let sum = 0;
		for (let i = 0; i < matrixLength; i++) {
			for (let j = 0; j < matrixLength; j++) {
				if (i === j) {
					sum += matrix[i][j];
					wrapMatrixContent.innerHTML += `<span style="color: darkviolet;">${matrix[i][j]} </span>`;
				} else {
					wrapMatrixContent.innerHTML += `${matrix[i][j]} `;
				};
			};
			wrapMatrixContent.innerHTML += '<br>';
		};
		console.log(matrix);
		wrapMatrixSum.innerHTML = `Сумма главной диагонали: ${sum}`;
	});
	myBtns[1].addEventListener('click', function () {
		wrapMatrixContent.innerHTML = '';
		let sum = 0;
		for (let i = 0; i < matrixLength; i++) {
			for (let j = 0; j < matrixLength; j++) {
				if (i + j == (matrixLength - 1)) {
					sum += matrix[i][j];
					wrapMatrixContent.innerHTML += `<span style="color: darkviolet;">${matrix[i][j]} </span>`;
				} else {
					wrapMatrixContent.innerHTML += `${matrix[i][j]} `;
				};
			};
			wrapMatrixContent.innerHTML += '<br>';
		};
		console.log(matrix);
		wrapMatrixSum.innerHTML = `Сумма побочной диагонали: ${sum}`;
	});
	myBtns[2].addEventListener('click', function () {
		wrapMatrixContent.innerHTML = '';
		let sum = 0;
		for (let i = 0; i < matrixLength; i++) {
			for (let j = 0; j < matrixLength; j++) {
				if(i < j) {
					sum += matrix[i][j];
					wrapMatrixContent.innerHTML += `<span style="color: darkviolet;">${matrix[i][j]} </span>`;
				} else {
					wrapMatrixContent.innerHTML += `${matrix[i][j]} `;
				};
			};
			wrapMatrixContent.innerHTML += '<br>';
		};
		console.log(matrix);
		wrapMatrixSum.innerHTML = `Сумма половины матрицы без главной диагонали сверху справа: ${sum}`;
	});
	myBtns[3].addEventListener('click', function () {
		wrapMatrixContent.innerHTML = '';
		let sum = 0;
		for (let i = 0; i < matrixLength; i++) {
			for (let j = 0; j < matrixLength; j++) {
				if (i <= j) {
					sum += matrix[i][j];
					wrapMatrixContent.innerHTML += `<span style="color: darkviolet;">${matrix[i][j]} </span>`;
				} else {
					wrapMatrixContent.innerHTML += `${matrix[i][j]} `;
				};
			};
			wrapMatrixContent.innerHTML += '<br>';
		};
		console.log(matrix);
		wrapMatrixSum.innerHTML = `Сумма половины матрицы с главной диагональю сверху справа: ${sum}`;
	});
	myBtns[4].addEventListener('click', function () {
		wrapMatrixContent.innerHTML = '';
		let sum = 0;
		for (let i = 0; i < matrixLength; i++) {
			for (let j = 0; j < matrixLength; j++) {
				if (i > j) {
					sum += matrix[i][j];
					wrapMatrixContent.innerHTML += `<span style="color: darkviolet;">${matrix[i][j]} </span>`;
				} else {
					wrapMatrixContent.innerHTML += `${matrix[i][j]} `;
				};
			};
			wrapMatrixContent.innerHTML += '<br>';
		};
		console.log(matrix);
		wrapMatrixSum.innerHTML = `Сумма половины матрицы без главной диагонали снизу слева: ${sum}`;
	});
	myBtns[5].addEventListener('click', function () {
		wrapMatrixContent.innerHTML = '';
		let sum = 0;
		for (let i = 0; i < matrixLength; i++) {
			for (let j = 0; j < matrixLength; j++) {
				if (i >= j) {
					sum += matrix[i][j];
					wrapMatrixContent.innerHTML += `<span style="color: darkviolet;">${matrix[i][j]} </span>`;
				} else {
					wrapMatrixContent.innerHTML += `${matrix[i][j]} `;
				};
			};
			wrapMatrixContent.innerHTML += '<br>';
		};
		console.log(matrix);
		wrapMatrixSum.innerHTML = `Сумма половины матрицы с главной диагональю снизу слева: ${sum}`;
	});
	myBtns[6].addEventListener('click', function () {
		wrapMatrixContent.innerHTML = '';
		let sum = 0;
		for (let i = 0; i < matrixLength; i++) {
			for (let j = 0; j < matrixLength; j++) {
				if (i + j < (matrixLength - 1)) {
					sum += matrix[i][j];
					wrapMatrixContent.innerHTML += `<span style="color: darkviolet;">${matrix[i][j]} </span>`;
				} else {
					wrapMatrixContent.innerHTML += `${matrix[i][j]} `;
				};
			};
			wrapMatrixContent.innerHTML += '<br>';
		};
		console.log(matrix);
		wrapMatrixSum.innerHTML = `Сумма половины матрицы без побочной диагонали сверху слева: ${sum}`;
	});
	myBtns[7].addEventListener('click', function () {
		wrapMatrixContent.innerHTML = '';
		let sum = 0;
		for (let i = 0; i < matrixLength; i++) {
			for (let j = 0; j < matrixLength; j++) {
				if (i + j <= (matrixLength - 1)) {
					sum += matrix[i][j];
					wrapMatrixContent.innerHTML += `<span style="color: darkviolet;">${matrix[i][j]} </span>`;
				} else {
					wrapMatrixContent.innerHTML += `${matrix[i][j]} `;
				};
			};
			wrapMatrixContent.innerHTML += '<br>';
		};
		console.log(matrix);
		wrapMatrixSum.innerHTML = `Сумма половины матрицы с побочной диагональю сверху слева: ${sum}`;
	});
	myBtns[8].addEventListener('click', function () {
		wrapMatrixContent.innerHTML = '';
		let sum = 0;
		for (let i = 0; i < matrixLength; i++) {
			for (let j = 0; j < matrixLength; j++) {
				if (i + j > (matrixLength - 1)) {
					sum += matrix[i][j];
					wrapMatrixContent.innerHTML += `<span style="color: darkviolet;">${matrix[i][j]} </span>`;
				} else {
					wrapMatrixContent.innerHTML += `${matrix[i][j]} `;
				};
			};
			wrapMatrixContent.innerHTML += '<br>';
		};
		console.log(matrix);
		wrapMatrixSum.innerHTML = `Сумма половины матрицы без побочной диагонали внизу справа: ${sum}`;
	});
	myBtns[9].addEventListener('click', function () {
		wrapMatrixContent.innerHTML = '';
		let sum = 0;
		for (let i = 0; i < matrixLength; i++) {
			for (let j = 0; j < matrixLength; j++) {
				if (i == (matrixRow - 1)) {
					sum += matrix[i][j];
					wrapMatrixContent.innerHTML += `<span style="color: darkviolet;">${matrix[i][j]} </span>`;
				} else {
					wrapMatrixContent.innerHTML += `${matrix[i][j]} `;
				};
			};
			wrapMatrixContent.innerHTML += '<br>';
		};
		console.log(matrix);
		wrapMatrixSum.innerHTML = `Сумма срока: ${sum}`;
	});
	myBtns[10].addEventListener('click', function () {
		wrapMatrixContent.innerHTML = '';
		let sum = 0;
		for (let i = 0; i < matrixLength; i++) {
			for (let j = 0; j < matrixLength; j++) {
				if (j == (matrixCol - 1)) {
					sum += matrix[i][j];
					wrapMatrixContent.innerHTML += `<span style="color: darkviolet;">${matrix[i][j]} </span>`;
				} else {
					wrapMatrixContent.innerHTML += `${matrix[i][j]} `;
				};
			};
			wrapMatrixContent.innerHTML += '<br>';
		};
		console.log(matrix);
		wrapMatrixSum.innerHTML = `Сумма столбца: ${sum}`;
	});
};