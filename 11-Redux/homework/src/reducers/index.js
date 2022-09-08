import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0
}
// MANERA MAS EFECTICA QUE EL SWITCH
/* const cases = {
  [INCREMENT]: (state) => {
    return { count: state.count + 1 };
  },
  [DECREMENT]: (state) => { 
    return { count: state.count + 1 };
  },
} */

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?
export default (state = initialState, action) => {


  
  switch (action.type) {
  //  return cases.hasOwnProperty(action.type) ? cases[action.type](state) : state;  --> MANERA MAS EFECTIVA QUE EL SWITCH

    case INCREMENT: return {
      count: state.count + 1,
    };
    
    case DECREMENT: return {
      count: state.count - 1,
    };
    
    default:
      return state;
  }
};