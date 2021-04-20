import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../../tools/src/lib/shared.service';
import { HOME_CONST } from '../../../../shared/src/lib/constants/component.constant';
import { ICON } from '../../../../shared/src/lib/constants/common.constant';
import { ROUTE_TO } from '../../../../shared/src/lib/constants/route.constant';

interface IconMetadata {
  icon: string;
  text: string;
  navigate: boolean;
  navigateTo: string;
}
const RouteTo: typeof ROUTE_TO = ROUTE_TO;

const Thumbnails: IconMetadata[] = [
  {
    icon: ICON.CUSTOMER_INQUIRY,
    text: '',
    navigate: false,
    navigateTo: '',
  },
  {
    icon: ICON.RESPONDENT_LISTING_GENERATOR,
    text: '',
    navigate: false,
    navigateTo: ''
  },
  {
    icon: ICON.CARD,
    text: '',
    navigate: true,
    navigateTo: ''
  },
  {
    icon: ICON.WARNING,
    text: '',
    navigate: false,
    navigateTo: ''
  },
  {
    icon: ICON.CODE,
    text: '',
    navigate: false,
    navigateTo: ''
  },
  {
    icon: ICON.BUG_REPORT,
    text: HOME_CONST.ICON_TEXT.MS_HELPER,
    navigateTo: RouteTo.MS_HELPER,
    navigate: true
  },
];
const TemplateContent: typeof HOME_CONST.TEMPLATE_CONST = HOME_CONST.TEMPLATE_CONST;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit, OnDestroy {
  private routeTo: typeof ROUTE_TO;
  public templateContent: typeof HOME_CONST.TEMPLATE_CONST;
  public thumbnails: IconMetadata[];
  public showHeader = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService,
  ) {
    this.routeTo = RouteTo;
    this.templateContent = TemplateContent;
    this.thumbnails = Thumbnails;
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
  }

  public navigateToMSSetup(navigateTo: string, relativePath: boolean = true): void {
    if (relativePath) {
      this.router.navigate([navigateTo], { relativeTo: this.activatedRoute });
    } else {
      this.router.navigateByUrl(navigateTo);
    }
  }
}
