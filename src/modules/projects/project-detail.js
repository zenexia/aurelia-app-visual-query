export class ProjectDetail {

    constructor()
    {
        this.ProjectName = `My Favourite Project`;

    }

    activate(params, routeConfig) {
        //console.log(params);
        this.id = params.id;
    }
}