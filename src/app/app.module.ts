import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CountersComponent } from "./components/counters/counters.component";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CountersComponent,
    CounterComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
