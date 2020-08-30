# Angular-Estudos

1. Databinding
2. String Interpolation
3. Property Binding
4. Property Binding vs String Interpolation
5. Event Binding
6. Bindable Properties and Events
7. Passing and Using Data with Event Binding
8. Two Way Databinding
9. Combinando todas as formas de databinding
10. Usando ngIf to output data condicionalmente
11. Enhancing nfIf com a condicao Else 

Entendendo Diretivas

-----------------------------------------

Bindable Properties and Events
How do you know to which Properties or Events of HTML Elements you may bind? You can basically bind to all Properties and Events - a good idea is to console.log()  the element you're interested in to see which properties and events it offers.

Important: For events, you don't bind to onclick but only to click (=> (click)).

The MDN (Mozilla Developer Network) offers nice lists of all properties and events of the element you're interested in. Googling for YOUR_ELEMENT properties  or YOUR_ELEMENT events  should yield nice results.

-----------------------------------------

Important: FormsModule is Required for Two-Way-Binding!
Important: For Two-Way-Binding (covered in the next lecture) to work, you need to enable the ngModel  directive. This is done by adding the FormsModule  to the imports[]  array in the AppModule.

You then also need to add the import from @angular/forms  in the app.module.ts file:

import { FormsModule } from '@angular/forms'; 
----------------------------------------------------------------

Diretivas são instruções no DOM.