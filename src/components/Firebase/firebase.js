import app from 'firebase/app'

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
    }
}

export default Firebase;