import React from 'react';
import Flag from './Flag.jsx';


// props = closeModal, modalImage, displayedImages
class Modal extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentPhoto: this.props.modalImage,
      report: false
    };
    this.nextImage = this.nextImage.bind(this);
    this.report = this.report.bind(this);
  }

  nextImage(e){
      this.setState({
        currentPhoto: this.props.displayedImages[ this.props.displayedImages.indexOf(this.state.currentPhoto) + 1 ]
      })
    e.preventDefault()
  }

  previousImage(e){
      this.setState({
        currentPhoto: this.props.displayedImages[ this.props.displayedImages.indexOf(this.state.currentPhoto) - 1 ]
      })
    e.preventDefault()
  }

  report(e){
    if (this.state.report === false){
      this.setState({
        report: true
      })
    } else {
      this.setState({
        report: false
      })
    }
  }

  render(){
    if (this.state.report === false) {
      return (
        <div id='simpleModal' className='modal'>
          <span onClick={(e) => this.props.closeModal(e)} className='closeBtn'>&times;</span>
          <div className='outerDiv'>            
            <a className='leftArrow' onClick={(e) => this.previousImage(e)}>&lt;</a>            
              <div className='modal-content-holder'>
                <img className='modal-content' src={this.state.currentPhoto} />
                <div className='modal-footer'>
                  <div className='circle-holder'>
                    <p className='circle'>OT</p>
                  </div>
                  <div className='text-holder'>
                    <div className='text'>OpenTable Diner</div>
                    <div className='dinedOn'>Dined on January 5, 2018</div>
                  </div>
                  <svg onClick={(e) => this.report(e)} className='flag-icon' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                    <path id='_24._Tiny_Flag_Icon' fill='#fff' data-name='24. Tiny Flag Icon' d='M485,475H469v12h-2V463h18l-3,6Zm-16-10v8h13l-2-4,2-4H469Z' transform='translate(-464 -463)'/>
                  </svg>
                </div>
              </div>           
            <div className='rightArrowDiv'>
              <a className='rightArrow' onClick={(e) => this.nextImage(e)}>&gt;</a>
            </div>          
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <Flag report={this.report}/>
          <div id='simpleModal' className='modal'>
            <span onClick={(e) => this.props.closeModal(e)} className='closeBtn'>&times;</span>
            <div className='outerDiv'>
              <a className='leftArrow' onClick={(e) => this.previousImage(e)}>&lt;</a>
                <div className='modal-content-holder'>
                  <img className='modal-content' src={this.state.currentPhoto} />
                  <div className='modal-footer'>
                    <div className='circle-holder'>
                      <p className='circle'>OT</p>
                    </div>
                    <div className='text-holder'>
                      <div className='text'>OpenTable Diner</div>
                      <div className='dinedOn'>Dined on January 5, 2018</div>
                    </div>
                    <svg onClick={(e) => this.report(e)} className='flag-icon' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                      <path id='_24._Tiny_Flag_Icon' fill='#fff' data-name='24. Tiny Flag Icon' d='M485,475H469v12h-2V463h18l-3,6Zm-16-10v8h13l-2-4,2-4H469Z' transform='translate(-464 -463)'/>
                    </svg>
                  </div>
                </div>
              <a className='rightArrow' onClick={(e) => this.nextImage(e)}>&gt;</a>
            </div>
          </div>
        </div>
      )
    }
  }
}


export default Modal;