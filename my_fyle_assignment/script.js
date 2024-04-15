closeForm();
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

var toggle1 = document.querySelector('.error-icon-1');
toggle1.style.display = 'none';
var toggle2 = document.querySelector('.error-icon-2');
toggle2.style.display = 'none';
var toggle3 = document.querySelector('.error-icon-3');
toggle3.style.display = 'none';

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const salary = document.getElementById('salary');
  const extraIncome = document.getElementById('extra');
  const deductions = document.getElementById('tax');
  const ageGroup = document.getElementById('age-group');
  const result = document.querySelector('.result');

  
  if (isNaN(salary.value) || salary.value === '') {
     
    toggle1.style.display = 'block';
    salary.focus();
    return;
  }

  
  if (isNaN(extraIncome.value) || extraIncome.value === '') {
    toggle2.style.display = 'block';
    extraIncome.focus();
    return;
  }

  
  if (isNaN(deductions.value) || deductions.value === '') {
    toggle3.style.display = 'block';
    deductions.focus();
    return;
  }

 
  const totalIncome = parseFloat(salary.value) + parseFloat(extraIncome.value)- parseFloat(deductions.value);

  
  let deductionRate = 0;
  if (ageGroup.value === 'option1') {
    deductionRate = 0.3;
  } else if (ageGroup.value === 'option2') {
    deductionRate = 0.4;
  } else if (ageGroup.value === 'option3') {
    deductionRate = 0.1;
  } else {
    alert('Please select a valid age group');
    return;
  }
  
  const totalDeductions = (totalIncome-800000) * deductionRate;
  let finalIncome = totalIncome - totalDeductions ;
  if(totalIncome<=800000){
    finalIncome = totalIncome;
  }
  
  result.innerHTML = `${finalIncome.toFixed(2)}`;
  document.getElementById("pop").style.display = 'block';
})
function closeForm(){
  document.getElementById("pop").style.display = 'none';
}



