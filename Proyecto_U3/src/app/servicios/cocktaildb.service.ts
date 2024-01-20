import { Injectable } from '@angular/core';
import { ResultadoWSCategoriasCDB, ResultadoWSDrinks } from '../ws/ICocktailDb';
import { Categoria } from '../modelo/categoria';

@Injectable({
  providedIn: 'root'
})
export class CocktaildbService {

  baseUrl:string = "https://www.thecocktaildb.com/api/json/v1/1/"

  constructor() { }

  async getCategorias(): Promise<Categoria[]> {
    const cdbCatResult = await this.getCdbCategorias()
    const categorias:Categoria[] = []
    cdbCatResult.drinks.forEach( async cdbCategoria => {
      const nombre = cdbCategoria.strCategory
      const resCdbDrinks = await this.getCdbDrinks(nombre)
      const imagen = resCdbDrinks.drinks[0].strDrinkThumb + "/preview"
      const categoria = new Categoria(nombre, imagen)
      categorias.push( categoria )
    })
    return categorias
  }

  async getCdbCategorias(): Promise<ResultadoWSCategoriasCDB> {
    const url = `${this.baseUrl}list.php?c=list`
    const respuesta = await fetch(url)
    const data:ResultadoWSCategoriasCDB = await respuesta.json()
    return data
  }

  async getCdbDrinks(categoria:string): Promise<ResultadoWSDrinks> {
    const url = `${this.baseUrl}filter.php?c=${categoria}`
    const respuesta = await fetch(url)
    const data:ResultadoWSDrinks = await respuesta.json()
    return data
  }

  //https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=cinnamon

  async getCdbDrinksByIngredient(ingrediente:string): Promise<ResultadoWSDrinks> {
    const url = `${this.baseUrl}filter.php?i=${ingrediente}`
    const respuesta = await fetch(url)
    const data:ResultadoWSDrinks = await respuesta.json()
    return data
  }
}
