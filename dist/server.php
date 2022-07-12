<?php

$_POST = json_decode(file_get_contents("php://input"), true);

$project_name = "Форма с сайта " . $_SERVER["HTTP_REFERER"];
$admin_email  = trim($_POST["admin_email"]);
$form_subject = trim($_POST["form_subject"]);

$file_attach = "";

// Если поле выбора вложения не пустое - закачиваем его на сервер
if (!empty($_FILES["file_attach"]["tmp_name"])) {
    $path = __DIR__ . "/upload-files/" . $_FILES["file_attach"]["name"]; // путь загрузки файла
    if (copy($_FILES["file_attach"]["tmp_name"], $path)) $file_attach = $path;
}

$c = true; // Script Foreach
foreach ($_POST as $key => $value) {
    if (is_array($value)) $value = implode(", ", $value);

    if (
        $value != "" &&
        $key != "project_name" &&
        $key != "admin_email" &&
        $key != "form_subject" &&
        $key != "file_attach"
    ) {
        $message .= (($c = !$c) ? '<tr>' : '<tr style="background-color: #f8f8f8;">') . "
            <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
            <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
        </tr>";
    }
}

$message = "<table style=\"width: 100%;\">
    <tr>
        <td style='padding:10px; border:#e9e9e9 1px solid; text-align:center' colspan='2'>
            <big>$project_name</big>. $form_subject
        </td>
    </tr>
    $message
</table>";

// Отправляем сообщение
if (empty($file_attach)) {
    $headers = "MIME-Version: 1.0" . PHP_EOL .
        "Content-Type: text/html; charset=utf-8" . PHP_EOL .
        "From: " . $project_name . " <" . $admin_email . ">" . PHP_EOL .
        "Reply-To: " . $admin_email . "" . PHP_EOL;

    mail($admin_email, $form_subject, $message, $headers);
} else {
    send_mail($admin_email, $form_subject, $message, $file_attach);
}

// Функция для отправки сообщения с вложением
function send_mail($to, $form_subject, $html, $path)
{
    $fp = fopen($path, "r");

    if (!$fp) {
        echo "Файл $path не может быть прочитан";
        exit();
    }

    $file = fread($fp, filesize($path));
    fclose($fp);

    $boundary = "--" . md5(uniqid(time())); // генерируем разделитель

    $headers = "MIME-Version: 1.0\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\n";

    $multipart = "--$boundary\n";

    $multipart .= "Content-Type: text/html; charset='utf-8'\n";
    $multipart .= "Content-Transfer-Encoding: Quot-Printed\n\n";
    $multipart .= "$html\n\n";

    $message_part = "--$boundary\n";
    $message_part .= "Content-Type: application/octet-stream\n";
    $message_part .= "Content-Transfer-Encoding: base64\n";
    $message_part .= "Content-Disposition: attachment; filename = \"" . $path . "\"\n\n";
    $message_part .= chunk_split(base64_encode($file)) . "\n";

    $multipart .= $message_part . "--$boundary--\n";

    if (!mail($to, $form_subject, $multipart, $headers)) {
        echo "К сожалению, письмо не отправлено";
        exit();
    }
}