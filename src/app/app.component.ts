import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-keycloak-test';

  constructor(
    private http: HttpClient,
    private keyCloakService: KeycloakService
  ) {}

  logout(): void {
    this.keyCloakService.logout(window.location.origin);
  }

  async test(): Promise<void> {
    if ((await this.keyCloakService.isLoggedIn()) === false) {
      this.http.get('http://localhost:3000/protected').subscribe(
        (result) => console.dir(result),
        (error) => console.log(error.error)
      );
    } else {
      console.log('You are not logged in.');
    }
  }
}
