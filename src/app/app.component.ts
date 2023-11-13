import { Component, HostBinding } from '@angular/core';

const tw = (strings: TemplateStringsArray, ...values: any[]) => String.raw({ raw: strings }, ...values);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
})
export class AppComponent {
  @HostBinding('class')
  get class() {
    return tw`relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12`;
  }
}
