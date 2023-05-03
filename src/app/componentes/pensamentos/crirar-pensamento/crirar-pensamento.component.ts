import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crirar-pensamento',
  templateUrl: './crirar-pensamento.component.html',
  styleUrls: ['./crirar-pensamento.component.css']
})
export class CrirarPensamentoComponent implements OnInit {

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Irazê',
    modelo: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento(){
    alert("Novo pensamento criado!");
  }
  cancelar(){
    alert("Pensamento cancelado!");
  }

}
