var imagesArray=[ 
	"../images/now/chicago-now/chi-1.jpg",
	"../images/now/chicago-now/chi-2.jpg",
	"../images/now/chicago-now/chi-3.jpg",
	"../images/now/chicago-now/chi-4..jpg",
	"../images/now/chicago-now/chi-5..jpg",
	"../images/now/chicago-now/chi-6..jpg",
	"../images/now/chicago-now/chi-8.jpg",
	"../images/now/chicago-now/chi-9.jpg",
	"../images/now/chicago-now/chi-10.jpg",
	"../images/now/chicago-now/chi-11.jpg"];


function displayImage(){

    //the first statement should generate a random number in the range 0 to 6 (the subscript values of the image file names in the imagesArray)
    var num = Math.floor(Math.random() * (imagesArray.length+1)); // 0...6
    //the second statement display the random image from the imagesArray array in the canvas image using the random number as the subscript value
    document.canvas.src = imagesArray[num];
}







// var randomImageIndex = randInt(0,imageFiles.length-1);
// 	randomImageFiles = imageFiles[randomImageIndex];
// 	console.log(randomImageFiles);


// 	for (var i=0; i < 11; i +=1){

// 	var randIndex = randInt (0, imageFiles. length-1) 
// 	var randFiles = imageFiles [randIndex];

// 	var imageElement = document.createElement("img")
// 	document.body.appendChild(imageElement);
// 	imageElement.style.position = "absolute";

// 	console.log(imageElement);
// }

