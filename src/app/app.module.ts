import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';

import {AppComponent} from './app.component';
import {WelcomeComponent} from './views/welcome/welcome.component';
import {DraftProspectsComponent} from './views/draft-prospects/draft-prospects.component';
import {MockDraftsComponent} from './views/mock-drafts/mock-drafts.component';
import {MockDraftEditorComponent} from './views/mock-draft-editor/mock-draft-editor.component';
import {DraftTrackerComponent} from './views/draft-tracker/draft-tracker.component';
import {HeaderComponent} from './components/common/header/header.component';
import {FooterComponent} from './components/common/footer/footer.component';
import {NavigationComponent} from './components/common/navigation/navigation.component';
import {PageNotFoundComponent} from './views/page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {environment} from '../environments/environment';
import { WeightConversionPipe } from './pipes/weight-conversion.pipe';
import { HeightConversionPipe } from './pipes/height-conversion.pipe';

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
    NavigationComponent,
    PageNotFoundComponent,
    WeightConversionPipe,
    HeightConversionPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {enableTracing: environment.app.routing.enableTracing}),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
