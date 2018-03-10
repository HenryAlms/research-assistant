"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var projectControl_1 = require("./projectControl");
var ProjectView = /** @class */ (function () {
    function ProjectView(model) {
        var _this = this;
        this.model = model;
        //HTML reference
        this.docRef = document.getElementsByTagName("input"); //on input, check val. if project, update display
        this.newProj = document.getElementById("newP");
        // protected logIn:HTMLElement = document.getElementById("logIn") Get user info from index.js
        this.loginBtn = document.getElementById("signIn");
        this.user = null;
        this.controller = new projectControl_1.ProjectController(this, model);
        this.newProj.addEventListener("click", this.addNewProject);
        this.loginBtn.addEventListener("submit", function (e) { _this.verifyUser(e); });
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
    ProjectView.prototype.verifyUser = function (event) {
        var uRef = document.getElementById("uName");
        var pRef = document.getElementById("pWord");
        var email = "";
        var password = "";
        var auth = false;
        if (uRef && pRef) {
            email = uRef.innerText;
            password = pRef.innerText;
            auth = this.controller.verifyUser(email, password);
        }
        if (auth) {
            this.user = email;
            this.display();
            var logInDisplay = document.getElementById("logIn");
            logInDisplay.remove();
        }
    };
    ProjectView.prototype.changeProject = function () {
        //something
    };
    return ProjectView;
}());
exports.ProjectView = ProjectView;
//# sourceMappingURL=project-view.js.map