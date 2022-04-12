function addCountry(countryName, capitalName) {
    countrysH[countryName] = capitalName;
}

function addinfo() {
    var addCount = prompt('Название страны');
    var addCapit = prompt('Название столицы');
    addCountry(addCount, addCapit);

    console.log(addCount, ':', countrysH[addCount]);
}

function getCountryInfo(countryName) {
    if (countryName in countrysH)
        return 'страна: ' + countryName + ' столица: ' + countrysH[countryName];
    else
        return 'нет информации о стране ' + countryName + '!';
}

function info() {
    var CountryN = prompt('Назвaние страны')
    alert(getCountryInfo(CountryN));
}

function listCountrys() {
    var res = "";
    for (var CN in countrysH)
        res += '\n' + getCountryInfo(CN);
    return res;
}

function list1() {
    alert(listCountrys());
}

function deleteCountry(countryName) {
    delete countrysH[countryName];
}

function deleteinfo() {
    var countrydel = prompt('Название страны');
    deleteCountry(countrydel);
}