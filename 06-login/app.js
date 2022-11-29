import {app} from './firebase.js'
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const btnGoogle=document.querySelector("#btnGoogle");
btnGoogle.addEventListener('click', async()=>{


});

const btnIniciarSesion=document.querySelector("#btnIniciarSesion");
btnIniciarSesion.addEventListener('click', async(e)=>{
    e.preventDefault();
    const email=document.querySelector("#iniciarEmail");
    const password=document.querySelector("#iniciarPassword");
    console.log(email.value,password.value);
    try {
        const res= await signInWithEmailAndPassword(auth, email.value, password.value)
        console.log(res.user);
        Swal.fire('bienvenido');
        const user2=res.user;      
        var myModalEl = document.getElementById('iniciarModal');
        var modal = bootstrap.Modal.getInstance(myModalEl)
        modal.hide();
        const res2= await onAuthStateChanged(auth,(user2) =>{
          const container=document.querySelector("#container");
          if (user2){
            container.innerHTML=`<h1>${user2.email}</h1>`
            document.querySelector("#iniciar").style.display="none";
            document.querySelector("#crear").style.display="none";
            const uid=user2.uid;
          
          }else{
            container.innerHTML=`<h1>no hay usuario</h1>`
          }
        })
       
    }catch(error) {
        Swal.fire('usuario y/o contraseña incorrecta');
    }

});


const btnCrearCuenta = document.querySelector("#btnCrearCuenta");
btnCrearCuenta.addEventListener('click', async(e)=>{
    e.preventDefault();
    const email=document.querySelector("#crearEmail");
    const password=document.querySelector("#crearPassword");
    console.log(email.value,password.value);
    var myModalEl = document.getElementById('crearModal');
    var modal = bootstrap.Modal.getInstance(myModalEl)
    try {
    const respuesta=await createUserWithEmailAndPassword(auth, email.value, password.value)
    console.log(respuesta.user);
    Swal.fire({
      title: 'La cuenta se creo con exito',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
      
        left top
        no-repeat
      `
    })
  
  email.value='';
  password.value=''
  modal.hide();
  } catch(error){
  console.log(error.code);
  const code=error.code;
  if(code=='auth/invalid-email'){
      Swal.fire({
          title: 'Correo invalido',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
  } if(code=='auth/weak-password'){
      Swal.fire('Contraseña invalida')
  
  }if(code=='auth/email-already-in-use'){
  Swal.fire('Correo ya en uso')
  }
  
  }
  
  
  
   });
