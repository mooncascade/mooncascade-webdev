<?php
/*
 * Very simplistic 'backend' for demo application. Serves static json files.
 */

if (php_sapi_name() == 'cli') {
	$port = "3001";
	echo 'Running server on port ' . $port . PHP_EOL;
	exec('php -S localhost:' . $port . ' -t public backend.php');
} else {
	requestHandler();
}

function requestHandler() {
	$uri = $_SERVER['REQUEST_URI'];
	header("Access-Control-Allow-Origin: *");

	if ($uri == '/webdev') {
		header('Content-Type: application/json');
		echo file_get_contents('public/offer.json');
	}
	else if ($uri == '/company') {
		header('Content-Type: application/json');
		echo file_get_contents('public/company.json');
	}
	else {
		return false;
	}
}