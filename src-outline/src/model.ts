import {Source} from './source'
import {Observer} from './observer';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config:Object = {
  apiKey: "AIzaSyDeLU3RM4euNLdTEmJEylZWwpuby8npAac",
  authDomain: "research-assistant-ae878.firebaseapp.com",
  databaseURL: "https://research-assistant-ae878.firebaseio.com",
  projectId: "research-assistant-ae878",
  storageBucket: "research-assistant-ae878.appspot.com",
  messagingSenderId: "367187460852"
};

export class Model {
  protected fBase:any;
  protected sList:Source[] = [];
  protected observers:Observer[] = [];

  protected fbUser:string|null = null; //sets the user query to make sure user can only access here.
  protected projQuery:string = "";

  constructor() {
    this.fBase = firebase.initializeApp(config);
  }

  verifyUser(email:string, password:string):boolean {
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error:any) => {
      if(error.code === "auth/email-already-in-use") {
        return false;
      } else if (error.code === "auth/invalid-email") {
        firebase.auth().createUserWithEmailAndPassword(email, password);
        this.fbUser = "/users/user" + email;
        return true;
      } else {
        window.alert(error.message);
        return false;
      }
    });
    this.fbUser = "/users/user" + email;
    return true;
  }

  newObserver(obsv:Observer) {
    this.observers.push(obsv);
  }

  removeObserver(obsv:Observer) {
    //remove Observer
    //let index = this.observers.indexOf(obsv);
    //splice
  }

  getSources(dbRef:string):Source[] {
    this.projQuery = this.fbUser + dbRef;
    return this.sList;
  }

  getSourceAt():Source {
    //return specific source
    return this.sList[0];
  }

  getProjects():String[] {
    //return collection of projects
    return this.fBase.snapshot();
  }

  getProjectAt():String {
    //return specific project
    return this.fBase.snapshot()[0];
  }

  notifyAll():void {
    this.observers.forEach((o) => {
      o.notify();
    });
  }

  addSource(location:string) {
    //something
  }

  addProject(name:string) {
    //something
  }
  
}