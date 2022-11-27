<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name']; 
$phone = $_POST['user_phone'];
$text = $_POST['user_message'];
//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'testvisitsite@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'iRORtPa13ao#'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('testvisitsite@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('vipper27@mail.ru');     // Кому будет уходить письмо 
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Тема письма';
$mail->Body    = '' . "Скрипт сработал! <br>". $email . " <br>" . $radio . "<br>" . $check;
$mail=>AltBody = '';
if(!$mail->send()) {
    return false;
} else {
    return true;
}
?>