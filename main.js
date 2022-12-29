var tag = document.getElementById('result');
var button = document.querySelector('button');
button.addEventListener('click', function(){
tag.classList.toggle('result');
});
document.getElementById("btn").onclick = function myclick() {
  this.disabled = true;
}
  var weight, height, measure, bmi;

  function calculate() {
    weight = document.getElementById("wt").value;
    height = document.getElementById("ht").value;
 
    height /= 100;
    height *= height;
    bmi = weight/height;
    bmi = bmi.toFixed(1);
  
    if (bmi <= 18.4) {
      measure = "Your BMI is " + bmi + " which means " + "you are Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      measure = "Your BMI is " + bmi + " which means " + "You are Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
      measure = "Your BMI is " + bmi + " which means " + "You are Overweight";
    } else if (bmi >= 30) {
      measure = "Your BMI is " + bmi + " which means " + "You are Obese";
    }
    
  
    if (weight === 0 ) {
      document.getElementById("result").innerHTML = error;
    } else if (height === 0){
      document.getElementById("result").innerHTML = error;
    }
     else {
  
      document.getElementById("result").innerHTML = measure;
    }
    if (weight < 0) {
      document.getElementById("results").innerHTML = "Negative Values not Allowed";
    }
  }