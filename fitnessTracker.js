// Variables for BMR Calculator
let weight, height, age, gender, selectGender, maleBMR, femaleBMR, validBMR, selectActivityLevel, activityLevel, TDEE, validTDEE, weightLoss, weightLossCalories;

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
        if (gender == "Male" && maleBMR !== NaN && maleBMR > 0 && weight > 0 && height > 0 && age > 0) {
            validBMR = true;
            document.getElementById("resultBMR").innerHTML = "Your BMR is: " + Math.round(maleBMR) + " calories."
        }
        else if (gender == "Female" && femaleBMR !== NaN && maleBMR > 0 && weight > 0 && height > 0 && age > 0) {
            validBMR = true;
            document.getElementById("resultBMR").innerHTML = "Your BMR is: " + Math.round(femaleBMR) + " calories."
        }
        else {
            validBMR = false;
            document.getElementById("resultBMR").innerHTML = "Sorry, one of the parameters is incorrect."
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
    validTDEE = false;
    if (validBMR == true && gender == "Male") {
        switch(activityLevel) {
            case "Blank":
                validTDEE = false;
                document.getElementById("resultTDEE").innerHTML = "Please select an activity level."
                break;
            case "Sedentary":
                validTDEE = true;
                TDEE = 1.2 * maleBMR;
                document.getElementById("resultTDEE").innerHTML = "Your TDEE is: " + Math.round(TDEE) + " calories."
                break;
            case "Slightly Active":
                validTDEE = true;
                TDEE = 1.375 * maleBMR;
                document.getElementById("resultTDEE").innerHTML = "Your TDEE is: " + Math.round(TDEE) + " calories."
                break;
            case "Moderately Active":
                validTDEE = true;
                TDEE = 1.55 * maleBMR;
                document.getElementById("resultTDEE").innerHTML = "Your TDEE is: " + Math.round(TDEE) + " calories."
                break;
            case "Very Active":
                validTDEE = true;
                TDEE = 1.725 * maleBMR;
                document.getElementById("resultTDEE").innerHTML = "Your TDEE is: " + Math.round(TDEE) + " calories."
                break;
            case "Extra Active":
                validTDEE = true;
                TDEE = 1.9 * maleBMR;
                document.getElementById("resultTDEE").innerHTML = "Your TDEE is: " + Math.round(TDEE) + " calories."
                break;
        }
    }
    else if (validBMR == true && gender == "Female") {
        switch(activityLevel) {
            case "Blank":
                validTDEE = false;
                document.getElementById("resultTDEE").innerHTML = "Please select an activity level."
                break;
            case "Sedentary":
                validTDEE = true;
                TDEE = 1.2 * femaleBMR;
                document.getElementById("resultTDEE").innerHTML = "Your TDEE is: " + Math.round(TDEE) + " calories."
                break;
            case "Slightly Active":
                validTDEE = true;
                TDEE = 1.375 * femaleBMR;
                document.getElementById("resultTDEE").innerHTML = "Your TDEE is: " + Math.round(TDEE) + " calories."
                break;
            case "Moderately Active":
                validTDEE = true;
                TDEE = 1.55 * femaleBMR;
                document.getElementById("resultTDEE").innerHTML = "Your TDEE is: " + Math.round(TDEE) + " calories."
                break;
            case "Very Active":
                validTDEE = true;
                TDEE = 1.725 * femaleBMR;
                document.getElementById("resultTDEE").innerHTML = "Your TDEE is: " + Math.round(TDEE) + " calories."
                break;
            case "Extra Active":
                validTDEE = true;
                TDEE = 1.9 * femaleBMR;
                document.getElementById("resultTDEE").innerHTML = "Your TDEE is: " + Math.round(TDEE) + " calories."
                break;
        }
    }
    else {
        validTDEE = false;
        document.getElementById("resultTDEE").innerHTML = "Sorry, you must calculate your BMR first."
    }
}

// Obtaining User Weight Loss Goal
function weightLossUpdate () {
    selectWeightLoss = document.getElementById("weightLossBox");
    weightLoss = selectWeightLoss.options[selectWeightLoss.selectedIndex].value;
    console.log(`Weight Loss Goal: ${weightLoss}`) // Check to make sure 'weightLoss' variable is being inputted correctly
}

// Weight Loss Calculator Function
function weightLossCalculator () {
    if (validTDEE == true) {
        switch(weightLoss) {
            case "Blank":
                document.getElementById("resultWeightLoss").innerHTML = "Please select a weight loss goal."
                break;
            case "Moderate":
                weightLossCalories = TDEE - (TDEE * 0.1);
                document.getElementById("resultWeightLoss").innerHTML = "Your caloric intake should be " + Math.round(weightLossCalories) + " calories."
                break;
            case "Aggressive":
                weightLossCalories = TDEE - (TDEE * 0.15);
                document.getElementById("resultWeightLoss").innerHTML = "Your caloric intake should be " + Math.round(weightLossCalories) + " calories."
                break;
            case "More Aggressive":
                weightLossCalories = TDEE - (TDEE * 0.20);
                document.getElementById("resultWeightLoss").innerHTML = "Your caloric intake should be " + Math.round(weightLossCalories) + " calories."
                break;
        }
    }
    else {
        document.getElementById("resultWeightLoss").innerHTML = "Sorry, you must calculate your TDEE first."
    }
}