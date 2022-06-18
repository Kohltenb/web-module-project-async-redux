import './App.css';
import { connect } from 'react-redux';
import { useEffect } from 'react';


import { getDogs } from './actions/actions-creators'
import Dog from './components/Dog';


function App(props) {
  const { status, message, getDogs } = props
  useEffect(() => {
    getDogs()
    //  props.fetchStart();
    //  axios.get('https://dog.ceo/api/breeds/image/random')
    //   .then(res => {
    //     props.fetchSuccess(res.data.message)
    //   })
      
  }, []);

  const handleClick = () => {
    getDogs()
  }

  return (  
    <div className='topper'>
      <h1 className='title'> Welcome to the dog image generator </h1>
        <button className='mainB' onClick={handleClick}> Click For Dogs </button>  
          
          <Dog /> 
           
       
        <p className='para' status={status}>  </p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      status: state.status 
  }
}

export default connect(mapStateToProps, { getDogs })(App)