import {
  SET_CURRENCY_DATA,
  ADD_CURRENCY,
  REMOVE_CURRENCY,
  SET_ALL_BIDS,
  SET_BIDDINGS,
} from "../Actions/types";

const INITIAL_STATE = {
  allBids: [],
  auctionBiddings:{currentBid:'',biddings:[]}
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ALL_BIDS:
      return { ...state, allBids: action.payload };
    case SET_BIDDINGS:
      return { ...state, auctionBiddings: action.payload!= null?action.payload:state.auctionBiddings };
        
      
    case REMOVE_CURRENCY:
      return {
        ...state,
        myCurrencies: removeVal(state.myCurrencies, action.payload),
      };
    default:
      return state;
  }
}

function removeVal(myCurrencies, val) {
  var array = JSON.parse(JSON.stringify(myCurrencies));
  var index = array.indexOf(val);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
}
