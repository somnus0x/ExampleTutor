import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
import MediaQuery from 'react-responsive'

class Test extends React.Component{
    render(){
        return (
        <div>
        <div>Device Test!</div>
        <MediaQuery minDeviceWidth={1224} values={{deviceWidth: 1230}}>
          <div>You are a desktop or laptop</div>
          <MediaQuery minDeviceWidth={1824}>
            <div>You also have a huge screen</div>
          </MediaQuery>
          <MediaQuery maxWidth={1224}>
            <div>You are sized like a tablet or mobile phone though</div>
          </MediaQuery>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          <div>You are a tablet or mobile phone</div>
        </MediaQuery>

        <MediaQuery orientation='portrait'>
          <div>You are portrait</div>
        </MediaQuery>
         <MediaQuery orientation='landscape'>
          <div>You are landscape</div>
        </MediaQuery>
        <MediaQuery minResolution='2dppx'>
          <div>You are retina</div>
        </MediaQuery>
      </div>
        );
    }
}
export default Test;
