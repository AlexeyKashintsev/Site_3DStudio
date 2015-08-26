<?php

	// Mail settings
	$to = "akashintsev@yandex.ru";
	$subject = "Leaff contact form";

	//if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["message"])) {

	$content  = "Заявка с сайта\r\n";
	$content .= "Телефон: "    . $_POST["phone"]   . "\r\n";
	$content .= "Параметры UTM \r\n";
	$content .= "Source: "    . $_POST["utm_source"]   . "\r\n";
	$content .= "Campaing: "    . $_POST["utm_campaing"]   . "\r\n";
	$content .= "Medium: "    . $_POST["utm_medium"]   . "\r\n";
	$content .= "Term: "    . $_POST["utm_term"]   . "\r\n";

	if (mail($to, $subject, $content)) {

		$result = array(
			"message" => "Спасибо. В ближайшее время мы с Вами свяжемся",
			"sendstatus" => 1
		);

		echo json_encode($result);

	} else {

		$result = array(
			"message" => "Извините, что-то пошло не так.",
			"sendstatus" => 0
		);

		echo json_encode($result);

	}

	//}

?>