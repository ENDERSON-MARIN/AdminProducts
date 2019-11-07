import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Creado con ♥ por <b><a href="https://www.marinenderson.com" target="_blank">Enderson Marín</a></b> 2019</span>
    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-instagram"></a>
      <a href="#" target="_blank" class="ion ion-social-youtube"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter"></a>
    </div>
  `,
})
export class FooterComponent {
}
