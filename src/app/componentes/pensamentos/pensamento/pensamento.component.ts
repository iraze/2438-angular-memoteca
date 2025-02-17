import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {

    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Irazê',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): any{
    if (this.pensamento.conteudo.length>= 256) {
      return 'pensamento-g';
    }else {
      return 'pensamenti-p';

    }
  }

}
