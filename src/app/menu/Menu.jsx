import React from 'react'
import {connect} from 'react-redux'
import { add } from '../actors/duck/actions'

class MenuComponent extends React.Component {
    state={
        value: '',
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })        
    }

    handleClick = () => {
        this.props.add(this.state.value)
    }

    render(){
        return(
            <div>
                <input name="movie" type="text" onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Dodaj</button>
            </div>
        )
    }
}
const mapDispatchToProps = { add }
const Menu = connect(null,mapDispatchToProps)(MenuComponent);

export default Menu;
