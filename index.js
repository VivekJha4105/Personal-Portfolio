console.log("Script Running...");

document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGoAway');
    if (document.querySelector('.sidebar').classList.contains('sidebarGoAway')){
        setTimeout(() => {
            document.querySelector('.ham').style.display = 'inline';
        }, 300);
        document.querySelector('.cross').style.display = 'none';
    }
    else {
        document.querySelector('.ham').style.display = 'none';
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline';
        }, 300);
    }
});
