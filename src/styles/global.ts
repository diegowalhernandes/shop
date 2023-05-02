import { globalCss } from "../styles";
export const globalStyles = globalCss({
    '*': {
            margin: 0,
            padding: 0,
        },
    body: {
        backgroundColor: '$gray900',
        color: '$gray100',
        '-webkit-front-smoothing': 'antiliased',
        },
        
        
    'body, input, textarea, button' :{
        fontfamily: 'Roboto',
        fontWeight: 400,
    },
})

