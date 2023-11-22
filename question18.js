function calculateBMI(weight, height) {
  
    const bmi = weight / (height * height);
  
   
    let classification;
    if (bmi < 18.5) {
      classification = "Underweight";
    } 
    else if (bmi >= 18.5 && bmi < 25)
     {
      classification = "Normal Weight";
    } else if (bmi >= 25 && bmi < 30) 
    {
      classification = "Overweight";
    } else {
      classification = "Obese";
    }
  
    return {
      bmi: bmi.toFixed(2), 
      classification: classification
    };
  }
  
 
  const weight = 70; // in kilograms
  const height = 1.75; // in meters
  
  const result = calculateBMI(weight, height);
  console.log(`BMI: ${result.bmi}`);
  console.log(`Classification: ${result.classification}`);
  