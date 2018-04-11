import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-draft-prospects',
  templateUrl: './draft-prospects.component.html',
  styleUrls: ['./draft-prospects.component.scss']
})
export class DraftProspectsComponent implements OnInit {
  prospects$: Observable<any>;
  prospectsRef: AngularFirestoreCollection<any>;
  lastNameFilter: string;
  positionFilter: string;

  constructor(private afs: AngularFirestore) {
    this.prospectsRef = this.afs.collection('prospects', (ref) => {
      return ref.orderBy('LastName', 'asc').orderBy('FirstName', 'asc');
    });
    this.prospects$ = this.prospectsRef.valueChanges();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.prospectsRef = this.afs.collection('prospects', (ref) => {
      let orderByLastName = true;
      let temp: any = ref;
      if (this.lastNameFilter) {
        temp = temp.where('LastName', '==', this.lastNameFilter);
        orderByLastName = false;
      }
      if (this.positionFilter) {
        temp = temp.where('Position', '==', this.positionFilter);
      }
      if (orderByLastName) {
        temp = temp.orderBy('LastName', 'asc');
      }
      return temp.orderBy('FirstName', 'asc');
    });
    this.prospects$ = this.prospectsRef.valueChanges();
  }

  onClickClearFilter() {
    this.lastNameFilter = '';
    this.positionFilter = '';
    this.prospectsRef = this.afs.collection('prospects', (ref) => {
      return ref.orderBy('LastName', 'asc').orderBy('FirstName', 'asc');
    });
    this.prospects$ = this.prospectsRef.valueChanges();
  }
}
