import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export default function signup(auth,email,password){
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {

    const user = userCredential.user;

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
 
  });
}
