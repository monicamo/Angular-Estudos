import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cap01',
  templateUrl: './cap01.component.html',
  styleUrls: ['./cap01.component.css']
})
export class Cap01Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.onForeach();
    this.onForeachComFuncao();
    this.onMap();
    this.onFilter();
    this.onFind();
    this.onEvery();
    this.onSome();
    this.onReduce();
    this.onReduceDois();
  }
  onReduceDois() {
    const pessoas = [
      {nome: 'Joao', idade: 12},
      {nome: 'Maria', idade: 18},
      {nome: 'Jose', idade: 21}
    ];
    const nomes = pessoas.reduce((arrayNomes, pessoa) => {
      arrayNomes.push(pessoa.nome);
      return arrayNomes;
    }, []);
    console.log(nomes);
  }

  onReduce() {
    const numeros = [1, 2, 3, 4, 5, 6, 7];
    let soma = 0;
    soma = numeros.reduce((soma, numero) => {
      return soma + numero;
    });
    console.log(soma);
  }

  onSome() {
    const pesoMalas = [21, 16, 25, 32, 34];
    const bool = pesoMalas.some(mala => {
      return mala > 25;
    });
    console.log(bool);
  }

  onEvery() {
    const pessoas = [
      {nome: 'Joao', idade: 12},
      {nome: 'Maria', idade: 18},
      {nome: 'Jose', idade: 21}
    ];
    const bool = pessoas.every(pessoa => {
      return pessoa.idade >= 18;
    });
    console.log("every " + bool);
  }

  onFind() {
    const pessoas = [
      {nome: 'Joao', idade: 12},
      {nome: 'Maria', idade: 18},
      {nome: 'Jose', idade: 21}
    ];

    const people = pessoas.find(function(pessoa) {
      return pessoa.nome === 'Jose';
    });

    console.log(people);
  }

  onFilter() {
    const pessoas = [
      {nome: 'Joao', idade: 12},
      {nome: 'Maria', idade: 18},
      {nome: 'Jose', idade: 21}
    ];

    const people = pessoas.filter(function (pessoa) {
      return pessoa.idade > 18;
    });

    console.log(people);
  }


  onMap() {
    const numeros = [1, 2, 3, 4, 5, 6, 7];
    const numbers = numeros.map(function(numbero) {
      return numbero * 2;
    });
    console.log(numbers);
  }


  imprimeNome(nome) {
    console.log(nome);

  }

  onForeachComFuncao() {
    var nomes = ['maria', 'joao', 'jose'];

    nomes.forEach(this.imprimeNome);
  }

  onForeach() {
    var nomes = ['maria', 'joao', 'jose'];

    nomes.forEach(function(nome) {
      console.log(nome);
    });
  }

}
