//defines the proper structure of a source

export class Source {
    protected title:string;
    protected url:string;
    protected info:string;
    //protected refE:string;  , refLoc:string
    //protected tags:String[]????

    constructor(sTitle:string, sURL:string, sInfo:string) {
        this.title = sTitle;
        this.url = sURL;
        this.info = sInfo;
    }

    // updateInfo() {
    //     //pass action type, & value
    //     //update type with given value
    // }

    // createSource(eType:string, name:string) {
    //     let newElement;
    //     if(eType === "project") {
    //         newElement = this.createProjectElement(name);
    //     } else {
    //         newElement = this.createSourceElement(name);
    //     }

    //     //find place to put element;
    // }

    createProjectElement(project:String):HTMLElement {
        let newE = document.createElement("div");
        newE.innerText = "Hello";
        return newE;
    }

    createSourceElement(source:Source):HTMLElement {
        let title:string = source.title;
        let url:string = source.url;
        let info:string = source.info;

        let newSE = document.createElement("li");
        let tag = document.createElement("a");

        newSE.innerText = title;
        //newSE.className = "tooltip";

        tag.href = url;
        newSE.appendChild(tag);

        return newSE;
    }
}