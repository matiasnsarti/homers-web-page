window.addEventListener('load', function(){
    const loader = document.getElementById('loader');
    const audio = document.body.querySelector('audio');
    this.setTimeout(function(){
        loader.classList.toggle('loader2');
        audio.play();
    }, 3000)
})