import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  host: {
    class: 'relative min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 flex',
  },
  standalone: true,
})
export class AppComponent {}
