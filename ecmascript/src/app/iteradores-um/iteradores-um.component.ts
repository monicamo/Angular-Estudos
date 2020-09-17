import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iteradores-um',
  templateUrl: './iteradores-um.component.html',
  styleUrls: ['./iteradores-um.component.css']
})
export class IteradoresUmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.onIteradores();
  }

  onIteradores() {
    /*
    ITERACAO : iteradores e iteraveis
     iteravel ta ligado com um iterador que define como
     ele sera percorrido
     iterador - um objeto que sabe como acessar um a um os itens de
     iteravel, tem o status de sua posicao na estrutura
     next() = retorna o proximo item da estrutura do ITERAVEL sempre 
     que invocado
     retorna duas PROPRIEDADES: done, value
     DONE - bool que indica se toda a estrutura foi acessada
     VALUE - contem o vaor extraido
     ITERAVEIS = objeti define o comportamento da iteracao,
     para isso ele implementa o seu ITERADOR na propriedade
     de chave Symbol.iterator:

     iteraveis por padrao:

     arrays
     strings
     maps
     sets

     ITERADORES sao LAZY

     */

     const bruxos = ['harry potter', 'hermione granger', 'rony weasley'];
     const iterador = bruxos[Symbol.iterator]();
//       let done = false;
     let proximo = iterador.next();
     do {
       const bruxo = proximo.value;
       console.log(bruxo);
//       chapeuSeletor.fazerSelecaoDaCasa(bruxo);
       proximo = iterador.next();
     } while (!proximo.done);

  }

}
