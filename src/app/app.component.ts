import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-keycloak-test';

  constructor(private keyCloakService: KeycloakService) {}

  logout(): void {
    this.keyCloakService.logout(window.location.origin);
  }
}
