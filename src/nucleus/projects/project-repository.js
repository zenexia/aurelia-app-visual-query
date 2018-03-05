import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-fetch-client";

@inject(HttpClient)
export class ProjectRepository {

    constructor(http) {
        /*
        this conf moved to main.js
        http.configure(config => {
            config.useStandardConfiguration()
                .withBaseUrl("http://bq.vm/")
                .withDefaults({
                    credentials: 'same-origin',
                    headers: {
                        'X-Requested-With': 'Fetch'
                    }
                });
            }

        );*/
        this.http = http;
    }
    async getAll() {

            let response = await this.http.fetch(`projects`);
            let data = await response.json();
            return data;
    }
}