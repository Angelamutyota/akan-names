function akanName() {
    var cc = document.getElementById('century').nodeValue;
    var yy = document.getElementById('year').nodeValue;
    var mm = document.getElementById('month').nodeValue;
    var dd = document.getElementById('day').nodeValue;
    var gender = document.getElementById('gender').nodeValue;
    var dayOfTheWeek = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd )%7
}