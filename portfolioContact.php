<?php

    if($_SERVER['REQUEST_METHOD']=='POST' && isset($_POST['submit'])){
        $conn= mysqli_connect('localhost','root','','portfoliocontact') or die('Connection Error:'.mysqli_connect_error());

        $userName = $_POST['userName'];
        $userEmail = $_POST['userEmail'];
        $userSubject = $_POST['userSubject'];
        $userMessage= $_POST['userMessage'];

        // SENDING THE MAIL
        $receiver = 'emmasco0207@gmail.com';
        $subject = "From $userName <$userEmail> \n Subject: $userSubject";
        $body = "Name: <$userName>\n Email:<$userEmail>\n Message: $userMessage";
        $sender="From: $userEmail";

        if(mail($receiver, $subject, $body, $sender)){
            echo "Message sent successful";
        }else{
            echo 'error sending message';
        }


        $sql = "INSERT INTO `contacttable` (`userName`, `userEmail`) VALUES ('$userName', '$userEmail')";

        $query = mysqli_query($conn, $sql);

        if($query){
            echo 'Entry Success';
        }else{
            echo 'Entry Denial';
        }

    }

?>