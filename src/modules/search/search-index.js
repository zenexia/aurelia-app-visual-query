export class SearchIndex {
    configureRouter(config, router) {
        config.map([
            {
                route: '',
                redirect: 'single-table'
            },
            {
                route: 'single-table',
                name: 'single-table',
                moduleId: './single-table',
                nav: true,
                title: 'Single Table',
                settings: {
                    nav: {
                        icon: "fa fa-doc",
                        location: "side"
                    }
                }
            },
            {
                route: 'multi-table',
                name: 'multi-table',
                moduleId: './multi-table',
                nav: true,
                title: 'Multi Table',
                settings: {
                    nav: {
                        icon: "fa fa-docs",
                        location: "side"
                    }
                }
            }
        ]);
        this.router = router;
    }
}