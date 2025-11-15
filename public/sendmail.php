<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$apiKey = "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";

$payload = json_encode([
    "sender" => $data["sender"],
    "replyTo" => $data["replyTo"],
    "to" => $data["to"],
    "subject" => $data["subject"],
    "htmlContent" => $data["htmlContent"]
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
