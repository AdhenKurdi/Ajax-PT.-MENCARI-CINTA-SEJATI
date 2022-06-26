<?php
  

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true ");
    header("Access-Control-Allow-Methods: OPTIONS, GET, POST");
    header("Access-Control-Allow-Headers: Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control");
   // Handling data in JSON format on the server-side using PHP
    header("Content-Type: application/json");
    require_once('../connection.php');
    // build a PHP variable from JSON sent using POST method
    $getJSON = file_get_contents('php://input');
    $data = json_decode($getJSON);
    $nip = $data->nip;
    $nama =$data->nama;
    $alamat = $data->alamat;

    $sql = "INSERT INTO pegawai (nip, nama, alamat) VALUES('$nip','$nama','$alamat')";
    $result = pg_query($sql);

    $row = pg_affected_rows($result);
    $obj = new stdClass();
    if($row > 0) {
        $obj->status = "success";
    } else {
        $obj->status = "fail";
    }
    echo json_encode($obj);
    

       
    

?>