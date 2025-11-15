<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$email = $data["replyTo"]["email"] ?? "";
$name = $data["replyTo"]["name"] ?? "";
$htmlContent = $data["htmlContent"] ?? "";

$apiKey = "KEY-API";

$payload = json_encode([
    "sender" => [
        "name"  => "Legouet Guitares",
        "email" => "no-reply@creawebdev.fr"
    ],
    "replyTo" => [
        "email" => $email,
        "name"  => $name
    ],
    "to" => [
        ["email" => "joffrey@creawebdev.fr"]
    ],
    "subject" => "Message du formulaire Legouet Guitares - Administrateur",
    "htmlContent" => $htmlContent
]);

$ch = curl_init("https://api.brevo.com/v3/smtp/email");

curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Accept: application/json",
    "Content-Type: application/json",
    "api-key: $apiKey"
]);

curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$error = curl_error($ch);
curl_close($ch);

if ($error) {
    echo json_encode(["error" => $error]);
} else {
    echo $response;
}
