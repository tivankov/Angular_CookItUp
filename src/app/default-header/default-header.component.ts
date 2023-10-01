import { Component } from '@angular/core';

@Component({
  selector: 'default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.css']
})

export class DefaultHeaderComponent {
  random_number = Math.floor(Math.random() * 5) + 1;
}
