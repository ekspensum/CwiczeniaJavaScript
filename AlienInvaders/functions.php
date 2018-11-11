<?php

function showUserTable($login, $conn){
	$userScore = mysqli_query($conn, 'SELECT * FROM user INNER JOIN score ON user.idUser = score.idUser WHERE login = "'.$login.'" ORDER BY score desc LIMIT 5') or die("Brak połączenia z bazą danych L6.");
	echo '<b id="labelTableUser">Wyniki zalogowanego użytkownika:</b>';
    echo '<table id="tableUser"><tr><th>Lp.</th>    <th>Login</th>    <th>Punkty</th>	<th>Data</th></tr>';
    $i = 0;
    while($dataUserScore = mysqli_fetch_assoc($userScore)){
        $i++;
        echo '<tr><td>'.$i.'</td> <td>'.$dataUserScore['login'].'</td> <td>'.$dataUserScore['score'].'</td> <td>'.$dataUserScore['dateTime'].'</td></tr>';
    }
    echo '</table>';
}

function showAllUsersTable($conn){
	$userScore = mysqli_query($conn, 'SELECT MAX(score) AS score, login FROM user INNER JOIN score ON user.idUser = score.idUser GROUP BY login ORDER BY score desc LIMIT 10') or die("Brak połączenia z bazą danych L7.");
	echo '<b id="labelTableAllUsers">Wyniki wszystkich <br>użytkowników:</b>';
    echo '<table id="tableAllUsers"><tr><th>Lp.</th>    <th>Login</th>    <th>Punkty</th></tr>';
    $i = 0;
    while($dataUserScore = mysqli_fetch_assoc($userScore)){
        $i++;
        echo '<tr><td>'.$i.'</td> <td>'.$dataUserScore['login'].'</td> <td>'.$dataUserScore['score'].'</td></tr>';
    }
    echo '</table>';
}

function logOut(){
	ob_start();
	session_destroy();
	ob_end_flush();
}
?>