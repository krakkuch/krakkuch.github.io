<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name']; 
$phone = $_POST['user_phone'];
$text = $_POST['user_message'];
//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$attribute1 = $_POST['attribute1'];
$attribute2 = $_POST['attribute2'];
$attribute3 = $_POST['attribute3'];

$mail->setFrom('testvisitsite@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('vipper27@mail.ru');     // Кому будет уходить письмо 
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Тема письма';
$mail->Body = "Скрипт сработал! <br>" . $name . "<br>" . $phone . "<br>" . $text . "<br>" . $attribute1 . "<br>" . $attribute2 . "<br>" . $attribute3;
$mail->AltBody = '';
if(!$mail->send()) {
    return false;
} else {
    return true;
}
?>