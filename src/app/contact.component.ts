import {Component} from '@angular/core';
import { IDeactivateComponent } from './deactivate.guard';
 
@Component({
     template: `<h1>Contact Us</h1>
                <p>TekTutorialsHub </p>
                `
})
export class ContactComponent implements IDeactivateComponent {
     canExit(): boolean {
          if(confirm("Do tou wish please to confirm")){
               return true;
          } else {
               return false;
          }
     }
}
 