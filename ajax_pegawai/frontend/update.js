let param = window.location.search;
let urlparam = new URLSearchParams(param);
let id = urlparam.get("id");
console.log(id);
let data = new Object();
data.id = id;


let jsondata = JSON.stringify(data);
$.post(
    "../backend/get_by_id.php",
    jsondata,
    function (resp) {
        let detail_data = JSON.parse(resp);
        console.log(JSON.parse(resp));
        $("#nip").val(detail_data.nip);
        $("#nama").val(detail_data.nama);
        $("#alamat").val(detail_data.alamat);
        
    }
);


$(document).on('click', '#save', function () {
    let dt = new Object();
    dt.id = id;
    dt.nip = $("#nip").val();
    dt.nama = $("#nama").val();
    dt.alamat = $("#alamat").val();
    let new_data = JSON.stringify(dt);
    $.post(
        "../backend/update_data.php",
        new_data,
        function (resp) {
            console.log(resp);
            let result = JSON.parse(resp);
            if (result.status === "success") {
              alert("Terjadi perubahan data");
              window.location.href = "index.html";
            } else {
              alert("Eror");
            }
        }
        
    );

});