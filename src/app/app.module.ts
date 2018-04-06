import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { DraftProspectsComponent } from './views/draft-prospects/draft-prospects.component';
import { MockDraftsComponent } from './views/mock-drafts/mock-drafts.component';
import { MockDraftEditorComponent } from './views/mock-draft-editor/mock-draft-editor.component';
import { DraftTrackerComponent } from './views/draft-tracker/draft-tracker.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NavigationComponent } from './components/common/navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DraftProspectsComponent,
    MockDraftsComponent,
    MockDraftEditorComponent,
    DraftTrackerComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
