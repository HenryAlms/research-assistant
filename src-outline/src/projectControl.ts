import {Observer} from './observer';
import {Model} from './model';
import {Source} from './source';

export class ProjectController {
    protected project:string;

    constructor(private view:Observer, private model:Model) {
        this.project = "";
        this.model.newObserver(this.view);
    }

    addSource(proj:string) { //also need to add source info
        //addSource
    }

    addProject() {
        //addProject
        
    }

    updateSource() {
        //old source
        //new source info
    }

    notifyAll():void {
        this.model.notifyAll();
    }
}