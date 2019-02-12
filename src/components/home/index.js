import React from 'react';
import Homebody from './Homebody';
import Footer from './Footer';
import Backtop from './Backtop';
class Home extends React.Component{
	 render(){
        return (
            <div>
             <Homebody></Homebody>
             <Footer></Footer>
             <Backtop></Backtop>
            </div>
        )
    }
}

export default Home;