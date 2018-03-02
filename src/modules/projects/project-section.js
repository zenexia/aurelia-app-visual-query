export class ProjectSection {
    configureRouter(config, router) {
        config.map([
            { route: '',    moduleId: './projects-list', nav: false, title: 'Projects List' },
            { route: ':id', moduleId: './project-detail', nav: false, title: 'Project Detail' }
        ]);
        this.router = router;
    }
}