import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CocktaildbService } from 'src/app/servicios/cocktaildb.service';
import { Categoria } from 'src/app/modelo/categoria';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InicioPage implements OnInit {

  categorias: Categoria[] = []
  
  constructor(
    private servicio: CocktaildbService
    ) { }
    
  async ngOnInit() {
    this.categorias = await this.servicio.getCategorias()
  }

}
