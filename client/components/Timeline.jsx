import React from 'react';

// import Contents from '../utils/contents';
// import HorizontalTimelineContent from './HorizontalTimelineContent';


export default class HTFinal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0, previous: 0 };
  }

  // componentWillMount() {
  //   const divStyle={overflow: 'hidden'};
  //   this.data = Contents.map((content, index) => {
  //     return ({
  //       date: content.date,
  //       component: (
  //         <div style={divStyle} key={index}>
  //           <div className="row container container-no-top text-left">
  //             <img className="content-pic" src={`${content.picture}`}></img>
  //             <p className="content-content col-lg-10 col-md-10 col-sm-10"> { content.content } </p>
  //             {/*<p>{ content.content}</p>
  //           <hr />*/}
  //           </div>
  //         </div>
  //       )
  //     });
  //   });
  // }

  render() {
    return(
      <div className="bg-container container">
        <div className="bg">
          <div className="container">
            <h1>My Story Line</h1>
            <hr />
          </div>
          {/* <HorizontalTimelineContent content={this.data}/> */}
        </div>
      </div>
    )
  }
}