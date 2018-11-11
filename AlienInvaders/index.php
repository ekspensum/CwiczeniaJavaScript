<?php
    session_start();
    require_once 'dbconnect.php';
    require_once 'functions.php';
    showAllUsersTable($conn);
    if(isset($_POST['login']) && isset($_POST['password'])){
        if($_POST['login']!="" && $_POST['password']!=""){
         
            if(isset($_POST['addUser'])){
                    $queryMultiLogin = 'SELECT login FROM user WHERE login = "'.$_POST['login'].'"';
                    $resulMultiLogin = mysqli_query($conn, $queryMultiLogin) or die("Brak połączenia z bazą danych L1.");
                    if(mysqli_num_rows($resulMultiLogin) > 0){
                        echo '<b id="komunikat">Podany login zapisany jest już w bazie danych.<br>Proszę podać inny login.</b>'; 
                    } else {
                        $queryInsertUser = 'INSERT INTO user VALUES(null, "'.$_POST['login'].'", "'.$_POST['password'].'")';
                        mysqli_query($conn, $queryInsertUser) or die("Brak połączenia z bazą danych L2.");
                        $login = $_POST['login'];
                        $_SESSION['login'] = $login;
                        showUserTable($login, $conn);                  
                    }
            }

            if(isset($_POST['logIn'])){
                $queryLogin = 'SELECT login, password FROM user WHERE login = "'.$_POST['login'].'" '.'AND '.'password = "'.$_POST['password'].'"';
                $result = mysqli_query($conn, $queryLogin) or die("Brak połączenia z bazą danych L3.");
                $row = mysqli_fetch_assoc($result);
                if($row['login']!=""){
                    $login = $_POST['login'];
                    $_SESSION['login'] = $login;
                        if($_SESSION['login'] == $row['login'])
                            showUserTable($login, $conn);
                } else
                    echo '<b id="komunikat">Podano nie poprawne hasło lub login<br>bądź brak użytkownika w bazie.</b>';       
            }

            if(isset($_POST['addScore'])){
                if($_POST['totalScore'] != ""){
                    if(isset($_SESSION['login'])) {
                        $queryLogin = 'SELECT login, password FROM user WHERE login = "'.$_POST['login'].'" '.'AND '.'password = "'.$_POST['password'].'"';
                        $result = mysqli_query($conn, $queryLogin) or die("Brak połączenia z bazą danych L4.");
                        $dateTimeNow = new DateTime('NOW');
                        $row = mysqli_fetch_assoc($result);
                        if($_SESSION['login'] == $row['login']){
                            $queryAddScore = 'INSERT INTO score VALUES(null, '.$_POST['totalScore'].', "'.$dateTimeNow->format(DateTime::ISO8601).'",'.'(SELECT idUser FROM user WHERE login = "'.$_POST['login'].'"))';
                            mysqli_query($conn, $queryAddScore) or die("Brak połączenia z bazą danych L5.");
                            $login = $_SESSION['login'];
                            showUserTable($login, $conn);
                            showAllUsersTable($conn);
                        }                   
                    } else
                        echo '<b id="komunikat">Proszę o zalogowanie się.</b>';                    
                } else {
                    echo '<b id="komunikat">Brak punktacji.</b>';
                    if(isset($_SESSION['login'])) {
                        $login = $_SESSION['login'];
                        showUserTable($login, $conn);
                    }
                }
                     
            }

        } else
            echo '<b id="komunikat">Proszę uzupełnić pola login lub hasło.</b>';  

    } 
    
    if(isset($_POST['logOut'])) logOut();
    
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
        <label id="labLogin" for="login">Login:</label>
        <input id="login" name="login" type="text" value="<?php if(isset($_POST['login'])) echo $_POST['login']; ?>" />
        <label id="labPass" for="pass">Hasło:</label>
        <input id="pass" name="password" type="password" value="<?php if(isset($_POST['password'])) echo $_POST['password']; ?>" />
        
        <label id="lab1" for="al1">Obcy 1:</label>
        <input id="al1" name="scoreAlien1" type="text" value="<?php if(isset($_POST['scoreAlien1'])) echo $_POST['scoreAlien1']; ?>" />
        <label id="lab2" for="al2">Obcy 2:</label>
        <input id="al2" name="scoreAlien2" type="text" value="<?php if(isset($_POST['scoreAlien2'])) echo $_POST['scoreAlien2']; ?>" />
        <label id="lab3" for="al3">Obcy 3:</label><br/><br/>
        <input id="al3" name="scoreAlien3" type="text" value="<?php if(isset($_POST['scoreAlien3'])) echo $_POST['scoreAlien3']; ?>" />
        <label id="labTot" for="total">Wynik razem:</label>
        <input id="total" name="totalScore" type="text" readonly value="<?php if(isset($_POST['totalScore'])) echo $_POST['totalScore']; ?>" />

        <input id="buttonLogIn" type="submit" name="logIn" value="Zaloguj" />
        <input id="buttonAddScore" type="submit" name="addScore" value="Dodaj wynik do bazy" />
        <input id="buttonAddUser" type="submit" name="addUser" value="Dodaj użytkownika" />        
    </form>
    
    <form action="index.php" method="POST">
        <input id="buttonLogOut" type="submit" name="logOut" value="Wyloguj" />
    </form>

    <button id="buttonStart" onclick="startGame();">Zacznij grę</button>
    <script src="main.js"></script>
</body>

</html>