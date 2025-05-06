import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  imports: [FormsModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css'
})
export class ConverterComponent {

numberInput: number = 22;
fahrenheit: number = 0;
celsius: number = 0;

meter: number = 0;
feet: number = 0;

result: any = "";

convertToFeet(): void {
  //1 meter is 3.28084 feet.
  this.feet = this.numberInput * 3.28084;
  this.result = this.numberInput + " meter is " + this.feet.toFixed(2) + " feet"}

convertToMeter(): void {
this.meter = this.numberInput / 3.28084;
this.result = this.numberInput + " feet is " + this.meter.toFixed(2) + " meter";
}

convertToFahrenheit():void {
  this.fahrenheit = this.numberInput * 9 / 5 + 32;
  this.result = this.numberInput + " celsius is " + this.fahrenheit.toFixed(2) + " fahrenheit"
}

convertToCelsius(): void {
  this.celsius = (this.numberInput - 32) * 5 / 9;
  this.result = this.numberInput + " fahrenheit is " + this.celsius.toFixed(2) + " celsius"
}
}
