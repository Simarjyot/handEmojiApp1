Prediction1 = ""
Prediction2 = ""

Webcam.set({
    widht:350,
    height:300,
    image_format : "png",
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' ); 

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; });
}


console.log('ml5 version:' , ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/yRo-fBQUW/' , modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!!!!!!!!!!!!!!!!');
}

function speak() {
    var synth = widow.speechSynthesis;
    speak_data_1 = "The first prediction is " + Prediction1;
    speak_data_2 = "And the second prediction is " + Prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log("error");
    } else {
        console.log(results);
        document.getElementById("hand_emoji_name").innerHTML = results[0].label;
        document.getElementById("hand_emoji_name").innerHTML = results[1].label;
        Prediction1 = results[0].label;
        Prediction2 = results[1].label;
        speak();
        if(results[0].label == "Hi")
        {
            document.getElementById("update_hand").innerHTML = "&#128400;";
        }
        if(results[0].label == "Thumbs Up")
        {
            document.getElementById("update_hand").innerHTML = "&#128078;";
        }
        if(results[0].label == "Dislike")
        {
            document.getElementById("update_hand").innerHTML = "&#128077;";
        }if(results[0].label == "Rock")
        {
            document.getElementById("update_hand").innerHTML = "&#9994;";
        }if(results[0].label == "Peace")
        {
            document.getElementById("update_hand").innerHTML = "&#9996;";
        }


        if(results[0].label == "Hi")
        {
            document.getElementById("update_hand").innerHTML = "&#128400;";
        }
        if(results[0].label == "Thumbs Up")
        {
            document.getElementById("update_hand").innerHTML = "&#128078;";
        }
        if(results[0].label == "Dislike")
        {
            document.getElementById("update_hand").innerHTML = "&#128077;";
        }if(results[0].label == "Rock")
        {
            document.getElementById("update_hand").innerHTML = "&#9994;";
        }if(results[0].label == "Peace")
        {
            document.getElementById("update_hand").innerHTML = "&#9996;";
        }
    }
}