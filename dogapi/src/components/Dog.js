import React from "react";
import { connect } from 'react-redux'

const Dog = (props) => {
    const { message } = props;

    return(<div className='dog'>
            <header className="App-header">
                <img src={message} className='dogimg' width='400'></img>
                {/* <button className='fullscreenbutton' href=> Fullscreen </button>  */}
            </header>
    </div>)
}

const mapStateToProps = (state) => {
    return {
        message: state.message
    }
}
export default connect(mapStateToProps, {})(Dog);