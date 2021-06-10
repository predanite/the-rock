var SpeechRecognition=window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start() 
{
    document.getElementById("textbox").innerHTML = "" ;
    recognition.start();
}
recognition.onresult = function run(event) 
{
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").value = Content ;
    speak();
}



function speak ()
{
var synth = window.SpeechSynthesis;
speakdata = document.getElementById("textbox").value;
var utterthis =new SpeechSynthesisUtterance("speakdata");
synth.speak(utterthis) ;
Webcam.attach(camera);
}


webcam.set({
    width:320,
    height:240,
    image_format : 'png',
        png_quality :100
});
camera = document.getElementById("camera");