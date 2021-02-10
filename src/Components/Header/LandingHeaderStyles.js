import React from 'react'

//JSS (CSS in JS):
const style = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 110,
        minWidth: '100vw',
        backgroundColor: '#faf6f0'
    },
    leftHeader: {
        display: 'flex',
        backgroundColor: '#faf6f0',
        alignItems: 'center'
    },
    rightHeader: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    lobsterLink: {
        backgroundColor: '#faf6f0',
        marginLeft: '50px'
    },
    logo: {
        height: '100px',
        marginLeft: 0,
        marginRight: 0,
        backgroundColor: '#faf6f0',
        
    },
    loginLink: {
        backgroundColor: '#faf6f0'
    },
    registerLink: {
        backgroundColor: '#faf6f0',
        
    },
    nav: {
        backgroundColor: '#faf6f0',
        display: 'flex',
        justifyContent: 'space-between',
        marginRight: '50px',
        width: '200px'
    },
    title: {
        backgroundColor: '#faf6f0',
        color: '#1c7ad9',
        fontFamily: `'Lora', serif`,
        fontWeight: 'lighter',
        marginTop: '28px',
        width: '250px',
        fontSize: '36px'
    },
    btn: {
        backgroundColor: '#faf6f0',
        color: '#1c7ad9',
        border: '2px solid #1c7ad9',
        fontSize: '18pt',
        fontFamily: `'Lora', serif`,
        paddingBottom: '10px'
    },
    headerBtn: {
        border: '2px solid #faf6f0',
        fontSize: '18pt',
        // '&:hover' : {
        //     color: '#002626',
        //     cursor: 'pointer'
        // }
    },
//    '@media (max-width: 500px)': {
//         lobsterLink: {
//             marginLeft: 15,
//         },
//         titleLink: {
//             display: 'none',
//         }
//     }
    
}

export default style