const resimler = [
  "img/hobi1.jpg",
  "img/hobi2.jpg",
  "img/hobi3.jpg"
];

let aktifIndex = 0;

function degistirResim(yon) {
  aktifIndex += yon;

  if (aktifIndex < 0) {
    aktifIndex = resimler.length - 1;
  } else if (aktifIndex >= resimler.length) {
    aktifIndex = 0;
  }

  document.getElementById("galeriResim").src = resimler[aktifIndex];
}


// sevdiğim etkinlikler için
const etkinlikResimler = [
  "img/etkinlik1.jpg",
  "img/etkinlik2.jpg",
  "img/etkinlik3.jpg"
];

let etkinlikIndex = 0;

function degistirEtkinlikResim(yon) {
  etkinlikIndex += yon;
  if (etkinlikIndex < 0) etkinlikIndex = etkinlikResimler.length - 1;
  if (etkinlikIndex >= etkinlikResimler.length) etkinlikIndex = 0;
  document.getElementById("etkinlikResim").src = etkinlikResimler[etkinlikIndex];
}

// giriş sayfası

function validateForm() {
    var username = document.getElementById("kullaniciadi").value.trim();
    var password = document.getElementById("sifre").value.trim();
    var regex = /^[a-zA-Z0-9._%+-]+@sakarya\.edu\.tr$/;

    if (username === "" || password === "") {
        alert("Lütfen tüm alanları doldurunuz.");
        return false;
    }

    if (!regex.test(username)) {
        alert("Lütfen geçerli bir Sakarya Üniversitesi e-posta adresi giriniz.");
        return false;
    }

    return true;
}




// ilgi alanlarım api kodu için script kodu detaylı

document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "ef8c95ee4709edd6ac1549742c21d19f"; // API anahtarını ekle
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28&sort_by=popularity.desc`; // Popüler filmleri çeken API URL

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Dikkat API Hatası: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Gelen Veri:", data);
            displayData(data.results);
        })
        .catch(error => console.error("API bağlantısı hatası:", error));

    function displayData(movies) {
        const container = document.getElementById("apiVeri");
        container.innerHTML = "";            // Önce içeriği temizle

        if (movies.length > 0) {
            movies.forEach(movie => {
                let div = document.createElement("div");
                div.classList.add("col-md-4", "mb-3");

                div.innerHTML = `
                    <div class="card h-100">
                        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="${movie.title}">
                        <div class="card-body">
                            <h5 class="card-title">${movie.title}</h5>
                            <p class="card-text">Puan: ${movie.vote_average}</p>
                        </div>
                    </div>
                `;
                container.appendChild(div);
            });
        } else {
            container.innerHTML = "<p>Film bulunamadı.</p>";
        }
    }
});



// iletişim sayfasında java kontrolü yapabilmek için script kodu

function kontrolEt() {
    let hatalar = [];

    let ad = document.getElementById("ad").value.trim();
    let telefon = document.getElementById("telefon").value.trim();
    let email = document.getElementById("email").value.trim();
    let mesaj = document.getElementById("mesaj").value.trim();
    let konu = document.getElementById("konu").value;

    // Boş alan kontrolü telefon numarası kontrolü e-posta kontrolü
    if (ad === "") {
        hatalar.push("Ad alanı boş bırakılamaz.");
    }
    if (telefon === "" || !/^\d{10,11}$/.test(telefon)) {
        hatalar.push("Telefon numarası geçersiz, sadece rakam girilmeli.");
    }
    if (email === "" || !email.includes("@")) {
        hatalar.push("Geçerli bir e-posta adresi girin.");
    }
    if (mesaj === "") {
        hatalar.push("Mesaj kısmı boş bırakılamaz.");
    }
    if (konu === "") {
        hatalar.push("Lütfen bir konu seçin.");
    }

    // Hataları ekrana yazdır
    if (hatalar.length > 0) {
        alert("Hatalar:\n" + hatalar.join("\n"));
    } else {
        alert("JavaScript kontrolü başarılı!");
    }
}