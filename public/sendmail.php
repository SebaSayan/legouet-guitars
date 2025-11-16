<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$sender      = $data["sender"] ?? ["name" => "System", "email" => "no-reply@example.com"];
$replyTo     = $data["replyTo"] ?? null;
$subject     = $data["subject"] ?? "";
$htmlContent = $data["htmlContent"] ?? "";
$to          = $data["to"] ?? [];

$apiKey = "";

$payload = json_encode([
    "sender"      => $sender,
    "replyTo"     => $replyTo,
    "to"          => $to,
    "subject"     => $subject,
    "htmlContent" => $htmlContent
]);

$ch = curl_init("https://api.brevo.com/v3/smtp/email");

curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "accept: application/json",
    "content-type: application/json",
    "api-key:$apiKey"
]);

curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$error = curl_error($ch);

curl_close($ch);

echo json_encode([
    "php_error" => $error,
    "brevo_response" => $response,
    "payload_sent" => json_decode($payload, true)
]);
