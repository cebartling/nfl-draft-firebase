import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-draft-prospects',
  templateUrl: './draft-prospects.component.html',
  styleUrls: ['./draft-prospects.component.scss']
})
export class DraftProspectsComponent implements OnInit {
  prospects$: Observable<any[]>;
  prospectsRef: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) {
    this.prospectsRef = this.afs.collection('prospects', (ref) => {
      return ref.orderBy('LastName', 'asc').orderBy('FirstName', 'asc');
    });
    this.prospects$ = this.prospectsRef.valueChanges();
  }

  ngOnInit() {
  }

}
