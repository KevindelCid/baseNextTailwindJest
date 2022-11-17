import { suma } from "../components/Suma"




describe('haciendo el test de la funcion suma', ()  => {

    
test( 'si la funcion recibe como parametro a un 4 y como b un 6 debe retornar un 10', ()=>{
    expect( suma(4,6) ).toBe(10)
} )



})