<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $file = 'student.csv';
    $data = array($_POST['data0'], $_POST['data1'], $_POST['data2'], $_POST['data3']);
    $fp = fopen($file, 'a');
    fputcsv($fp, $data);
    fclose($fp);
    // Hiển thị thông báo cập nhật thành công
    echo "Dữ liệu đã được thêm thành công.";
    echo '<a href=http://localhost/tieuluan-main/tieuluan.php><button>Quay lại</button></a>';
}
