import {Observer} from './observer';
import {Model} from './model';
import {Source} from './source';

export class ProjectController {

    constructor(private view:Observer, private model:Model) {
        this.model.newObserver(this.view);
    }

    addSource(src:Source) { //also need to add source info
        this.model.addSource(src);
    }

    addProject() {
        this.model.addProject("project");
    }

    // updateSource() {
    //     //old source
    //     //new source info
    // }

    notifyAll():void {
        this.model.notifyAll();
    }
}