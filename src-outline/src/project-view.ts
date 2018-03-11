import {Source} from './source';
import {Model} from './model';
import {Observer} from './observer';
import {ProjectController as Controller} from './projectControl';


export class ProjectView implements Observer {
    //HTML reference
    protected docRef:NodeList = document.getElementsByTagName("input"); //on input, check val. if project, update display
    

    private newProj:HTMLInputElement; 
    private selectedProj:string;

    // protected logIn:HTMLElement = document.getElementById("logIn") Get user info from index.js
    protected loginBtn:HTMLInputElement;
    private user:string|null = null;

    //Refence current move
    //add variable to store action

    private controller:Controller;

    constructor(private model:Model) {
        this.controller = new Controller(this, model);

        this.newProj = document.getElementById("newP") as HTMLInputElement;
        this.newProj.addEventListener("click", () => this.addNewProject());

        this.loginBtn = document.getElementById("signIn") as HTMLInputElement;
        this.loginBtn.addEventListener("submit", () => this.verifyUser());

        //add event listeners for HTML manip
        let buttons = document.getElementsByTagName("input:radio");

        let btnArray = Array.prototype.slice.call(buttons,0);

        this.selectedProj = "";

        let projectButtons = btnArray.forEach((element:HTMLElement) => {
            element.addEventListener("click", () => {
                this.selectedProj = element.innerText as string; //might need to cahnge to vlaue ?????
            })
        });

        // this.selectedProj = projectButtons.val() as string;
        // projectButtons.change((e) => {
        //     this.selectedProj = $(e).target.val() as string;
        // })
        
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
        let projTitle = document.createElement("input");
        // let title:string;
        // projTitle.addEventListener("input", (e) => {
        //     title = e.target.;
        // })
        this.newProj.insertAdjacentElement("afterend", projTitle);
        this.controller.addProject();
    }

    verifyUser() {
        console.log("verify");
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
            console.log("auth");
            this.user = email;
            let logInDisplay = document.getElementById("logIn") as HTMLDivElement;
            logInDisplay.remove();
            let enable = document.getElementById("newP") as HTMLInputElement;
            enable.disabled = false;
            this.display();
        }
    }

    nameElement(stlye:string) {
        //this
    }

    changeProject() {
        //something
    }
}