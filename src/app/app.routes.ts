import {Routes} from '@angular/router';

import {DraftProspectsComponent} from './views/draft-prospects/draft-prospects.component';
import {DraftTrackerComponent} from './views/draft-tracker/draft-tracker.component';
import {MockDraftsComponent} from './views/mock-drafts/mock-drafts.component';
import {WelcomeComponent} from './views/welcome/welcome.component';
import {PageNotFoundComponent} from './views/page-not-found/page-not-found.component';

export const routes: Routes = [
  {path: 'draftProspects', component: DraftProspectsComponent},
  {path: 'draftTracker', component: DraftTrackerComponent},
  {path: 'mockDrafts', component: MockDraftsComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];
