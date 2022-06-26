$(document).on("click", "#add", function () {
  var pegawai = new Object();
  pegawai.nip = $("#nip").val();
  pegawai.nama = $("#nama").val();
  pegawai.alamat = $("#alamat").val();
  $.post("../backend/tambah_proses.php", JSON.stringify(pegawai), function (resp,status) {
    let result = resp;
    if (result.status == "success") {
      window.location.href = "index.html";
    } else {
      alert("data gagal tersimpan");
    }
  });
});