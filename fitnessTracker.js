// Variables for BMR Calculator
let weight, height, age, gender, selectGender, maleBMR, femaleBMR, validBMR, selectActivityLevel, activityLevel, TDEE;

// Obtaining User Gender Function
function genderUpdate () {
    selectGender = document.getElementById("genderBox");
    gender = selectGender.options[selectGender.selectedIndex].value;
    console.log(`Gender: ${gender}`) // Check to make sure 'gender' variable is being inputted correctly
}

// BMR Calculator Function
function BMRCalculator () {
    weight = Number(document.getElementById("weightBox").value);
    console.log(`Weight: ${weight}`) // Check to make sure 'weight' variable is being inputted correctly
    height = Number(document.getElementById("heightBox").value);
    console.log(`Height: ${height}`) // Check to make sure 'height' variable is being inputted correctly
    age = Number(document.getElementById("ageBox").value);
    console.log(`Age: ${age}`) // Check to make sure 'age' variable is being inputted correctly

    maleBMR = weight * 4.5 + 6.25 * height * 2.54 - 5 * age + 5;
    femaleBMR = weight * 4.5 + 6.25 * height * 2.54 - 5 * age - 161;

    validBMR = false;

    if (!validBMR) {
        if ((gender == "Male" && isNaN(maleBMR)) || (gender == "Female" && isNaN(femaleBMR)) || (gender == "Blank") || (weight <= 0) || (height <= 0) || (age <= 0) || (maleBMR <= 0) || (femaleBMR <= 0)) {
            validBMR = false;
            document.getElementById("resultBMR").innerHTML = "Sorry, one of the parameters is incorrect."
        }
        else if (gender == "Male") {
            validBMR = true;
            document.getElementById("resultBMR").innerHTML = "Your BMR is: " + maleBMR + " calories."
        }
        else {
            validBMR = true;
            document.getElementById("resultBMR").innerHTML = "Your BMR is: " + femaleBMR + " calories."
        }
    }
}

// Obtaining User Activity Level Function
function activityLevelUpdate () {
    selectActivityLevel = document.getElementById("activityLevelBox");
    activityLevel = selectActivityLevel.options[selectActivityLevel.selectedIndex].value;
    console.log(`Activity Level: ${activityLevel}`) // Check to make sure 'activityLevel' variable is being inputted correctly
}

// TDEE Calculator Function
function TDEECalculator () {
    if (validBMR = true && gender == "Male") {
        switch(activityLevel) {
            case "Blank":
                break;
            case "Sedentary":
                TDEE = 1.2 * maleBMR;
                document.getElementById("resultTDEE").innerHTML = "Your TDEE is: " + TDEE + " calories."
                break;
            case "Slightly Active":
                TDEE = 1.375 * maleBMR;
                document.getElementById("resultTDEE").innerHTML = "Your TDEE is: " + TDEE + " calories."
                break;
            case "Moderately Active":
                TDEE = 1.55 * maleBMR;
                document.getElementById("resultTDEE").innerHTML = "Your TDEE is: " + TDEE + " calories."
                break;
            case "Very Active":
                TDEE = 1.725 * maleBMR;
                document.getElementById("resultTDEE").innerHTML = "Your TDEE is: " + TDEE + " calories."
                break;
            case "Extra Active":
                TDEE = 1.9 * maleBMR;
                document.getElementById("resultTDEE").innerHTML = "Your TDEE is: " + TDEE + " calories."
                break;
        }
    }
    else if (validBMR = true && gender == "Female") {
        switch(activityLevel) {
            case "Blank":
                break;
            case "Sedentary":
                TDEE = 1.2 * femaleBMR;
                document.getElementById("resultTDEE").innerHTML = "Your TDEE is: " + TDEE + " calories."
                break;
            case "Slightly Active":
                TDEE = 1.375 * femaleBMR;
                document.getElementById("resultTDEE").innerHTML = "Your TDEE is: " + TDEE + " calories."
                break;
            case "Moderately Active":
                TDEE = 1.55 * femaleBMR;
                document.getElementById("resultTDEE").innerHTML = "Your TDEE is: " + TDEE + " calories."
                break;
            case "Very Active":
                TDEE = 1.725 * femaleBMR;
                document.getElementById("resultTDEE").innerHTML = "Your TDEE is: " + TDEE + " calories."
                break;
            case "Extra Active":
                TDEE = 1.9 * femaleBMR;
                document.getElementById("resultTDEE").innerHTML = "Your TDEE is: " + TDEE + " calories."
                break;
        }
    }
    else {
        document.getElementById("resultTDEE").innerHTML = "Sorry, you must calculate your correct BMR first."
    }
}