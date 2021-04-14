function getAkanName(){
    let year = parseInt(document.getElementById("year").value);
    let month = parseInt(document.getElementById("month").value);
    let day = parseInt(document.getElementById("day").value);
    let dateOfBirth = new Date(year + "/" + month + "/" + day);
    let answer = dateOfBirth.getDay();
    let output = document.getElementById("displayAkanName");
    let gender = document.getElementById("gender");
    let male = document.getElementById("male");
    let female = document.getElementById("female");

    const days = ["Sunday", "Monday", "Tusday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const maleNames = ["kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    const femaleNames = ["Akosua", "Adwoa", "Abenna", "Akua", "Yaa", "Afua", "Ama"]


 if ((year < 0) || (year > 2020)) {
        output.innerHTML =  " please enter a valid year! "
    } else if ((month < 1) || (month > 12)) {
        output.innerHTML =  " please enter a valid month! "
    } else if (day < 0 || day > 31) {
        output.innerHTML = " please enter a valid day! "
    }

    if (gender == "male") {
         document.getElementById("result").innerHTML = "your Akan name is" + maleNames[answer];
    }
     else if (gender == "female") {
        document.getElementById("result").innerHTML = "your Akan name is" + femaleNames[answer];
   }
}