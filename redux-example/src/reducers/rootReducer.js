
const initialState = {
    cards:[
      {id:'1', title:'Alex', body:'1 Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with   the release of Letraset sheets containing Lorem Ipsum passages, and  more recently with desktop publishing software like Aldus PageMaker    including versions of Lorem Ipsum.'},
      {id:'2', title:'Willma', body:'2 Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with   the release of Letraset sheets containing Lorem Ipsum passages, and  more recently with desktop publishing software like Aldus PageMaker    including versions of Lorem Ipsum.'},
      {id:'3', title:'John', body:'3 Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with   the release of Letraset sheets containing Lorem Ipsum passages, and  more recently with desktop publishing software like Aldus PageMaker    including versions of Lorem Ipsum.'},
    ],
    users:[]
}

const rootReducer = (state= initialState, action) => {
  switch (action.type) {
    case 'DELETE_CARD':
      let newCards = state.cards.filter(card => card.id !== action.id)  
      return{
        ...state,
        cards: newCards
      }
      case 'FETCH_USER':
        return{
          ...state,
          users: action.payload
        }
      default:
        return state;
  }
};


export default rootReducer;
