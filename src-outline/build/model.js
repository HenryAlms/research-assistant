"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("firebase/app"));
require("firebase/auth");
require("firebase/database");
var config = {
    apiKey: "AIzaSyDeLU3RM4euNLdTEmJEylZWwpuby8npAac",
    authDomain: "research-assistant-ae878.firebaseapp.com",
    databaseURL: "https://research-assistant-ae878.firebaseio.com",
    projectId: "research-assistant-ae878",
    storageBucket: "research-assistant-ae878.appspot.com",
    messagingSenderId: "367187460852"
};
var Model = /** @class */ (function () {
    function Model() {
        this.sList = [];
        this.observers = [];
        this.fBase = app_1.default.initializeApp(config);
        this.fbUser = "";
        this.projQuery = this.fbUser + "";
    }
    Model.prototype.verifyUser = function (email, password) {
        app_1.default.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            if (error.code === "auth/email-already-in-use") {
                return false;
            }
            else if (error.code === "auth/invalid-email") {
                app_1.default.auth().createUserWithEmailAndPassword(email, password);
                return true;
            }
            else {
                window.alert(error.message);
                return false;
            }
        });
        return true;
    };
    Model.prototype.newObserver = function (obsv) {
        this.observers.push(obsv);
    };
    Model.prototype.removeObserver = function (obsv) {
        //remove Observer
        //let index = this.observers.indexOf(obsv);
        //splice
    };
    Model.prototype.getSources = function () {
        return this.sList;
    };
    Model.prototype.getSourceAt = function () {
        //return specific source
        return this.sList[0];
    };
    Model.prototype.getProjects = function () {
        //return collection of projects
        return this.fBase.snapshot();
    };
    Model.prototype.getProjectAt = function () {
        //return specific project
        return this.fBase.snapshot()[0];
    };
    Model.prototype.notifyAll = function () {
        this.observers.forEach(function (o) {
            o.notify();
        });
    };
    Model.prototype.addSource = function (location) {
        //something
    };
    Model.prototype.addProject = function (name) {
        //something
    };
    return Model;
}());
exports.Model = Model;
//# sourceMappingURL=model.js.map