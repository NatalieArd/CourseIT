// Когда пользователь нажимает на кнопку, переключаться раскрывает содержимое */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
	var input, filter, ul, li, a, i;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	div = document.getElementById("myDropdown");
	a = div.getElementsByTagName("a");
	for (i = 0; i < a.length; i++) {
		txtЗначение = a[i].textСодержание || a[i].innerText;
		if (txtЗначение.toUpperCase().indexOf(filter) > -1) {
			a[i].style.display = "";
		} else {
			a[i].style.display = "none";
		}
	}
}

var lastResFind = ""; // последний удачный результат
var copy_page = ""; // копия страницы в ихсодном виде
function TrimStr(s) {
	s = s.replace(/^\s+/g, '');
	return s.replace(/\s+$/g, '');
}

function FindOnPage() { //ищет текст на странице, в параметр передается ID поля для ввода

	var obj = window.document.getElementById('text-to-find');
	var textToFind;

	if (obj) {
		textToFind = TrimStr(obj.value).toLocaleLowerCase(); //обрезаем пробелы
	} else {
		alert("Введенная фраза не найдена");
		return;
	}
	if (textToFind == "") {
		alert("Вы ничего не ввели");
		return;
	}

	if (copy_page.length > 0)
		document.body.innerHTML = copy_page;
	else copy_page = document.body.innerHTML;

	let status = false;

	Array.from(document.querySelector('#brands').getElementsByTagName('a')).forEach(element => {
		if (element.text.toLocaleLowerCase() == textToFind) {
			element.scrollIntoView();
			element.style.backgroundColor = 'grey';
			status = true;
		}
	});

	if (!status) {
		alert("Ничего не найдено, проверьте правильность ввода!");
		return;
	}

}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}