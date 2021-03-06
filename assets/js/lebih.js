const tambahan = document.querySelector('.tambahan');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

tambahan.addEventListener('click', function(e){

    if(e.target.className == 'thumb'){

        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function(){
            jumbo.classList.remove('fade');
        }, 500);

        thumbs.forEach(function(thumb){
            if(thumb.classList.contains('active')){
                thumb.classList.remove('active');
            }
        });

        e.target.classList.add('active');
    }
});