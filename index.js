const $html = document.querySelector('html')
const $switch = document.querySelector('.darkswitch')
modeText = document.querySelector('.modetext')

$switch.addEventListener('change',function() {
    $html.classList.toggle('dark-mode')
    $switch.classList.toggle('active')

    if($html.classList.contains("dark-mode")){
        modeText.innerText = "Dark Mode";
    }else{
        modeText.innerText = "Light mode";
        $switch.classList.toggle('not-active')
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
    $switch.classList.toggle('active')
}else{
    modeText.innerText = "Light mode";
    $switch.classList.toggle('not-active')
}