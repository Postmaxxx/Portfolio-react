import './themeSwitcher.scss';
import { React, Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../assets/redux/actions'

/*
class ThemeSwitcher extends Component {
    constructor(props) {
        super(props);
    }


    changeTheme = () => {
        if (this.props.store.theme === 'light') {
            this.props.setStore(actions.setTheme('dark'))
            console.log('to dark', this.props.store.theme );
        } else {
            this.props.setStore(actions.setTheme('light'))
            console.log('to light', this.props.store.theme );
        }
        
    }

    componentDidMount() {
        console.log('props',  this.props);
    }

    render() {
        return(
            <div className='theme-switcher__container' onClick={() => this.changeTheme()}>
                <input type="checkbox" 
                    id='theme-checkbox'
                    checked={this.props.store.theme === 'dark' ? true : false}
                />
                <p>{this.props.store.theme}</p>
            </div>
        )
    }
}

*/

function ThemeSwitcher({ store, setStore }) {

    const changeTheme = () => {
        if (store.theme === 'light') {
            setStore(actions.setTheme('dark'))
            console.log('to dark', store.theme );
        } else {
            setStore(actions.setTheme('light'))
            console.log('to light', store.theme );
        }
        
    }

    setInterval(() => {console.log('New store', store)}, 1000)
   
    return (
        <div className='theme-switcher__container' onClick={() => changeTheme()}>
            <input type="checkbox" 
                id='theme-checkbox'
                checked={store.theme === 'dark' ? true : false}
            />
            <p>1{store.theme}1</p>
        </div>
    )
}




const mapStateToProps = (store) => ({store: store})


const mapDispatchToProps = (dispatch) => ({
    setStore: action => dispatch(action)
})


export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);



