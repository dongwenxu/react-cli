import * as home from 'src/pages/action/home';

const price = 500

const market = (state = price, action) => {
    switch (action.type) {
        case  home.MARKET_TYPE_INCREASE:
            return state += 10;
        case '降价':
            return state -= 10;
        default:
            return state;
    }
}
export default market