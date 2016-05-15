//Problem: User when clickng on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
    
    // An image to overlay

$overlay.append($image);

// Add overlay
    
$("body").append($overlay);
    // A caption to overlay
$overlay.append($overlay);
//1, Capture the click event on a link to an image
$("#imageGallery a").click(function(event) {
    event.preventDefault();
    var imageLocation = $(this).attr("href");
//1,2. Update overylay with the image linked in the link
    $image.attr("src", imageLocation);
    
    //1,1. Show the overlay
    $overlay.show();
    
    // 1,3. Get child's alt attribute and set caption

//var captionText = $(this).children("img").attr("alt");
//$caption.text(captionText);
    
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
});



//3, When overlay is clicked

$overlay.click(function() {
    //Hide overlay
    $overlay.hide();
    
});
    
