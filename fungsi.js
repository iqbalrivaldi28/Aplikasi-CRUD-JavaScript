var selectedRow = null;

function onFormSubmit() {
  if (validate()) {
    var formData = readFormData();
    if (selectedRow == null) insertNewRecord(formData);
    else updateRecord(formData);
    resetForm();
  }
}

function readFormData() {
  var formData = {};
  formData['npm'] = document.getElementById('npm').value;
  formData['nama'] = document.getElementById('nama').value;
  formData['alamat'] = document.getElementById('alamat').value;
  formData['email'] = document.getElementById('email').value;
  return formData;
}

function insertNewRecord(data) {
  var table = document.getElementById('employeeList').getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.npm;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.nama;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.alamat;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.email;
  cell4 = newRow.insertCell(4);
  cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
  document.getElementById('npm').value = '';
  document.getElementById('nama').value = '';
  document.getElementById('alamat').value = '';
  document.getElementById('email').value = '';
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById('npm').value = selectedRow.cells[0].innerHTML;
  document.getElementById('nama').value = selectedRow.cells[1].innerHTML;
  document.getElementById('alamat').value = selectedRow.cells[2].innerHTML;
  document.getElementById('email').value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.npm;
  selectedRow.cells[1].innerHTML = formData.nama;
  selectedRow.cells[2].innerHTML = formData.alamat;
  selectedRow.cells[3].innerHTML = formData.email;
}

function onDelete(td) {
  if (confirm('Are you sure to delete this record ?')) {
    row = td.parentElement.parentElement;
    document.getElementById('employeeList').deleteRow(row.rowIndex);
    resetForm();
  }
}
function validate() {
  isValid = true;
  if (document.getElementById('npm').value == '') {
    isValid = false;
    document.getElementById('npmValidationError').classList.remove('hide');
  } else {
    isValid = true;
    if (!document.getElementById('npmValidationError').classList.contains('hide')) document.getElementById('npmValidationError').classList.add('hide');
  }
  return isValid;
}
