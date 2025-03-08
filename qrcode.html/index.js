const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

let size=sizes.value;

// to check it the word is empty or not 
function isEmptyinput(){
    // if(qrText.value.length>0)
    //     {
    //         generateQrCode();
    //     }
    //     else{
    //         alert("ENter the text or Url to generate ur Qr code ");
    //     }
    
    // With the help of ternary op
    qrText.value.length>0?generateQrCode():alert("ENter the text or Url to generate ur Qr code ");
}

// to generate the qr code 
generateBtn.addEventListener("click",(e)=>{
    e.preventDefault() // to stop refreshing page 
    isEmptyinput();
});

// To change the size 
sizes.addEventListener('change',(e)=>{
    size=e.target.value;
    isEmptyinput();
});

// function that will make the qr code 
function generateQrCode(){
    qrContainer.innerHTML="";
    new QRCode(qrContainer,{
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}


// to download the qr code 
downloadBtn.addEventListener('click',()=>{
    let img=document.querySelector('.qr-body img');
    if(img!=null)
    {
        let imgatr=img.getAttribute('src');
        downloadBtn.setAttribute("href",imgatr);
    }
    else{
        downloadBtn.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`);
    }
});




