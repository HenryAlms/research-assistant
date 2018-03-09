import {Source} from './source';
import {Model} from './model';
import {Observer} from './observer';
import {ProjectController as Controller} from './projectControl';


export class ProjectView implements Observer {
    //HTML reference

    //Refence current move
    //add variable to store action

    //initialize controller

    constructor(private model:Model) {
        //add event listeners for HTML manip
        
        //add controller function

        //add listener for action
    }

    notify() {
        this.display();
    }

    display() {
        //update view
    }

    //add event listener functions
}