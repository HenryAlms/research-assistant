"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProjectController = /** @class */ (function () {
    function ProjectController(view, model) {
        this.view = view;
        this.model = model;
        this.project = "";
        this.model.newObserver(this.view);
    }
    ProjectController.prototype.addSource = function (proj) {
        //addSource
    };
    ProjectController.prototype.addProject = function () {
        //addProject
    };
    ProjectController.prototype.updateSource = function () {
        //old source
        //new source info
    };
    ProjectController.prototype.notifyAll = function () {
        this.model.notifyAll();
    };
    return ProjectController;
}());
exports.ProjectController = ProjectController;
