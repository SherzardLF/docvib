// Add JavaScript code here later
const videoUpload = document.getElementById('video-upload');
const uploadButton = document.getElementById('upload-button');
const videoContainer = document.getElementById('video-container');

uploadButton.addEventListener('click',()=>{
    const videoFile = videoUpload.files[0];
    // Add code to handle video upload here
    const videoUrl = await
    github.uploadVideo(videoFile);

    const videoElement = document.createElement('video');
    videoElement.src = videoUrl;
    videoElement.controls = true;

    videoContainer.appendChild(videoElement);

});
