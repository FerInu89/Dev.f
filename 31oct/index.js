const formDom = document.getElementById('formulario')

const DbUser = 'luis'
const Dbpassword = '123'

function validar (us, pas){
    if(us === DbUser && pas === Dbpassword){
        alert('bienvenido ' + us)
    }else{
        alert('Datos incorrectos')
    }
}

formDom.addEventListener('submit', (evento)=>{
    evento.preventDefault()
    let userDom = document.getElementById('user').value
    let passDom = document.getElementById('password').value

    validar(userDom, passDom)
})