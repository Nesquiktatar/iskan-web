import {getAuthUserData} from './auth-reducer';

const INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS'

let initialState = {

    themes: {

        bright: {
            btnColor: 'rgba(0, 0, 0, 0.8)',
            textColor1:'#29A19C',
            textColor2:'rgba(127, 83, 172)',
            backgroundColor1: '#cff6cf',
            backgroundColor2: '#cfe5cf',
            bgColor1: `rgba(207, 246, 207, 0.8)`,
            bgColor2: `rgba(207, 229, 207, 0.8)`,
            fontColor: `rgba(127, 83, 172)`,
            fontColorSelected: `rgba(41, 161, 156)`,
            dividerColor: `rgba(169, 139, 199)`,
            selectedBackgroundCollapsedMode: `dark`
        },
        dark: {
            btnColor: 'rgba(254,191,16, 0.8)',
            textColor1:'#f6def6',
            textColor2:`rgba(254,191,16, 0.6)`,
            backgroundColor1: '#27323A',
            backgroundColor2: '#435055',
            turquoise: '#29A19C',
            green: '#A3F7BF',
            bgColor1: 'rgba(67, 67, 67, 0.8)',
            bgColor2: 'rgba(0, 0, 0, 0.8)',
            fontColor: `rgba(161, 161, 161)`,
            fontColorSelected: `rgba(255, 255, 255)`,
            dividerColor: `rgba(48, 48, 48)`,
            selectedBackgroundCollapsedMode: `bright`
        }
    },
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});


//заменить на async await-------------------------
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then (
        () => {
        dispatch(initializedSuccess());
    })


}

export default appReducer;