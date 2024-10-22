import { SetStateAction, useEffect, useRef } from "react";
import * as EgovNet from "@/api/egovFetch";
import CODE from "@/constants/code";
import { setSessionItem } from "@/utils/storage";

interface SnsKakaoCallbackProps {
  onChangeLogin: (user: SetStateAction<{}>) => void;
}

const SnsKakaoCallback: React.FC<SnsKakaoCallbackProps> = ({
  onChangeLogin,
}) => {
  //백엔드 호출
  const callBackEnd = () => {
    // URL에서 code와 state 파라미터 추출
    const urlParams = new URL(window.location.href).searchParams;
    const code = urlParams.get("code");
    const state = urlParams.get("state");

    console.log("code, state=====>", code, state);

    // 요청이 성공하면
    if (code) {
      const kakaoLoginUrl = `/login/kakao/callback?code=${code}&state=${state}`;
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      };
      EgovNet.requestFetch(
        kakaoLoginUrl,
        requestOptions,
        (resp: {
          resultVO: any;
          jToken: string | null;
          resultCode: string;
        }) => {
          let resultVO = resp.resultVO;
          let jToken = resp?.jToken || null;
          if (Number(resp.resultCode) === Number(CODE.RCV_SUCCESS)) {
            setSessionItem("jToken", jToken);
            setSessionItem("loginUser", resultVO);
            onChangeLogin(resultVO);
            // PC와 Mobile 열린메뉴 닫기
            document.querySelector(".all_menu.WEB")?.classList.add("closed");
            document.querySelector(".btnAllMenu")?.classList.remove("active");
            document
              .querySelector(".btnAllMenu")
              ?.setAttribute("title", "전체메뉴 닫힘");
            document.querySelector(".all_menu.Mobile")?.classList.add("closed");
            alert("Sns 간편 로그인 중..."); //공통 alert 사용대신해서
          } else {
            //React.StrictMode 에서 fetch가 자동으로 2번 실행할 때 아래 메인화면으로 이동된다.
            window.location.replace("/");
          }
        }
      );
    }
  };
  useEffect(callBackEnd, []);

  return (
    <>
      {/* 로그인중이라는 것을 표시할 수 있는 로딩중 화면 */}
      <h1 className="btn_social">로그인 중...</h1>
    </>
  );
};

export default SnsKakaoCallback;
