import { Component, inject, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MenuService } from '@core/bootstrap/menu.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MatIconModule, TranslateModule],
})
export class BreadcrumbComponent implements OnInit {
  @Input() nav: string[] = [];
  private readonly router = inject(Router);
  private readonly menu = inject(MenuService);

  constructor() {
  }

  ngOnInit() {
    this.nav = Array.isArray(this.nav) ? this.nav : [];

    if (this.nav.length === 0) {
      this.genBreadcrumb();
    }
  }

  trackByNavlink(index: number, navLink: string): string {
    return navLink;
  }

  genBreadcrumb() {
    const routes = this.router.url.slice(1).split('/');
    this.nav = this.menu.getLevel(routes);
    this.nav.unshift('home');
  }
}
