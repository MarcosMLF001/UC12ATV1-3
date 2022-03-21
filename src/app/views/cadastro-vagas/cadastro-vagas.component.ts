import { Component, OnInit } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { VagasServiceService } from 'src/app/services/vagas-service.service';

@Component({
  selector: 'app-cadastro-vagas',
  templateUrl: './cadastro-vagas.component.html',
  styleUrls: ['./cadastro-vagas.component.css']
})
export class CadastroVagasComponent implements OnInit {
dados : Vagas = {
  nome: "",
  foto: "",
  descricao: "",
  salario: "0"
}
  constructor(private vagasServico : VagasServiceService,
    private router : Router) { }

  ngOnInit(): void {
  }

gravar(): void{
  this.vagasServico.create(this.dados).subscribe(itens=>{
  this.router.navigate(["mural-vagas"]) 
  })
}

}
