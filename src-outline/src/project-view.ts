import {Source} from './source';
import {Model} from './model';
import {Observer} from './observer';
import {ProjectController as Controller} from './projectControl';


export class ProjectView implements Observer {
    //HTML reference
    protected docRef:NodeList = document.getElementsByTagName("input"); //on input, check val. if project, update display
    
    protected newProj:HTMLInputElement = document.getElementById("newP") as HTMLInputElement;
    private selectedProj:string;

    // protected logIn:HTMLElement = document.getElementById("logIn") Get user info from index.js
    protected loginBtn:HTMLInputElement = document.getElementById("signIn") as HTMLInputElement;
    private user:string|null = null;

    //Refence current move
    //add variable to store action

    private controller:Controller;

    constructor(private model:Model) {
        this.controller = new Controller(this, model);
        this.newProj.addEventListener("click", this.addNewProject);

        this.loginBtn.addEventListener("submit", this.verifyUser);

        //add event listeners for HTML manip
        let projectButtons = $("input:radio");
        this.selectedProj = projectButtons.val() as string;
        projectButtons.change((e) => {
            this.selectedProj = $(e).target.val() as string;
        })
        
        //add controller function

        //add listener for action
    }

    notify() {
        this.display();
    }

    display() {
        //load sources
        this.displayProjects();
        this.displaySources();
    }

    displayProjects() {
        //something
        
    }

    displaySources() {
        //soem
        let sourceList:Source[];
        sourceList = this.model.getSources("/" + this.selectedProj);
        sourceList.forEach((source) => {
            source.createSourceElement(source); //probably need project ref?
        })
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
        let uRef = document.getElementById("uName");
        let pRef = document.getElementById("pWord");
        let email:string = "";
        let password:string = "";
        let auth:boolean = false;

        if(uRef && pRef) {
            email = uRef.innerText;
            password = pRef.innerText;
            auth = this.controller.verifyUser(email, password);
        } 

        if(auth) {
            this.user = email;
            let logInDisplay = document.getElementById("logIn") as HTMLDivElement;
            logInDisplay.remove();
            this.display();
        }
    }

    nameElement(stlye:string) {
        //this
    }

    changeProject() {
        //something
    }

    //add event listener functions
}