function toggleEditButtons1() {
    // Chọn tất cả các ô và tiêu đề ở cột 5, 6, 7
    var targetColumns = document.querySelectorAll('td:nth-child(5), th:nth-child(5), td:nth-child(6), th:nth-child(6), td:nth-child(7), th:nth-child(7)');

    // Lặp qua từng phần tử và thay đổi thuộc tính display
    targetColumns.forEach(function (column) {
        // Thay đổi thuộc tính display
        column.style.display = 'table-cell';
    });
    var button1 = document.getElementById('button1');
    var button2 = document.getElementById('button2');

    button1.style.display = 'none';
    button2.style.display = 'block';
}
function toggleEditButtons2() {
    var existingForm = document.getElementsByTagName('form')[0];
    if (existingForm) {
        existingForm.parentNode.removeChild(existingForm);
        removeEmptyRows();
    }
    // Chọn tất cả các ô và tiêu đề ở cột 5, 6, 7
    var targetColumns = document.querySelectorAll('td:nth-child(5), th:nth-child(5), td:nth-child(6), th:nth-child(6), td:nth-child(7), th:nth-child(7)');

    // Lặp qua từng phần tử và thay đổi thuộc tính display
    targetColumns.forEach(function (column) {
        // Thay đổi thuộc tính display
        column.style.display = 'none';
    });
    var button1 = document.getElementById('button1');
    var button2 = document.getElementById('button2');

    button1.style.display = 'block';
    button2.style.display = 'none';
}
function edit(row, email) {
    var existingForm = document.getElementsByTagName('form')[0];
    if (existingForm) {
        existingForm.parentNode.removeChild(existingForm);
        removeEmptyRows();
    }
    var table = document.getElementsByTagName('table')[0];
    var selectedRow = table.rows[row];

    // Tạo một form để chỉnh sửa
    var form = document.createElement('form');
    form.method = 'POST';
    form.action = 'update.php';

    // Tạo input cho mỗi ô dữ liệu để chỉnh sửa
    for (var i = 0; i < selectedRow.cells.length - 3; i++) {
        var input = document.createElement('input');
        input.type = 'text';
        input.name = 'data' + i;
        input.value = selectedRow.cells[i].innerHTML;
        form.appendChild(input);
    }

    // Thêm input ẩn để truyền email
    var emailInput = document.createElement('input');
    emailInput.type = 'hidden';
    emailInput.name = 'email';
    emailInput.value = email;
    form.appendChild(emailInput);

    // Tạo nút submit để cập nhật dữ liệu
    var submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Cập nhật';
    form.appendChild(submit);

    // Tạo một dòng mới
    var newRow = table.insertRow(row + 1);
    var newCell = newRow.insertCell(0);
    newCell.colSpan = 7;
    // Chèn form vào ô mới
    newCell.appendChild(form);
}

function removeEmptyRows() {
    var table = document.getElementsByTagName('table')[0];
    for (var i = 0; i < table.rows.length; i++) {
        var isEmpty = true;
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            var cellData = table.rows[i].cells[j].innerHTML.trim();
            if (cellData) {
                isEmpty = false;
                break;
            }
        }
        if (isEmpty) {
            table.deleteRow(i);
        }
    }
}
// Thêm hàm để gửi yêu cầu xóa hàng
function deleteRow(email) {
    var form = document.createElement('form');
    form.method = 'POST';
    form.action = 'delete.php';
    var emailInput = document.createElement('input');
    emailInput.type = 'hidden';
    emailInput.name = 'email';
    emailInput.value = email;
    form.appendChild(emailInput);
    document.body.appendChild(form);
    form.submit();
}

// Thêm hàm để gửi yêu cầu thêm dữ liệu mới
function addNewRow(email) {
    var existingForm = document.getElementsByTagName('form')[0];
    if (existingForm) {
        existingForm.parentNode.removeChild(existingForm);
        removeEmptyRows();
    }
    var table = document.getElementsByTagName('table')[0];
    var form = document.createElement('form');
    form.method = 'POST';
    form.action = 'add.php';
    // Tạo input cho mỗi ô dữ liệu để chỉnh sửa
    for (var i = 0; i < 4; i++) {
        var input = document.createElement('input');
        input.type = 'text';
        input.name = 'data' + i;
        form.appendChild(input);
    }

    // Thêm input ẩn để truyền email
    var emailInput = document.createElement('input');
    emailInput.type = 'hidden';
    emailInput.name = 'email';
    emailInput.value = email;
    form.appendChild(emailInput);

    // Tạo nút submit để cập nhật dữ liệu
    var submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Thêm';
    form.appendChild(submit);

    // Chèn form vào ô mới
    var newRow = table.insertRow(table.rows.length);
    var newCell = newRow.insertCell(0);
    newCell.colSpan = table.rows[0].cells.length;
    newCell.appendChild(form);
    scrollToBottom();
}
function scrollToBottom(){
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}