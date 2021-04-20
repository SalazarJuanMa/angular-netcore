import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-screen',
  templateUrl: './search-screen.component.html',
  styleUrls: ['./search-screen.component.scss'],
})
export class SearchScreenComponent implements OnInit {
  private activatedRoute: ActivatedRoute;

  public value = null;
  public error = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  public onSearch(): void {
    this.error = true;
  }
}
