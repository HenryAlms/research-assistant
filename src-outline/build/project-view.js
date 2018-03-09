"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var projectControl_1 = require("./projectControl");
var ProjectView = /** @class */ (function () {
    function ProjectView(model) {
        var _this = this;
        this.model = model;
        //HTML reference
        this.docRef = document.getElementsByName("input"); //on input, check val. if project, update display
        this.newProj = document.getElementById("newP");
        this.controller = new projectControl_1.ProjectController(this, model);
        this.newProj.addEventListener("click", this.addNewProject);
        this.user = "";
        //add event listeners for HTML manip
        var projectButtons = $("input:radio");
        this.selProj = projectButtons.val();
        projectButtons.change(function (e) {
            _this.selProj = $(e).target.val();
        });
        //add controller function
        //add listener for action
    }
    ProjectView.prototype.notify = function () {
        this.display();
    };
    ProjectView.prototype.display = function () {
        //load sources
        //update view
    };
    ProjectView.prototype.addNewProject = function () {
        var projTitle = document.createElement("input; type:text");
        // let title:string;
        // projTitle.addEventListener("input", (e) => {
        //     title = e.target.;
        // })
        this.newProj.insertAdjacentElement("afterend", projTitle);
        this.controller.addProject();
    };
    ProjectView.prototype.verifyUser = function () {
        //set user
        //authentice FB user
        //this.dispaly()
    };
    ProjectView.prototype.changeProject = function () {
        //something
    };
    return ProjectView;
}());
exports.ProjectView = ProjectView;
