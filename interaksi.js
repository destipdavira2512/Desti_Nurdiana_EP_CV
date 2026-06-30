document.addEventListener('DOMContentLoaded', function() {

    const tombolWA = document.getElementById('tombolWA');
    if (tombolWA){
        tombolWA.addEventListener('click', function() {
            const nomorHP = "6289652314662";
            const pesanOtomatis = "Hallo, Saya telah melihat Cv Anda dan ingin Terhubung";
            const pesanFormat = encodeURIComponent(pesanOtomatis);
            const linkWhatsApp = `https://wa.me/${nomorHP}?text=${pesanFormat}`;

            window.open(linkWhatsApp, '_blank');
    });
        }


const tombolEmail = document.getElementById('tombolEmail');
if (tombolEmail){
    tombolEmail.addEventListener('click', function(){

        const alamatEmail = "destiekadiana499@gmail.com";
        const subjek = "Tanya tentang CV Digital";
        const isiEmail = "Halo, saya telah melihat CV Anda dan ingin terhubung untuk bertanya";
        const linkEmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${alamatEmail}&su=${subjek}&body=${isiEmail}`;

        window.open (linkEmail, '_blank');
    });
}

const ijasahSD = document.getElementById("ijasah-sd");
if(ijasahSD){
    ijasahSD.addEventListener("click", function(){
      window.open ("https://drive.google.com/file/d/1tSLSOknJFZftnBXSKiK_ZMzx65B0nVXk/view?usp=sharing", "_blank");
      });
    }
const ijasahSMP = document.getElementById("ijasah-smp");
if(ijasahSMP){
    ijasahSMP.addEventListener("click", function(){
        window.open("https://drive.google.com/file/d/1D1JuPIimZ9C1DQcQl8rJJQqd63sIRqir/view?usp=sharing", "_blank");
    });
}
const ijasahSMK = document.getElementById("ijasah-smk");
if(ijasahSMK){
    ijasahSMK.addEventListener("click", function(){
        window.open("https://drive.google.com/file/d/1afq5dnKPK9QSuDOF9d0apNbojtTN6icZ/view?usp=sharing", "_blank");
    });
}
const ijashS1 = document.getElementById("ijasah-s1");
if(ijashS1){
    ijashS1.addEventListener("click", function(){
        window.open("https://drive.google.com/file/d/1y0_PZSFCSCIWPifnst_8KH6ccYG7KjrW/view?usp=sharing", "_blank");
});
}
const transkipS2 = document.getElementById("ijasah-s2");
if(transkipS2){
    transkipS2.addEventListener("click", function(){
        window.open("https://drive.google.com/file/d/1pbnXNQf-u3TP1n3UAevAvwWyzNw1VqW8/view?usp=sharing", "_blank");
    });
}
const tombolKtp = document.getElementById("tombol-ktp");
if(tombolKtp){
    tombolKtp.addEventListener("click", function(){
        window.open("https://drive.google.com/file/d/1VZogAVLwJVjvN_-oLSArQ7ttJrzL9YO0/view?usp=sharing", "_blank");
    });
}
})
