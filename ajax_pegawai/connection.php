<?php
session_start();
$host = 'ec2-44-205-41-76.compute-1.amazonaws.com';
$port = '5432';
$user = 'ymngxrakayoqtr'; 
$password = 'e0d11bafe604d39bfa5241369e04c6a6826aa8c78b5b896e9ca4d7225e2f35cd';
$db   = 'd94bifkek6lgvi';

$connection = pg_connect("host=$host port =$port dbname=$db user=$user password=$password");
// if($connection){
// echo 'Koneksi Berhasil';
// }
// else{
// echo 'Koneksi Gagal';
// }
?>