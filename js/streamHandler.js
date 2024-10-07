document.getElementById("openModal").onclick = function() {
    console.log("Button clicked");
    var modal = document.getElementById("videoModal");
    var iframe = document.getElementById("youtubeVideo");
    
    var videoID = this.getAttribute("data-video");
    console.log("Video ID: ", videoID); // Check if the video ID is correct
    
    // YouTube video URL
    var videoURL = "https://www.youtube.com/embed/" + videoID;
    console.log("Video URL: ", videoURL); // Check if the embed URL is correct
    
    // Set the iframe source to the YouTube video
    iframe.src = videoURL + "?autoplay=1"; // Autoplay when modal opens
    
    // Show the modal
    modal.style.display = "block";
    console.log("Modal should now be visible");
};

// Close the modal when the close button is clicked
document.getElementById("closeModal").onclick = function() {
    var modal = document.getElementById("videoModal");
    var iframe = document.getElementById("youtubeVideo");
    
    // Hide the modal
    modal.style.display = "none";
    
    // Stop the video by removing the iframe source
    iframe.src = "";
};

// Close the modal if the user clicks outside the modal content
window.onclick = function(event) {
    var modal = document.getElementById("videoModal");
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById("youtubeVideo").src = ""; // Stop the video
    }
};