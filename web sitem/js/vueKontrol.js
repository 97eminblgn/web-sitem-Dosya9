const app = Vue.createApp({
    data() {
        return {
            ad: "",
            telefon: "",
            email: "",
            mesaj: "",
            konu: "",
            hatalar: []
        };
    },
    methods: {
        kontrolEt() {
            this.hatalar = [];

            if (this.ad.trim() === "") {
                this.hatalar.push("Ad alanı boş bırakılamaz.");
            }
            if (!/^\d{10,11}$/.test(this.telefon)) {
                this.hatalar.push("Telefon numarası geçersiz, sadece rakam girilmeli.");
            }
            if (!this.email.includes("@")) {
                this.hatalar.push("Geçerli bir e-posta adresi girin.");
            }
            if (this.mesaj.trim() === "") {
                this.hatalar.push("Mesaj kısmı boş bırakılamaz.");
            }
            if (this.konu === "") {
                this.hatalar.push("Lütfen bir konu seçin.");
            }

            if (this.hatalar.length > 0) {
                alert("Hatalar:\n" + this.hatalar.join("\n"));
            } else {
                alert("Vue.js kontrolü başarılı!");
            }
        }
    }
});

app.mount("#iletisimForm");
document.getElementById("vueBtn").addEventListener("click", function () {
    app.kontrolEt(); // Vue instance içindeki doğrulama fonksiyonunu çalıştırıyoruz
});