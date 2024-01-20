export interface CDBCategoria {
    strCategory: string
}

export interface ResultadoWSCategoriasCDB {
    drinks: CDBCategoria[]
}

export interface CDBCDrink {
    strDrink: string
    strDrinkThumb: string
    idDrink: string
}

export interface ResultadoWSDrinks {
    drinks: CDBCDrink[]
}