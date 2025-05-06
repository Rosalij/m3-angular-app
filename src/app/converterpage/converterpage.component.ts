import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConverterComponent } from '../converter/converter.component';

@Component({
  selector: 'app-converterpage',
 imports: [FormsModule, ConverterComponent],
  templateUrl: './converterpage.component.html',
  styleUrl: './converterpage.component.css',

})
export class ConverterpageComponent {

}
