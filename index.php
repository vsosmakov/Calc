<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$result = $_POST['result'];
$type_of_implant = $_POST['type_of_implant'];
$type_of_koronka = $_POST['type_of_koronka'];
$count_of_implant = $_POST['count_of_implant'];
$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$result = htmlspecialchars($result);
$type_of_implant = htmlspecialchars($type_of_implant);
$type_of_koronka = htmlspecialchars($type_of_koronka);
$count_of_implantt = htmlspecialchars($count_of_implant);
$name = urldecode($name);
$phone = urldecode($phone);
$result = urldecode($result);
$type_of_implant = urldecode($type_of_implant);
$type_of_koronka = urldecode($type_of_koronka);
$count_of_implant = urldecode($count_of_implant);
$name = trim($name);
$phone = trim($phone);
$result = trim($result);
$type_of_implant = trim($type_of_implant);
$type_of_koronka = trim($type_of_koronka);
$count_of_implant = trim($count_of_implant);


if (mail("virus7@bk.ru", "Заявка с сайта", "Имя:".$name."\nТелефон: ".$phone."\nСтоимость услуг: ".$result."\nКоличество имплантов:".$count_of_implant."\nТип импланта:".$type_of_implant."\nТип коронки:".$type_of_koronka))
 {     echo '<meta http-equiv="refresh" content="0;URL=../kalkulyator/sps.html">'; 
} else { 
    echo "при отправке сообщения возникли ошибки";
}?>