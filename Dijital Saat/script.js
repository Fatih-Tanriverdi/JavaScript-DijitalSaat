onload = dijitalSaat();

function dijitalSaat() {
    var ds = new Date();
    var saat = ds.getHours();
    var dakika = ds.getMinutes();
    var saniye = ds.getSeconds();

    document.getElementById('dsaat').innerHTML = saat;
    document.getElementById('ddakika').innerHTML = dakika;
    document.getElementById('dsaniye').innerHTML = saniye;

    if (saat > 6){
        document.getElementById('pm').innerHTML = '🔆';
    } else if (saat > 18 ) {
        document.getElementById('pm').innerHTML = '🌙';
    }

    var zaman = setInterval('dijitalSaat()', 1000);
}


