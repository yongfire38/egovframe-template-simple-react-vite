import { Link } from "react-router-dom";

function EgovFooter() {
  const logoFooterImg = "/assets/images/logo_footer_w.png";
  const logoFooterImgMobile = "/assets/images/logo_footer_m.png";
  const bannerImg_01 = "/assets/images/banner_w_01.png";
  const bannerImgMobile_01 = "/assets/images/banner_m_01.png";
  const bannerImg_02 = "/assets/images/banner_w_02.png";
  const bannerImgMobile_02 = "/assets/images/banner_m_02.png";

  return (
    <div className="footer">
      <div className="inner">
        <h1>
          <Link to="">
            <img className="w" src={logoFooterImg} alt="" />
            <img className="m" src={logoFooterImgMobile} alt="" />
          </Link>
        </h1>
        <div className="info">
          <p>
            대표문의메일 : egovframeexample@gmail.com{" "}
            <span className="m_hide">|</span>
            <br className="m_show" /> 대표전화 : 0000-0000 (000-0000-0000)
            <br />
            호환성확인 : 000-0000-0000 | 교육문의 : 0000-0000-0000
          </p>
          <p className="copy">
            Copyright © 2021 Ministry Of The Interior And Safety. All Rights
            Reserved.
          </p>
        </div>
        <div className="right_col">
          <Link to="">
            <img className="w" src={bannerImg_01} alt="" />
            <img className="m" src={bannerImgMobile_01} alt="" />
          </Link>
          <Link to="">
            <img className="w" src={bannerImg_02} alt="" />
            <img className="m" src={bannerImgMobile_02} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EgovFooter;
