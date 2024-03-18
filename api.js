function getSelectedExamList1() {

  const dropdown = document.getElementById("exams1");
  const dropdownSecond = document.getElementById("exams2");

  const selectedExam = dropdown.value;
  var options = dropdownSecond.getElementsByTagName('option');
  for (var i = 0; i < options.length; i++) {
    options[i].disabled = false;
  }
  if (selectedExam) {
    var optionToDisable = dropdownSecond.querySelector('option[value="' + selectedExam + '"]');
    if (optionToDisable) {
      optionToDisable.disabled = true;
    }
  }



  fetch('data.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data.examsdata)
      console.log(data.examsdata[selectedExam]);
      if (Array.isArray(data.examsdata[selectedExam])) {
        data.examsdata[selectedExam] = data.examsdata[selectedExam][0]
      }
      let newAges = Object.values(data.examsdata[selectedExam]);
      const ageCells = document.querySelectorAll('#tableBody .first');
      ageCells.forEach((ageCell, index) => {
        ageCell.textContent = newAges[index];
      });
    })
    .catch(error => {
      console.error('There was a problem fetching the JSON file:', error);
    });


}







function getSelectedExamList2() {

  const dropdown = document.getElementById("exams2");
  const dropdownFirst = document.getElementById("exams1");

  const selectedExam = dropdown.value;

  var options = dropdownFirst.getElementsByTagName('option');
  for (var i = 0; i < options.length; i++) {
    options[i].disabled = false;
  }
  if (selectedExam) {
    var optionToDisable = dropdownFirst.querySelector('option[value="' + selectedExam + '"]');
    if (optionToDisable) {
      optionToDisable.disabled = true;
    }
  }


  fetch('data.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data.examsdata)
      console.log(data.examsdata[selectedExam]);
      if (Array.isArray(data.examsdata[selectedExam])) {
        data.examsdata[selectedExam] = data.examsdata[selectedExam][0]
      }
      let newAges = Object.values(data.examsdata[selectedExam]);
      const ageCells = document.querySelectorAll('#tableBody .second');
      ageCells.forEach((ageCell, index) => {
        ageCell.textContent = newAges[index];
      });
    })
    .catch(error => {
      console.error('There was a problem fetching the JSON file:', error);
    });
}