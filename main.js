var inp = document.getElementById('text-input');

function getit(){
    var user_input = inp.value

    // Generate the QR code
    var qr = qrcode(0, 'H');
    qr.addData(user_input);
    qr.make();

    // Add the QR code to the page
    document.getElementById('qr-code').innerHTML = qr.createImgTag();
}