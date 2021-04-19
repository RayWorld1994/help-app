import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBackground]',
})
export class BackgroundDirective {
  @Input('appBackground') backgroundImg!: string;
  @HostBinding('style.background-image') background!: string;

  constructor() {}

  ngOnInit(): void {
    this.background = `url(${this.backgroundImg})`;
  }
}
