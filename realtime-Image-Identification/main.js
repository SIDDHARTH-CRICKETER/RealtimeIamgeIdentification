function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    vedio = createCapture(VIDEO);
    vedio.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/3K8EBWtcZ/model.json',modelLoaded);
}

function modelLoaded(){
    console.log("Model Loaded !!")
}

function draw(){
    image(vedio,0,0,300,300);
    classifier.classify(vedio, gotResult);
}

function gotResult(error, results){
    if (error) {
        console.error(error);
    }
    
    else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}