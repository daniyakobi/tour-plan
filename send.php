<?php
     // Файлы phpmailer
    require 'PHPMailer/PHPMailer.php';
    require 'PHPMailer/SMTP.php';
    require 'PHPMailer/Exception.php';
    
    // Переменные, которые отправляет пользователь
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    $email = $_POST['email'];
    
    // Формирование самого письма
    $title = "Новое обращение Best Tour Plan";
    $body1 = "
        <h2>Новое обращение</h2>
        <b>Имя:</b> $name<br>
        <b>Телефон:</b> $phone<br><br>
        <b>Сообщение:</b><br>$message
    ";
    $body2 = "
        <h2>Новое обращение</h2>
        <b>На ваши обновления и новости успешно подписался пользователь:</b><br>
        <b>Email:</b> $email<br><br>
    ";
    $body3 = "
        <h2>Новое обращение</h2>
        <b>От:</b> $email<br>
        <b>Имя:</b> $name<br>
        <b>Телефон:</b> $phone<br>
        <b>Сообщение:</b><br>$message
    ";
    
    // Настройки PHPMailer
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    try {
        $mail->isSMTP();   
        $mail->CharSet = "UTF-8";
        $mail->SMTPAuth   = true;
        //$mail->SMTPDebug = 2;
        $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};
    
        // Настройки вашей почты
        $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера вашей почты
        $mail->Username   = 'nadeev.danil2016@yandex.ru'; // Логин на почте
        $mail->Password   = 'Volko5dav2125asd'; // Пароль на почте
        $mail->SMTPSecure = 'ssl';
        $mail->Port       = 465;
        $mail->setFrom('nadeev.danil2016@yandex.ru', 'Даниил Надеев'); // Адрес самой почты и имя отправителя
        // Получатель письма
        $mail->addAddress('nadeev.danil2016@yandex.ru');

        // Отправка сообщения
        $mail->isHTML(true);
        $mail->Subject = $title;
        if(empty($name)) { $mail->Body = $body2; }
        elseif (empty($email)) { $mail->Body = $body1; }
        else { $mail->Body = $body3; }
        // Проверяем отравленность сообщения
        if ($mail->send()) {$result = "success";} 
        else {$result = "error";}

    } catch (Exception $e) {
        $result = "error";
        $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
    }
    // Отображение результата
    header('location: thank.html');

?>
  


 

