const navbar = document.querySelector('nav');
const navClasses = navbar.classList;


window.addEventListener('scroll', function(){
    const currentScroll = window.scrollY;
    const isInShowPosition = currentScroll > 1000;
    const isInHidePosition = currentScroll < 500;

    if ( isInShowPosition && !navClasses.contains('fixed-top') ){
       navClasses.add('fixed-top');
    } else if ( !isInShowPosition && isInHidePosition ){
       navClasses.remove('fixed-top');
    }
});