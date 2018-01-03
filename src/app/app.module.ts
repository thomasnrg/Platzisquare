import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
const appRoutes: Routes = [
  {path:'', component: AppComponent },
  {path:'lugares', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA8RyAkD4hwBs8XxUSUBP5ibt6SHzV-KP4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
