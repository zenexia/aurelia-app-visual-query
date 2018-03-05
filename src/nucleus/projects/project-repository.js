import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-fetch-client";

@inject(HttpClient)
export class ProjectRepository {

    constructor(http) {
        this.http = http;
        this.url = "http://bq.vm/projects";
    }
    async getAll() {
        fetch(this.url, {
            credentials: 'same-origin',
            method: 'get'
        }).then(function(response) {
            return response.text();
        }).then(function(text) {
            return text;
            //document.getElementById("projects-list").innerHTML = text;
        }).catch(function(err) {
            console.log(err);
            return null;
        });
    }
}