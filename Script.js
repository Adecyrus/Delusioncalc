function calculate() {
  var age = parseInt(document.getElementById('age').value);
  var race = document.getElementById('race').value;
  var height = parseInt(document.getElementById('height').value);
  var income = parseInt(document.getElementById('income').value);
  var excludeObese = document.getElementById('excludeObese').checked;

  // Calculating percentage based on statistics
  var totalPopulation = 100; // Assume 100%
  var percentageMeetStandard = 0;

  // Adjust percentage based on criteria
  if (age >= 20 && age <= 24) {
    if (income >= 15000 && income <= 24999) {
      percentageMeetStandard += 7.4;
    }
  } else if (age >= 25 && age <= 34) {
    if (income >= 25000) {
      percentageMeetStandard += 7.6;
    }
  } else if (age >= 35 && age <= 44) {
    if (income >= 35000) {
      percentageMeetStandard += 10.6;
    }
  } else if (age >= 45 && age <= 54) {
    if (income >= 50000) {
      percentageMeetStandard += 16.2;
    }
  } else if (age >= 55 && age <= 64) {
    if (income >= 75000) {
      percentageMeetStandard += 12.3;
    }
  } else if (age >= 65) {
    if (income >= 100000) {
      percentageMeetStandard += 16.4;
    }
  }

  if (excludeObese) {
    percentageMeetStandard *= (1 - 0.341 - 0.43); // Subtract overweight and obesity percentage
  }

  // Adjust percentage based on race
  if (race === 'white') {
    percentageMeetStandard *= (58552 / 75848); // White income percentage
  } else if (race === 'black') {
    percentageMeetStandard *= (47476 / 75848); // Black income percentage
  } else if (race === 'hispanic') {
    percentageMeetStandard *= (44520 / 75848); // Hispanic income percentage
  } else if (race === 'asian') {
    percentageMeetStandard *= (75348 / 75848); // Asian income percentage
  }

  // Adjust percentage based on height
  if (height >= 72) {
    percentageMeetStandard *= (1 - 0.145); // Subtract percentage above 6 feet tall
  }

  // Display result
  var resultElement = document.getElementById('result');
  resultElement.innerHTML = "The percentage of men in the United States meeting your standards is " + percentageMeetStandard.toFixed(2) + "%.";
}


// Update output values as user interacts with sliders
document.getElementById('age').addEventListener('input', function() {
  var value = this.value.split("-");
  document.getElementById('ageOutput').textContent = value[0];
});

document.getElementById('height').addEventListener('input', function() {
  var feet = Math.floor(this.value / 12);
  var inches = this.value % 12;
  document.getElementById('heightOutput').textContent = feet + "'" + inches + "\"";
});

document.getElementById('income').addEventListener('input', function() {
  var value = "$" + this.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById('incomeOutput').textContent = value;
});