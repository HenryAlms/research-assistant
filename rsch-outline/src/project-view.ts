import {Source} from './source';
import {Model} from './model';
import {Observer} from './observer';
import {ProjectController as Controller} from './projectControl';


export class ProjectView implements Observer {
    //HTML reference    
    private newProj:HTMLInputElement; 
    private selectedProj:string;

    private controller:Controller;

    constructor(private model:Model) {
        this.controller = new Controller(this, model);

        this.newProj = document.getElementById("newP") as HTMLInputElement;
        this.newProj.addEventListener("click", () => this.addNewProject());

        this.selectedProj = "";
    }

    notify() {
        this.display();
    }

    display() {
        this.displaySources();
    }

    clearList() {
        while(document.getElementById("source")) {
            document.getElementById("source")!.remove();
        }
    }

    displaySources() {
        let sourceList:Source[];
        sourceList = this.model.getSources();

        this.clearList();

        sourceList.forEach((source) => {
            console.log("dispaly soruce")
            if(source.project === this.selectedProj) {
                source.createSourceElement(source); 
            }
        });
    }

    addNewProject() {
        this.titleHTML()
        this.controller.addProject();
    }

    titleHTML() {
        let nextProj = document.createElement("label");
        let projTitle = document.createElement("input");
    
        nextProj.setAttribute("class", "btn btn-default");
        projTitle.setAttribute("type", "text");
        projTitle.setAttribute("placeholder", "Project Name");
    
    
        let title:string = "";
        projTitle.addEventListener("change", () => {
            title = projTitle.value;
            this.selectedProj = title;
            nextProj.innerText = title;
            this.chooseProject(nextProj);
            this.clearList();
            this.newSourceButton();
        });
        nextProj.appendChild(projTitle);
        document.getElementById("projects")!.insertAdjacentElement("afterend", nextProj);
      }
    
      chooseProject(project:HTMLElement) {
        project.addEventListener("click", () => {
          this.selectedProj = project.innerText;
          this.clearList();
          this.display();
          this.newSourceButton();
        })
    
      }
    
      newSourceButton() {
        let srcItem = document.createElement("li");
        let srcBtn = document.createElement("input");

        srcItem.setAttribute("id", "source");
        srcBtn.value = "New Source";
        srcBtn.setAttribute("type", "button");
        
        srcItem.appendChild(srcBtn);
    
        srcBtn.addEventListener("click", (e) => {
          srcBtn.remove();
          this.sourceHTML();
        })
        document.getElementById("sources")!.appendChild(srcItem);
      }
    
      sourceHTML() {
        let newSource:Source;
        let sourceForm = document.createElement("form");
        sourceForm.setAttribute("class", "container col-xs-1");
    
        let sourceTitle = document.createElement("input");
        sourceTitle.setAttribute("placeholder", "Source Title");
    
        let sourceURL = document.createElement("input");
        sourceURL.setAttribute("placeholder", "Source Url");
    
        let sourceInfo = document.createElement("input");
        sourceInfo.setAttribute("placeholder", "Source Info");
    
        let submitSource = document.createElement("input");
        submitSource.setAttribute("type", "submit");
    
        sourceForm.appendChild(sourceTitle);
        sourceForm.appendChild(sourceURL);
        sourceForm.appendChild(sourceInfo);
        sourceForm.appendChild(submitSource);
    
        submitSource.addEventListener("click", (e) => {
          newSource = new Source(sourceTitle.value, sourceURL.value, sourceInfo.value, this.selectedProj);
          sourceForm.remove();      
          this.controller.addSource(newSource);
          this.newSourceButton();
        });
        
        document.getElementById("source")!.appendChild(sourceForm);
      }
}