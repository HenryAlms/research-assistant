"use strict";
//defines the proper structure of a source
Object.defineProperty(exports, "__esModule", { value: true });
var Source = /** @class */ (function () {
    //protected refE:string;  , refLoc:string
    //protected tags:String[]????
    function Source(sTitle, sURL, sInfo) {
        this.title = sTitle;
        this.url = sURL;
        this.info = sInfo;
    }
    // updateInfo() {
    //     //pass action type, & value
    //     //update type with given value
    // }
    Source.prototype.createSource = function (eType) {
        var newElement;
        if (eType === "project") {
            newElement = this.createProjectElement();
        }
        else {
            newElement = this.createSourceElement();
        }
        //find place to put element;
    };
    Source.prototype.createProjectElement = function () {
        var newE = document.createElement("div");
        newE.innerText = "Hello";
        return newE;
    };
    Source.prototype.createSourceElement = function () {
        return HTMLElement;
    };
    return Source;
}());
exports.Source = Source;
//# sourceMappingURL=source.js.map