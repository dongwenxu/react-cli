export const MARKET_TYPE_INCREASE = '涨价';
export const MARKET_TYPE_DECREASE = '降价';


export const PriceIncrease = () => {
    return (dispatch) => {
        setTimeout(() => {
           dispatch({
             type: MARKET_TYPE_INCREASE
           })
        }, 1000)
    }
}

export const PriceDecrease = () => {
    return (dispatch) => {
        setTimeout(() => {
           dispatch({
             type: MARKET_TYPE_DECREASE
           })
        }, 1000)
    }
}

