import BrandSlider from "./brand-slider";

const BrandOne = () => {
  return (
    // <div className="tp-brand-area">
   <div className="" style={{ marginTop: '8rem', marginBottom: '8rem' }}>
      <div className="container container-1630">
        <div className="tp-brand-brd-top  tp-brand-ptb" style={{ borderBottom:"1px solid #EAEAEB" , paddingBottom:"85px"}}>
          <div className="row align-items-center">
            <div className="col-xxl-2 col-xl-3 col-lg-3">
              <div className="tp-brand-title-box">
                <h4 className="tp-brand-title tp_fade_bottom">Clients I’ve Worked With</h4>
              </div>
            </div>
            <div className="col-xxl-10 col-xl-9 col-lg-9">
              <div className="row align-items-center">
                <div className="col-xl-12">
                  <div className="tp-brand-slider-wrapper">
                    <BrandSlider/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandOne;