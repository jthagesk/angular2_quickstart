import {Component, Template, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'my-app'
});
@View({
  template: '<h1>Hello {{name}}</h1>'
});

//Component controller
class MyAppComponent{
  constructor(){
    this.name = 'Jan Tore';
  }
}


bootstrap(MyAppComponent);