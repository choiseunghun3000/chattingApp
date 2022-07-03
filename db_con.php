<?php
    /*로컬 테스트용*/
    // $con = mysqli_connect("localhost", "root", "000000", "chat", 3306);
    
    /*닷홈용*/
    $con = mysqli_connect("localhost", "webvalue", "hun150931!", "webvalue");

    mysqli_query($con, "SET NAMES utf8");

?>