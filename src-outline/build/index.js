"use strict";
//register views, controllers, and model
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = require("./model");
var project_view_1 = require("./project-view");
var projectControl_1 = require("./projectControl");
var model = new model_1.Model();
var projectView = new project_view_1.ProjectView(model);
var projectControl = new projectControl_1.ProjectController(projectView, model);
//export = this;
//# sourceMappingURL=index.js.map