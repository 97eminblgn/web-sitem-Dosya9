<?php
$kullaniciadi = $_POST['kullaniciadi'];
$sifre = $_POST['sifre'];
if (($kullaniciadi == "b241210027@sakarya.edu.tr") && ($sifre == "b241210027")) {
    header("Refresh:2;url=hakkimda.html");
    echo("Başarılı Giriş,  Hoşgeldiniz B241210027!");
}
else {
    header("Refresh:2;url=login.html");
    echo "Giriş Başarısız! Kullanıcı adı veya şifre girişi hatalı. Giriş ekranına yeniden yönlendiriliyorsunuz...";
}
?>