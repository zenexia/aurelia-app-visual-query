import {inject} from 'aurelia-framework';
import { Router } from 'aurelia-router';

@inject(Router)
export class SideBar {
    constructor(router)
    {
        this.sideBarTitle = `Search Options`;
        this.sideBarIcon = `fa fa-search`;
        this.router = router;
    }

    isSingleTable(){
        //return this.router.currentInstruction.config.name; //name of the route
        //return this.router.currentInstruction.config.moduleId; //moduleId of the route
        console.log(this.router.currentInstruction.config.name);
        return (this.router.currentInstruction.config.name === "single-table");
    }

    isMultiTable(){
        console.log(this.router.currentInstruction.config.name);

        return (this.router.currentInstruction.config.name === "multi-table");
    }

}