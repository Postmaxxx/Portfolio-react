const initialState = {
    theme: localStorage.getItem('theme') || 'light',
    nav_ham: '',

    contact: {
        name: '',
        email: '',
        subject: '',
        message: ''
    },
   
    
}

export default initialState
