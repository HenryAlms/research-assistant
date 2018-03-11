//register views, controllers, and model

import {Model} from './model';
import {ProjectView} from './project-view';
import {ProjectController} from './projectControl';

let model = new Model();
let projectView = new ProjectView(model);
//let projectControl = new ProjectController(projectView, model);