
export class Source {
    readonly title:string;
    readonly url:string;
    readonly info:string;
    readonly project:string;

    constructor(sTitle:string, sURL:string, sInfo:string, sProject:string) {
        this.title = sTitle;
        this.url = sURL;
        this.info = sInfo;
        this.project = sProject;
    }

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
        newSE.id = "source";
        let tag = document.createElement("a");

        let srcList = document.getElementById("sources");

        tag.innerText = title;

        tag.href = url;
        newSE.appendChild(tag);
        console.log("here");

        srcList!.appendChild(newSE);

        return newSE;
    }
}