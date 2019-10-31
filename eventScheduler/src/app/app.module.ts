import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EventsComponent } from './events/events.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventsDetailComponent } from './events/events-detail/events-detail.component';
import { EventsItemComponent } from './events/events-list/events-item/events-item.component';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { SkillsEditComponent } from './skills-list/skills-edit/skills-edit.component';
import { Dropdown } from './models/dropdown';

import { EventService } from "./events/event.service";
import { SkillsListService } from "./skills-list/skills-list.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventsComponent,
    EventsListComponent,
    EventsDetailComponent,
    EventsItemComponent,
    SkillsListComponent,
    SkillsEditComponent,
    Dropdown
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [EventService, SkillsListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
