<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Danh sách sinh viên</title>
    <script src="tieuluan.js"></script>
    <link rel="stylesheet" type="text/css" href="tieuluan.css">

</head>

<body>
    <input type="text" id="search-bar" oninput="searchStudent()" placeholder="Tìm kiếm sinh viên theo topics nghiên cứu">
    <?php
    // Mở file csv
    $fp = fopen('student.csv', 'r');

    // Đọc dòng đầu tiên chứa tiêu đề các cột
    $headers = fgetcsv($fp);

    // Tạo một bảng html để hiển thị dữ liệu
    echo '<table>';
    echo '<tr>';

    // In ra tiêu đề các cột
    foreach ($headers as $header) {
        echo '<th>' . htmlspecialchars($header) . '</th>';
    }

    // Thêm một cột cho nút sửa
    echo '<th class="edit">Sửa</th>';
    echo '<th class="edit">Thêm</th>';
    echo '<th class="edit">Xóa</th>';

    echo '</tr>';

    // Đọc từng dòng dữ liệu từ file csv
    $row_number = 1;
    while ($row = fgetcsv($fp)) {
        echo '<tr>';

        // In ra giá trị của từng trường
        foreach ($row as $value) {
            echo '<td>' . htmlspecialchars($value) . '</td>';
        }

        // Truyền giá trị hàng và email vào hàm edit khi click vào nút "Sửa"
        echo '<td><button class="edit" onclick="edit(' . $row_number . ', \'' . $row[3] . '\')">Sửa</button></td>';
        echo '<td><button class="edit" onclick="addNewRow(\'' . $row[3] . '\')">Thêm</button></td>';
        echo '<td><button class="edit" onclick="deleteRow( \'' . $row[3] . '\' )">Xóa</button></td>';

        echo '</tr>';
        $row_number++;
    }

    echo '<button id="button1" onclick="toggleEditButtons1()">Sửa</button>';
    echo '<button id="button2" style="display:none;" onclick="toggleEditButtons2()">Quay lại</button>';
    // Đóng bảng html
    echo '</table>';

    // Đóng file csv
    fclose($fp);
    ?>
</body>

</html>
