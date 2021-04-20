import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-autocomplete',
  templateUrl: './autocomplete.component.html',
})
export class MSAutocompleteComponent implements OnInit {
  @Input() public filterableSource: Observable<any[]>;
  @Input() public control: AbstractControl;
  @Input() public placeholder: any;
  @Input() public displayFn: (item: any) => string | undefined;

  ngOnInit(): void {}
}
