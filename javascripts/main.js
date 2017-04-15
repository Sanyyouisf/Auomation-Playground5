console.log("Auomation-Playground5");
var images =[
	{
		number:"1",
		image :"http://hdwallpaperbackgrounds.net/wp-content/uploads/2017/01/Dubai-Photos-Images-Photos-of-Dubai-800x600.jpg"
	},
	{
		number:"2",
		image :"http://hdwallpaperbackgrounds.net/wp-content/uploads/2017/01/free-high-resolution-images-for-download.jpg"
	},
	{
		number:"3",
		image :"http://hdwallpaperbackgrounds.net/wp-content/uploads/2017/01/background-gmail-google-images.jpg"
	},
	{
		number:"4",
		image :"http://hdwallpaperbackgrounds.net/wp-content/uploads/2017/01/images-Desktop-Wide.jpg"
	},
	{
		number:"5",
		image :"http://hdwallpaperbackgrounds.net/wp-content/uploads/2017/01/images-Water-HD.jpg"
	},
	{
		number:"6",
		image :"http://hdwallpaperbackgrounds.net/wp-content/uploads/2017/01/images-HD.jpg"
	},
	{
		number:"7",
		image :"http://hdwallpaperbackgrounds.net/wp-content/uploads/2017/01/images-ducklings-running.jpg"
	},
	{
		number:"8",
		image :"http://hdwallpaperbackgrounds.net/wp-content/uploads/2017/01/images-dog-play.jpg"
	},
	{
		number:"9",
		image :"http://hdwallpaperbackgrounds.net/wp-content/uploads/2017/01/images-Desktop-Wallpapers.jpg"
	},
	{
		number:"10",
		image :"http://hdwallpaperbackgrounds.net/wp-content/uploads/2017/01/images-blue-Cat-Eyes.png"
	}
]


//to load the images in the output div

$.each (images, function (index,value) {
    index += 1;
    $("#output").append(`<div class="card">`);
    $(".card:nth-of-type(" + index + ")").append(`<image class="image col-md-3" src=${value.image} >`);  
});





