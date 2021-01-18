<?php 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

// Почта клиента
$message = "Почта: {$_POST['email']}";

 
$mail = new PHPMailer;

$mail->isSMTP();
 
$mail->Host = 'ssl://smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'School-gugu@mail.ru'; // логин от вашей почты
$mail->Password = 'S0nia1992'; // пароль от почтового ящика
//$mail->SMTPSecure = 'ssl';
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
$mail->Port = '465';
$mail->CharSet = 'UTF-8';

$mail->From = 'School-guru@mail.ru';
$mail->FromName = 'School-guru';
//$mail->setFrom('School-guru@mail.ru', 'School-guru');
$mail->addAddress('moshesm@yandex.ru', 'Alex');
$mail->isHTML(true);
$mail->Subject = 'Пользователь сайта оставил свой email адрес';
$mail->Body = $message;

print_r ($mail);
if($mail->send()){
 echo '<p style="color: green;">Ваше сообщение отправлено</p>';
}else{
 echo '<p style="color: red;">Ошибка!</p>';
 echo $mail->ErrorInfo;
}

?>
