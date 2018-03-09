import {Source} from './source';
import {Model} from './model';
import {Observer} from './observer';
import {ProjectController as Controller} from './projectControl';


export class ProjectView implements Observer {
    //HTML reference
    protected docRef:NodeList = document.getElementsByName("input"); //on input, check val. if project, update display
    protected newProj:HTMLInputElement = document.getElementById("newP") as HTMLInputElement;
    private selProj:string;

    // protected logIn:HTMLElement = document.getElementById("logIn") Get user info from index.js
    private user:string;

    //Refence current move
    //add variable to store action

    private controller:Controller;

    constructor(private model:Model) {
        this.controller = new Controller(this, model);
        this.newProj.addEventListener("click", this.addNewProject);

        this.user = "";

        //add event listeners for HTML manip
        let projectButtons = $("input:radio");
        this.selProj = projectButtons.val() as string;
        projectButtons.change((e) => {
            this.selProj = $(e).target.val() as string;
        })
        
        //add controller function

        //add listener for action
    }

    notify() {
        this.display();
    }

    display() {
        //load sources
        //update view
    }

    addNewProject() {
        let projTitle = document.createElement("input; type:text");
        // let title:string;
        // projTitle.addEventListener("input", (e) => {
        //     title = e.target.;
        // })
        this.newProj.insertAdjacentElement("afterend", projTitle);
        this.controller.addProject();
    }

    verifyUser() {
        //set user
        //authentice FB user
        //this.dispaly()
    }

    changeProject() {
        //something
    }

    //add event listener functions
}