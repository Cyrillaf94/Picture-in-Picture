const videoElement = document.getElementById('video')
const button = document.getElementById('button')

  
// Prompt user to select media stream to pass it to the video element then play it out
async function selectMediaStream() {
    try {
const mediaStream = await navigator.mediaDevices.getDisplayMedia();
videoElement.srcObject = mediaStream
videoElement.onloadedmetadata = () => {
    videoElement.play();
}
    } catch (error) {
      console.log(error)  // Catch error here
    }
}




button.addEventListener('click', async () => {
// Disable Button
button.disabled = true;
// Start Picture in Picture
await videoElement.requestPictureInPicture();
// Reset Button
button.disabled = false;
});


selectMediaStream();