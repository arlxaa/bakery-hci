// filter produk
function filterProduk(par_kategori, par_tombol) {

    var daftarProduk = document.getElementsByClassName("kotak-produk");

    for (var i = 0; i < daftarProduk.length; i++) {

        var produk = daftarProduk[i];
        var kategoriProduk = produk.getAttribute("data-kategori");

        if (par_kategori == "all") {
            produk.style.display = "block";
        }
        else if (kategoriProduk == par_kategori) {
            produk.style.display = "block";
        }
        else {
            produk.style.display = "none";
        }
    }

    var daftarTombol = document.getElementsByClassName("btn-pill");

    for (var j = 0; j < daftarTombol.length; j++) {
        daftarTombol[j].classList.remove("aktif");
    }

    par_tombol.classList.add("aktif");
}


// validasi register
var formRegis = document.getElementById("regis-form");

if (formRegis != null) {

    formRegis.addEventListener("submit", function(event) {

        event.preventDefault();

        var par_nama = document.getElementById("input_nama").value;
        var par_email = document.getElementById("input_email").value;
        var par_pass = document.getElementById("input_pass").value;
        var par_gender = document.getElementById("input_gender").value;
        var par_dob = document.getElementById("input_dob").value;
        var par_syarat = document.getElementById("input_syarat").checked;

        if (par_nama.length < 3) {
            alert("Full Name must be at least 3 characters long!");
            return;
        }

        var cekAt = par_email.indexOf("@");
        var cekTitik = par_email.indexOf(".");

        if (cekAt == -1 || cekTitik == -1) {
            alert("Please enter a valid email address.");
            return;
        }

        if (cekTitik < cekAt) {
            alert("Invalid email format.");
            return;
        }

        if (par_pass.length < 8) {
            alert("Password must be at least 8 characters.");
            return;
        }

        if (par_gender == "") {
            alert("Please select your gender.");
            return;
        }

        if (par_dob == "") {
            alert("Please select your date of birth.");
            return;
        }

        if (!par_syarat) {
            alert("You must agree to the Terms of Service.");
            return;
        }

        alert("Registration Successful! Welcome to the Good OLd' Bakery family.");
    });

}

// quick finder lokasi

var areaSelect = document.getElementById("areaSelect");
var btnCariLokasi = document.getElementById("btnCariLokasi");
var mapFrame = document.getElementById("mapFrame");

if (btnCariLokasi != null) {

    btnCariLokasi.addEventListener("click", function() {

        var areaDipilih = areaSelect.value;

        if (areaDipilih == "") {
            alert("Please select an area first.");
            return;
        }

        if (areaDipilih == "blokm") {

            mapFrame.src =
            "https://maps.google.com/maps?q=Blok%20M%20Jakarta&t=&z=15&ie=UTF8&iwloc=&output=embed";

        }

        else if (areaDipilih == "bsd") {

            mapFrame.src =
            "https://maps.google.com/maps?q=BSD%20City%20Tangerang&t=&z=15&ie=UTF8&iwloc=&output=embed";

        }

        else if (areaDipilih == "kemanggisan") {

            mapFrame.src =
            "https://maps.google.com/maps?q=BINUS%20Kemanggisan&t=&z=15&ie=UTF8&iwloc=&output=embed";

        }

        var kartuCabang = document.getElementById(areaDipilih);

        if (kartuCabang != null) {

            kartuCabang.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

    });

}