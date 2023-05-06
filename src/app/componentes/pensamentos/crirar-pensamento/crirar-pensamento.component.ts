import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crirar-pensamento',
  templateUrl: './crirar-pensamento.component.html',
  styleUrls: ['./crirar-pensamento.component.css']
})
export class CrirarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {

    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(
    private service: PensamentoService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  criarPensamento(){
    this.service.cria(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }
  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }

}
