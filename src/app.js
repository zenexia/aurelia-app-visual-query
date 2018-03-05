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
                    sideBar: {
                        moduleId: './modules/dashboard/side-bar'
                    },
                    mainContent: {
                        moduleId: './modules/dashboard/home'
                    }
                },
                nav: false
            },
            {
                route: 'search',
                title: 'Search',
                viewPorts: {
                    sideBar: {
                        moduleId: './modules/search/side-bar'
                    },
                    mainContent: {
                        moduleId: './modules/search/search-index'
                    }
                },
                nav: true,
                settings: {
                    nav: {
                        icon: "fa fa-search",
                        location: "top"
                    }
                }
            },
            {
                route: "projects",
                title: 'Projects',
                name:'project-section',
                viewPorts: {
                    sideBar: {
                        moduleId: './modules/projects/side-bar'
                    },
                    mainContent: {
                        moduleId: './modules/projects/project-section'
                    }
                },
                nav: true,
                settings: {
                    nav: {
                        icon: "fa fa-tasks",
                        location: "top"
                    }
                }
            },
            {
                route: 'segments',
                title: 'Segments',
                viewPorts: {
                    sideBar: {
                        moduleId: './modules/segments/side-bar'
                    },
                    mainContent: {
                        moduleId: './modules/segments/segment-index'
                    }
                },
                nav: true,
                settings: {
                    nav: {
                        icon: "fa fa-object-group",
                        location: "top"
                    }
                }
            },
            {
                route: 'users',
                title: 'Admin',
                viewPorts: {
                    sideBar: {
                        moduleId: './modules/users/side-bar'
                    },
                    mainContent: {
                        moduleId: './modules/users/profile'
                    }
                },
                nav: true,
                settings: {
                    nav: {
                        icon: "fa fa-user",
                        location: "top"
                    }
                }
            },
            { route: 'users/:id/detail', name: 'userDetail', moduleId: 'users/user-detail' }
        ]);

        this.router = router;
    }

}
