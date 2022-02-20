import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
  const firebaseConfig = {
    apiKey: "AIzaSyDf1eMzkouraH_se90scQXP29ASkJXd0Kk",
    authDomain: "iot-application-5ffc1.firebaseapp.com",
    projectId: "iot-application-5ffc1",
    storageBucket: "iot-application-5ffc1.appspot.com",
    messagingSenderId: "439352391599",
    appId: "1:439352391599:web:47a510f50dcc5fe392215a",
    measurementId: "G-07NSPXTSBC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export const auth = app.auth();
  export default app;