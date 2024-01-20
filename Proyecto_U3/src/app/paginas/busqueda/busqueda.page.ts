import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, SearchbarInputEventDetail } from '@ionic/angular';
import { CDBCDrink, ResultadoWSDrinks } from 'src/app/ws/ICocktailDb';
import { CocktaildbService } from 'src/app/servicios/cocktaildb.service';
import { IonSearchbarCustomEvent } from '@ionic/core';
import { addIcons } from 'ionicons';
import {heartOutline} from 'ionicons/icons'

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class BusquedaPage implements OnInit {

  resultadoBusqueda: CDBCDrink[] = []
  favoritos: CDBCDrink[] = []

  constructor(
    private servicio: CocktaildbService
  ) { 
    addIcons({
      heartOutline
    })
  }
    

  ngOnInit() {
  }

  async handleInput($event: IonSearchbarCustomEvent<SearchbarInputEventDetail>) {
    const terminoBuscado = $event.detail.value ?? ''
    const res = await this.servicio.getCdbDrinksByIngredient(terminoBuscado)
    this.resultadoBusqueda = res.drinks
    }

  agregarAFavoritos(drink: CDBCDrink) {
    this.favoritos.push(drink)
  }
}
