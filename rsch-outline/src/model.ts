import {Source} from './source'
import {Observer} from './observer';

export class Model {
  protected sList:Source[] = [];
  protected observers:Observer[] = [];
  protected projectList:String[] = [];

  protected projQuery:string = "";

  constructor() {
  }

  newObserver(obsv:Observer) {
    this.observers.push(obsv);
  }

  getSources():Source[] {
    return this.sList;
  }
  

  getProjects():String[] {

    return this.projectList;
  }


  notifyAll():void {
    this.observers.forEach((o) => {
      o.notify();
    });
  }

  addSource(source:Source) {
    this.sList.push(source);
    this.notifyAll();
  }

  addProject(project:string) {
    this.projectList.push(project);
  }
  
}