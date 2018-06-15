<?php
	//declare our assets 
	$name = stripcslashes($_POST['name']);
	$emailAddr = stripcslashes($_POST['email']);
	$phone = stripcslashes($_POST['phone']);
	$comment = stripcslashes($_POST['message']);
	$subject = stripcslashes($_POST['subject']);	
	$contactMessage =  
		"Message:
		$comment 

		Name: $name
		Phone: $phone
		E-mail: $emailAddr

		Sending IP:$_SERVER[REMOTE_ADDR]
		Sending Script: $_SERVER[HTTP_HOST]$_SERVER[PHP_SELF]";
		
		//send the email 
		mail('opt.cleandom@gmail.com', $subject, $contactMessage);
		echo('success'); //return success callback
?>