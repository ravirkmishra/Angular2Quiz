import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EntryAppComponent } from './EntryApp.component';
import {LogInComponent} from './LogIn/LogIn.component';
 
@NgModule({
    imports: [ BrowserModule,FormsModule],
    declarations: [ EntryAppComponent, LogInComponent ],
    bootstrap: [ EntryAppComponent ]
})
export class EntryAppModule{ }
 