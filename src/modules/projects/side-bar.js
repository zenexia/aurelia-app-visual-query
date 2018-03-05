import {ProjectRepository} from "../../nucleus/projects/project-repository";

export class SideBar {
    static inject = [ProjectRepository];

    constructor(projectRepo)
    {
        this.sideBarTitle = `Projects`;
        this.sideBarIcon = `fa fa-tasks`;
        this.repo = projectRepo;
    }
/*
    created() {
        console.log("Starting to get data");
        this.repo.getAll()
            .then((projects) => {
                    this.projects = projects
                }
            );
    }
    */

}