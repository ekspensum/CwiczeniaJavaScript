<?php
session_start();
require_once 'dbconnect.php';
$userScore = mysqli_query($conn, "SELECT * FROM `user` INNER JOIN score ON user.idUser = score.idUser") or die("Brak połączenia z bazą danych.");
while($dataUserScore = mysqli_fetch_assoc($userScore)){
    echo $dataUserScore['login'].' '.$dataUserScore['idScore'].' '.$dataUserScore['score'];
}
// echo $_POST['totalScore'].'<br/>';
// echo $_POST['login'].'<br/>';
// echo $_POST['password'].'<br/>';
// header('Location: index.html');
// exit;
?>