function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
  }

function addRow() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = "19/03/2021";
    cell2.innerHTML = "17:00";
    cell3.innerHTML = "1 hour";
    cell4.innerHTML = "90";
    cell5.innerHTML = "30";
  }

