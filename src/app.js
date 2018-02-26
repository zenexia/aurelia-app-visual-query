export class App {
  constructor() {
    this.message = 'V-Query!';
  }

    configureRouter(config, router) {
        config.title = 'Projects';
        config.options.pushState = true;
        config.map([
            {
                route: ["", "/"],

                title: 'V-Query Dashboard',
                viewPorts: {
                    main: {
                        moduleId: './modules/dashboard/home'
                    },
                    sidebar: {
                        moduleId: './modules/dashboard/side-bar'
                    }
                }
            },
            {
                route: '/search',
                moduleId: './modules/search/search-form',
                title: 'Search Form'
            },
            {
                route: '/projects',
                moduleId: './modules/projects/projects-list',
                title: 'Projects List'
            },
            {
                route: 'projects/:id',
                moduleId: './modules/projects/project-detail',
                title: 'Project Detail',
                name:'projects'
            },
            {
                route: '/segments',
                moduleId: './modules/segments/segment-index',
                title: 'Segment Index'
            }
        ]);

        this.router = router;
    }

}
