<?php
    $host="localhost";
	$user="root";
	$password=""; 
	$database="AlienInvaders";
    $conn=mysqli_connect($host,$user,$password,$database);
    if(isset($_POST['login']) && isset($_POST['password'])){
        if($_POST['login']!="" && $_POST['password']!=""){
            $queryLogin = 'SELECT login, pssword FROM user WHERE login = "'.$_POST['login'].'"';
            $result = mysqli_query($conn, $queryLogin) or die("Brak połączenia z bazą danych L1.");
            $row = mysqli_fetch_assoc($result);
            if($row['login']==""){
                $queryInsertUser = 'INSERT INTO user VALUES(null, "'.$_POST['login'].'", "'.$_POST['password'].'")';
                mysqli_query($conn, $queryInsertUser) or die("Brak połączenia z bazą danych L2.");
                $last_id = mysqli_insert_id($conn);
                $queryInsertScore = 'INSERT INTO score VALUE(null,"'.$_POST['totalScore'].'", "'.$last_id.'")';
                mysqli_query($conn, $queryInsertScore) or die("Brak połączenia z bazą danych L3.");
            } elseif($row['login']!="" && $row['pssword']==$_POST['password']){
                $queryAddScore = 'INSERT INTO score VALUES(null, '.$_POST['totalScore'].','.'(SELECT idUser FROM user WHERE login = "'.$_POST['login'].'"))';
                mysqli_query($conn, $queryAddScore) or die("Brak połączenia z bazą danych L4.");
            } else
                echo '<b id="komunikat">Podano nie poprawne hasło lub login.</b>';       
        } else
            echo '<b id="komunikat">Proszę uzupełnić pola login lub hasło.</b>';
    } 
    $userScore = mysqli_query($conn, "SELECT * FROM `user` INNER JOIN score ON user.idUser = score.idUser ORDER BY score desc LIMIT 10") or die("Brak połączenia z bazą danych L5.");
    echo '<table><tr><th>Lp.</th>    <th>Login</th>    <th>Punkty</th></tr>';
    $i = 0;
    while($dataUserScore = mysqli_fetch_assoc($userScore)){
        $i++;
        echo '<tr><td>'.$i.'</td> <td>'.$dataUserScore['login'].'</td> <td>'.$dataUserScore['score'].'</td></tr>';
    }
    echo '</table>';
    mysqli_close($conn);
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <!-- <meta http-equiv="X-UA-Compatible" content="IE=edge"> -->
    <title>Alien Invaders</title>
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />

</head>

<body>

    <form action="index.php" method="POST">
        <label id="lab1" for="al1">Obcy 1:</label>
        <input id="al1" name="scoreAlien1" type="text" />
        <label id="lab2" for="al2">Obcy 2:</label>
        <input id="al2" name="scoreAlien2" type="text" />
        <label id="lab3" for="al3">Obcy 3:</label><br/><br/>
        <input id="al3" name="scoreAlien3" type="text" />
        <label id="labTot" for="total">Wynik razem:</label>
        <input id="total" name="totalScore" type="text" readonly value="<?php if(isset($_POST['totalScore'])) echo $_POST['totalScore']; ?>" />
        <label id="labLogin" for="login">Login:</label>
        <input id="login" name="login" type="text" value="<?php if(isset($_POST['login'])) echo $_POST['login']; ?>" />
        <label id="labPass" for="pass">Hasło:</label>
        <input id="pass" name="password" type="password" value="<?php echo $_POST['password']; ?>" />
        <input id="sub" type="submit" value="Dodaj wynik do bazy" />
    </form>

    <button id="button" onclick="startGame();">Zacznij grę</button>
    <script src="main.js"></script>
</body>

</html>