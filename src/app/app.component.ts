import { Component } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './small-card/small-card.component';
import { FooterComponent } from './footer/footer.component';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-root',
  imports: [
    MenuComponent,
    BigCardComponent,
    SmallCardComponent,
    FooterComponent,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  noticia = {
    title: 'Manoel Gomes é o Melhor Artista de Todos os Tempos',
    image: 'https://link-para-a-imagem.jpg',
    text: 'Em uma pesquisa global, especialistas afirmaram: "Manoel Gomes revolucionou a música brasileira".',
  };
}
