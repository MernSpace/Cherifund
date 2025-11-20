document.addEventListener('DOMContentLoaded', function() {
        const playBtn = document.getElementById('playBtn');
        const thumbImage = document.getElementById('thumbImage');
        const ytVideo = document.getElementById('ytVideo');
        
        // Initially hide the video
        ytVideo.style.display = 'none';
        
        playBtn.addEventListener('click', function() {
            // Hide button + thumbnail
            playBtn.style.display = 'none';
            thumbImage.style.display = 'none';
            
            // Show the video
            ytVideo.style.display = 'block';
            
            // Play the YouTube video
            ytVideo.src += "&autoplay=1";
        });
    });