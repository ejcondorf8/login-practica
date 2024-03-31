import html from './app.html?raw'
import {encriptedPassword} from './use-cases/index'

export const App =(element) => {
    const displayTodo= () => {
        
        const user=document.querySelector('#username')
        const pass=document.querySelector('#password')
        const btn=document.querySelector('.login-btn')
        btn.addEventListener('click', () => {
            alert(`Bienvenido ${user.value}`)
            const encryptedPassword = encriptedPassword(pass.value)
            alert(`Tu contraseña es ${encryptedPassword}`)
            
        })

    }


    (() => {
        const app= document.createElement('div')
        app.innerHTML = html
        document.querySelector(element).append(app)
        console.log('App cargada')
        displayTodo()
            
    })() 

}