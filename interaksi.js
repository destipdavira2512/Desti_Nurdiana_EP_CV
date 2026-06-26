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
    });
