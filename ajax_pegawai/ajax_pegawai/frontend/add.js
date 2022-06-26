const btnAdd = document.getElementById("add");
btnAdd.onclick = function (evt) {
  const data = {
    nip: document.getElementById("nip").value,
    nama: document.getElementById("nama").value,
    alamat: document.getElementById("alamat").value,
  };

  const xhttp = new XMLHttpRequest();
  xhttp.open(
    "POST",
    "http://localhost/ajax_pegawai/backend/tambah_proses.php",
    true
  );
  xhttp.setRequestHeader("Content-type", "application/json; charset=UTF-8");
  xhttp.send(JSON.stringify(data));
  xhttp.onreadystatechange = function () {
     var result = JSON.parse(this.responseText);
     if (result.status == "success") {
       window.location.href = "index.html";
     } else {
       alert("Eror");
     }
   };
   xhttp.onerror = function () {
     alert("Terjadi kesalahan");
   };

  // xhttp.onload = function () {
  //     if (xhttp.status >= 200) {
  //         alert("Successfully add data");
  //     }
  // }

  
  // window.location.href = "index.html";
}