class Slider extends React.Component {
  componentDidMount() {
    $('.mu-slide').slick({
      arrows: true,
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      cssEase: 'linear',
    });
  }
  render() {
    return (
      <div id="mu-slider">
        <div className="mu-slide">
          {this.props.sliderData.map((slideritem) => (
            <div className="mu-single-slide" key={slideritem.title}>
              <img src={slideritem.imageSrc} alt="slider img" />
              <div className="mu-single-slide-content-area">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mu-single-slide-content">
                        <h1>{slideritem.title}</h1>
                        <p>{slideritem.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Slider;
