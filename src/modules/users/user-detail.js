export class UserDetail {

    constructor()
    {
        this.userName = `My Favourite User`;

    }

    activate(params, routeConfig) {
        this.routeConfig = routeConfig;
        console.log(parms);
        this.id = params.id;
    }
}