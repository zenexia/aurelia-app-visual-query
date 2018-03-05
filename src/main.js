import environment from './environment';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  //configureContainer(aurelia.container);  // https://stackoverflow.com/questions/35140716/how-do-you-substitute-httpclient-in-aurelia

  aurelia.start().then(() => aurelia.setRoot());
}
/*
function configureContainer(container) {
    let http = new HttpClient();
    http.configure(config => {
        config
            .useStandardConfiguration()
            .withBaseUrl('http://bq.vm/');
    });
    container.registerInstance(HttpClient, http); // <---- this line ensures everyone that `@inject`s a `HttpClient` instance will get the instance we configured above.
}
*/
