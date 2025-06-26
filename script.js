const header = document.getElementById('cabecalho')
const form = document.getElementById('form-header')

function mudaCabecalho() {
    window.addEventListener('scroll', function(){
        if(window.scrollY > 0)
        {
            header.style.opacity = '0'
        }
        else{
            {
            header.style.opacity = ''
        }
        }

        if(window.scrollY >= 780)
        {
            header.style.backgroundColor = '#2C3E50'
            form.style.backgroundColor = '#2c3e50ee'
            header.style.opacity = ''
            header.style.marginTop = '74px'
        }
        else{
            {
            header.style.backgroundColor = ''
            form.style.backgroundColor = ''
            header.style.marginTop = ''
        }
        }
    })
}

mudaCabecalho()