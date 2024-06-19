import { Directive, HostBinding, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { NavAccordionDirective } from './nav-accordion.directive';

@Directive({
  selector: '[navAccordionItem]',
  exportAs: 'navAccordionItem',
  standalone: true,
})
export class NavAccordionItemDirective implements OnInit, OnDestroy {
  @Input() route = '';
  @Input() type: 'link' | 'sub' | 'extLink' | 'extTabLink' = 'link';
  private readonly nav = inject(NavAccordionDirective);
  private isExpanded = false;

  @HostBinding('class.expanded')
  @Input()
  get expanded() {
    return this.isExpanded;
  }

  set expanded(value: boolean) {
    this.isExpanded = value;

    if (value) {
      this.nav.closeOtherItems(this);
    }
  }

  ngOnInit() {
    this.nav.addItem(this);
  }

  ngOnDestroy() {
    this.nav.removeItem(this);
  }

  toggle() {
    this.expanded = !this.expanded;
  }
}
