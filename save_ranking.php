<?php
// CORS 허용 (필요 시)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");

// JSON 입력 받기
$data = json_decode(file_get_contents("php://input"), true);

// 입력 검증
if (!$data || !isset($data['name'], $data['cpm'], $data['language'], $data['accuracy'], $data['time'], $data['totalScore'])) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid input"]);
    exit;
}

// 입력값 정리 (보안 및 안정성 처리)
$name = substr(trim($data['name']), 0, 10);
$cpm = (int)$data['cpm'];
$language = substr(trim($data['language']), 0, 20);
$accuracy = floatval($data['accuracy']);
$time = floatval($data['time']);
$totalScore = (int)$data['totalScore'];
$timestamp = date("Y-m-d H:i:s");

// DB 접속 정보
$host = "localhost";
$dbname = "typing_game";
$username = "your_db_user";
$password = "your_db_password";

// PDO 사용
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // 데이터 삽입
    $stmt = $pdo->prepare("
        INSERT INTO rankings (name, cpm, language, accuracy, time, totalScore, timestamp)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    ");
    $stmt->execute([$name, $cpm, $language, $accuracy, $time, $totalScore, $timestamp]);

    echo json_encode(["status" => "success", "message" => "Ranking saved"]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "DB error: " . $e->getMessage()]);
}







/*
CREATE TABLE rankings (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(20) NOT NULL,
cpm INT NOT NULL,
language VARCHAR(20) NOT NULL,
accuracy FLOAT NOT NULL,
time FLOAT NOT NULL,
totalScore INT NOT NULL,
timestamp DATETIME NOT NULL
);
*/

?>