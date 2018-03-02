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
                moduleId: './modules/dashboard/home',
                nav: true
            },
            {
                route: 'search',
                title: 'Search Form',
                viewPorts: {
                    sideBar: {
                        moduleId: './modules/search/search-form'
                    },
                    mainContent: {
                        moduleId: './modules/search/search-form'
                    }
                },
                nav: true
            },
            {
                route: "projects",
                title: 'Project Section',
                name:'project-section',
                viewPorts: {
                    sideBar: {
                        moduleId: './modules/search/search-form'
                    },
                    mainContent: {
                        moduleId: './modules/projects/project-section'
                    }
                },
                nav: true
            },
            {
                route: 'segments',
                title: 'Segment Index',
                viewPorts: {
                    sideBar: {
                        moduleId: './modules/search/search-form'
                    },
                    mainContent: {
                        moduleId: './modules/segments/segment-index'
                    }
                },
                nav: true
            },
            { route: 'users/:id/detail', name: 'userDetail', moduleId: 'users/user-detail' }
        ]);

        this.router = router;
    }

}
