export const MARKET_TYPE_INCREASE = '涨价';


export const getListDataAction = () => {
    return (dispatch) => {
        setTimeout(() => {
           dispatch({
             type: MARKET_TYPE_INCREASE
           })
        }, 1000)
    }
}