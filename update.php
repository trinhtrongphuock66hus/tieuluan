<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Kiểm tra xem có dữ liệu POST được gửi từ biểu mẫu không
    $email = $_POST['email'];

    // Mở file csv
    $file = 'student.csv';
    $lines = file($file);
    $output = [];

    // Duyệt qua từng dòng trong file csv
    foreach ($lines as $line) {
        $data = str_getcsv($line);
        if ($data[3] == $email) {
            // Thay đổi dữ liệu trong hàng tương ứng với email
            for ($i = 0; $i < count($data) ; $i++) {
                $data[$i] = $_POST['data' . $i];
            }
        }
        $output[] = $data;
    }

    // Ghi dữ liệu mới vào file csv
    $fp = fopen($file, 'w');
    foreach ($output as $row) {
        fputcsv($fp, $row);
    }
    fclose($fp);

    // Hiển thị thông báo cập nhật thành công
    echo "Dữ liệu đã được cập nhật thành công.";
    echo '<a href=http://localhost/tieuluan-main/tieuluan.php><button>Quay lại</button></a>';
}
?>
