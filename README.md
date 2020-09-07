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
11. Enhancing ngIf com a condicao Else 
12. Styling Eleemntos dinamicamente com ngStyle
13. Aplicando classes CSS dinamicaemnte com ngClass
14. Saida de listas com ngFor
15. Getting index quando usa o ngfor

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


ernative Non-Collapsable Navigation Bar
The way we added it, the Navbar will collapse on smaller screens. Since we didn't implement a Hamburger menu, that means that there's no way of accessing our links on smaller screens.

You can either add such a menu on your own (see below), or you replace collapse navbar-collapse  with just navbar-default.

Adding a Hamburger Menu:

Alternatively, if you want to make the navigation bar responsive, please replace these lines in header.component.html:

<div class="navbar-header">
  <a routerLink="/" class="navbar-brand">Recipe Book</a>
</div>
<div class="collapse navbar-collapse">
with these lines:

<div class="navbar-header">
  <button type="button" class="navbar-toggle" (click)="collapsed = !collapsed">
	<span class="icon-bar" *ngFor="let iconBar of [1, 2, 3]"></span>
  </button>
  <a routerLink="/" class="navbar-brand">Recipe Book</a>
</div>
<div class="navbar-collapse" [class.collapse]="collapsed" (window:resize)="collapsed = true">
and add this line to header.component.ts:

collapsed = true;