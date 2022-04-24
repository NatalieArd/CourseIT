
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

var lastResFind = ""; 
var copy_page = ""; 
function TrimStr(s) {
	s = s.replace(/^\s+/g, '');
	return s.replace(/\s+$/g, '');
}

function FindOnPage() { 

	var obj = window.document.getElementById('text-to-find');
	var textToFind;

	if (obj) {
		textToFind = TrimStr(obj.value).toLocaleLowerCase(); 
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

var modal = document.getElementById('id01');

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

function incr(id) {
	var el = document.getElementById(id);
	var numb = el.value;
if (numb<99)
	numb++;
	el.value = numb;
}

function decr(id) {
	var el = document.getElementById(id);
	var numb = el.value;
if (numb>0)
	numb--;
	el.value = numb;

}

function wishClick(id) {
	var el = document.getElementById(id);
	el.style.background = !el.style.background ? 'url("../img/icons/heart_active.svg") no-repeat' : '';
}