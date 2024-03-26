<?php

$name = strip_tags($_POST['NAME']);
$phone = strip_tags($_POST['PHONE']);
$subject = strip_tags($_POST['SUBJECT']);
$message = strip_tags($_POST['MESSAGE']);

$from = 'no-reply@bashpanel.ru'; //домен почты должен совпадать с доменом сайта, иначе не будет отправляться
$to  = 'gdo@ufarb.ru';


$subject = "Заявка с сайта";

$message = '<b>Имя:</b> ' . $name . '<br /> <b>Телефон:</b> '. $phone . '<br /> <b>Тема сообщения:</b> '. $subject . '<br /> <b>Сообщение:</b> '. $message;
	
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "From: ".$subject." <".$from.">\r\n"; 
mail($to, $subject, $message, $headers);

echo '1';
?>