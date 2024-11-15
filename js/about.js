document.addEventListener('DOMContentLoaded', function() {
    const aboutShort = document.getElementById('about-short');
    const aboutLong = document.getElementById('about-long');
    const moreButton = document.getElementById('more-button');
    const lessButton = document.getElementById('less-button');

    aboutLong.style.display = 'none';
    aboutShort.style.display = 'block';

    moreButton.addEventListener('click', function() {
        aboutShort.style.display = 'none';
        aboutLong.style.display = 'block';
        
        moreButton.style.display = 'none';
        lessButton.style.display = 'inline-block';
    });

    lessButton.addEventListener('click', function() {
        aboutShort.style.display = 'block';
        aboutLong.style.display = 'none';
        
        lessButton.style.display = 'none';
        moreButton.style.display = 'inline-block';
    });
});
