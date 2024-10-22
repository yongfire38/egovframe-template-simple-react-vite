import { SetStateAction, useEffect, useRef } from "react";
import * as EgovNet from "@/api/egovFetch";
import CODE from "@/constants/code";
import { setSessionItem } from "@/utils/storage";

interface SnsNaverCallbackProps {
  onChangeLogin: (user: SetStateAction<{}>) => void;
}

const SnsNaverCallback: React.FC<SnsNaverCallbackProps> = ({
  onChangeLogin,
}) => {
  const allMenuWebRef = useRef<HTMLDivElement | null>(null);
  const btnAllMenuRef = useRef<HTMLButtonElement | null>(null);
  const allMenuMobileRef = useRef<HTMLDivElement | null>(null);

  //백엔드 호출
  const callBackEnd = () => {
    // URL에서 code와 state 파라미터 추출
    const urlParams = new URL(window.location.href).searchParams;
    const code = urlParams.get("code");
    const state = urlParams.get("state");

    console.log("code, state=====>", code, state);

    // 요청이 성공하면
    if (code) {
      const naverLoginUrl = `/login/naver/callback?code=${code}&state=${state}`;
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      };
      EgovNet.requestFetch(
        naverLoginUrl,
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
            if (allMenuWebRef.current)
              allMenuWebRef.current.classList.add("closed");
            if (btnAllMenuRef.current) {
              btnAllMenuRef.current.classList.remove("active");
              btnAllMenuRef.current.title = "전체메뉴 닫힘";
            }
            if (allMenuMobileRef.current)
              allMenuMobileRef.current.classList.add("closed");

            alert("Sns 간편 로그인 중...");
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

export default SnsNaverCallback;
