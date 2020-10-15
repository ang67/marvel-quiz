import app from 'firebase/app'
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAvqZ-sjLKO_WWPMgKuF_LPkHCx3ctz8DI",
    authDomain: "marvel-quiz-93d57.firebaseapp.com",
    databaseURL: "https://marvel-quiz-93d57.firebaseio.com",
    projectId: "marvel-quiz-93d57",
    storageBucket: "marvel-quiz-93d57.appspot.com",
    messagingSenderId: "924582896425",
    appId: "1:924582896425:web:d8461dc6e4e57e15ce8d38"
  };

class Firebase {
    constructor() {
        app.initializeApp(config)
        this.auth = app.auth();
    }

    //inscription
    signupUser = (email, password) => 
    this.auth.createUserWithEmailAndPassword(email, password)

    // connexion
    loginUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

    // déconnexion
    signoutUser = () => this.auth.signOut()

    // récupérer le mot de passe
    passwordReset = email => this.auth.sendPasswordResetEmail(email)
}

export default Firebase;