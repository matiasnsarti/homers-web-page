window.addEventListener('load', function(){
    const loader = document.getElementById('loader');
    this.setTimeout(function(){
        loader.classList.toggle('loader2');
        document.body.querySelector('audio').play();
    }, 3000)
})