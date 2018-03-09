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

    createSource(eType:string) {
        let newElement;
        if(eType === "project") {
            newElement = this.createProjectElement();
        } else {
            newElement = this.createSourceElement();
        }

        //find place to put element;
    }

    createProjectElement():HTMLElement {
        return HTMLElement;
    }

    createSourceElement():HTMLElement {
        return HTMLElement;
    }
}