<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email']; // Lấy giá trị email từ POST request

    $file = 'student.csv';
    $data = file($file);

    $out = array();
    foreach ($data as $line) {
        if (strpos($line, $email) === false) {
            $out[] = $line;
        }
    }
    $fp = fopen($file, "w+");
    flock($fp, LOCK_EX);
    foreach ($out as $line) {
        fwrite($fp, $line);
    }
    flock($fp, LOCK_UN);
    fclose($fp);
}
    echo 'Xóa dữ liệu thành công.';
    echo '<a href=http://localhost/tieuluan-main/tieuluan.php><button>Quay lại</button></a>';
?>