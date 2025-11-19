 document.getElementById('playBtn').addEventListener('click', function () {

    // Hide button + thumbnail
    document.getElementById('playBtn').style.display = 'none';
    document.getElementById('thumbImage').style.display = 'none';

    // Play the YouTube video
    const iframe = document.getElementById('ytVideo');
    iframe.contentWindow.postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      '*'
    );
  });