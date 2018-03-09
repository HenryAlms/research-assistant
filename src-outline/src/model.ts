import {Source} from './source'
import {Observer} from './observer';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const config:Object = {
  apiKey: "AIzaSyDeLU3RM4euNLdTEmJEylZWwpuby8npAac",
  authDomain: "research-assistant-ae878.firebaseapp.com",
  databaseURL: "https://research-assistant-ae878.firebaseio.com",
  projectId: "research-assistant-ae878",
  storageBucket: "research-assistant-ae878.appspot.com",
  messagingSenderId: "367187460852"
};

export class Model {
  protected fBase:firebase;
  protected fStore:any;
  protected sList:Source[];
  protected observers:Observer[];

  constructor() {
    this.fBase = firebase.initializeApp(config);
    this.fStore = this.fBase.firestore();
    this.sList = [];
  }

  getSources():Source[] {
    return this.sList;
  }

  getSourceAt():Source {
    //return specific source
  }

  getProjects():String[] {
    //return collection of projects
  }

  getProjectAt():String {
    //return specific project
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