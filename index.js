const $html = document.querySelector('html')
const $switch = document.querySelector('#switch')
modeText = document.querySelector('.modetext')

$switch.addEventListener('change',function() {
    $html.classList.toggle('dark-mode')

    if($html.classList.contains("dark-mode")){
        modeText.innerText = "Dark Mode";
    }else{
        modeText.innerText = "Light mode";
    }

    var theme;

    if($html.classList.contains('dark-mode')){
        theme = 'Dark'
    }else{
        theme = 'Light'
    }

    localStorage.setItem('PageTheme', JSON.stringify(theme))
})

let GetTheme = JSON.parse(localStorage.getItem('PageTheme'));

if(GetTheme === 'Dark'){
    $html.classList.toggle('dark-mode')
    modeText.innerText = "Dark Mode";
}else{
    modeText.innerText = "Light mode";
}