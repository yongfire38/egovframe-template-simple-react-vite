import { useEffect, useState, useRef, useCallback } from "react";
import { Navigate, Routes, Route, useLocation } from "react-router-dom";

import URL from "@/constants/url";
import CODE from "@/constants/code";

//COMMON
import EgovHeader from "@/components/EgovHeader";
import EgovFooter from "@/components/EgovFooter";
import EgovInfoPopup from "@/components/EgovInfoPopup";
import EgovError from "@/components/EgovError";

import EgovMain from "@/pages/main/EgovMain";
import EgovLogin from "@/pages/login/EgovLogin";

//ABOUT
import EgovAboutSite from "@/pages/about/EgovAboutSite";
import EgovAboutHistory from "@/pages/about/EgovAboutHistory";
import EgovAboutOrganization from "@/pages/about/EgovAboutOrganization";
import EgovAboutLocation from "@/pages/about/EgovAboutLocation";

//INTRO
import EgovIntroWork from "@/pages/intro/EgovIntroWork";
import EgovIntroService from "@/pages/intro/EgovIntroService";

//SUPPORT
import EgovSupportDownloadList from "@/pages/support/download/EgovDownloadList";
import EgovSupportDownloadDetail from "@/pages/support/download/EgovDownloadDetail";
import EgovSupportDownloadCreate from "@/pages/support/download/EgovDownloadCreate";
import EgovSupportQnaList from "@/pages/support/qna/EgovQnaList";
import EgovSupportQnaDetail from "@/pages/support/qna/EgovQnaDetail";
import EgovSupportApply from "@/pages/support/apply/EgovSupportApply";

//INFORM
import EgovDailyList from "@/pages/inform/daily/EgovDailyList";
import EgovDailyDetail from "@/pages/inform/daily/EgovDailyDetail";
import EgovWeeklyList from "@/pages/inform/weekly/EgovWeeklyList";

import EgovNoticeList from "@/pages/inform/notice/EgovNoticeList";
import EgovNoticeDetail from "@/pages/inform/notice/EgovNoticeDetail";
import EgovNoticeEdit from "@/pages/inform/notice/EgovNoticeEdit";

import EgovGalleryList from "@/pages/inform/gallery/EgovGalleryList";
import EgovGalleryDetail from "@/pages/inform/gallery/EgovGalleryDetail";
import EgovGalleryEdit from "@/pages/inform/gallery/EgovGalleryEdit";

//ADMIN
import EgovAdminScheduleList from "@/pages/admin/schedule/EgovAdminScheduleList";
import EgovAdminScheduleDetail from "@/pages/admin/schedule/EgovAdminScheduleDetail";
import EgovAdminScheduleEdit from "@/pages/admin/schedule/EgovAdminScheduleEdit";

import EgovAdminBoardList from "@/pages/admin/board/EgovAdminBoardList";
import EgovAdminBoardEdit from "@/pages/admin/board/EgovAdminBoardEdit";

import EgovAdminUsageList from "@/pages/admin/usage/EgovAdminUsageList";
import EgovAdminUsageEdit from "@/pages/admin/usage/EgovAdminUsageEdit";

import EgovAdminNoticeList from "@/pages/admin/notice/EgovAdminNoticeList";
import EgovAdminNoticeDetail from "@/pages/admin/notice/EgovAdminNoticeDetail";
import EgovAdminNoticeEdit from "@/pages/admin/notice/EgovAdminNoticeEdit";

import EgovAdminGalleryList from "@/pages/admin/gallery/EgovAdminGalleryList";
import EgovAdminGalleryDetail from "@/pages/admin/gallery/EgovAdminGalleryDetail";
import EgovAdminGalleryEdit from "@/pages/admin/gallery/EgovAdminGalleryEdit";
//사이트관리자 암호 바꾸기 기능 추가 2023.04.15(토) 김일국 추가
import EgovAdminPasswordUpdate from "@/pages/admin/manager/EgovAdminPasswordUpdate";
import * as EgovNet from "@/api/egovFetch"; // jwt토큰 위조 검사 때문에 추가
import initPage from "@/js/ui";

// 에러 페이지와 같은 상단(EgovHeader) 소스가 제외된 페이지에서 ui.js의 햄버거버튼 작동오류가 발생한다. 
// 즉, ui.js가 작동되지 않아서 재 로딩 해야 한다. 그래서, useRef객체를 사용하여 이전 페이지 URL을 구하는 코드 추가(아래)
const usePrevLocation = (location) => {
	const prevLocRef = useRef(location);
	useEffect(()=>{
		prevLocRef.current = location;
	},[location]);
	return prevLocRef.current;
}

const RootRoutes = () => {
  
  const location = useLocation();
  const prevLocation = usePrevLocation(location);

  
    return (
      <Routes>
        <Route path={URL.ERROR} element={<EgovError prevUrl={prevLocation} />} />
        <Route path="*" element={<SecondRoutes />} />
      </Routes>
    );

};

const SecondRoutes = () => {
  const [loginVO, setLoginVO] = useState({});

  useEffect(() => {
    initPage();
  });

  return (
    <>
      <EgovHeader
        loginUser={loginVO}
        onChangeLogin={(user) => setLoginVO(user)}
      />
      <Routes>
        {/* MAIN */}
        <Route path={URL.MAIN} element={<EgovMain />} />

        {/* LOGIN */}
        <Route
          path={URL.LOGIN}
          element={<EgovLogin onChangeLogin={(user) => setLoginVO(user)} />}
        />

        {/* ERROR */}
        <Route path={URL.ERROR} element={<EgovError />} />

        {/* ABOUT */}
        <Route path={URL.ABOUT} element={<Navigate to={URL.ABOUT_SITE} />} />
        <Route path={URL.ABOUT_SITE} element={<EgovAboutSite />} />
        <Route path={URL.ABOUT_HISTORY} element={<EgovAboutHistory />} />
        <Route
          path={URL.ABOUT_ORGANIZATION}
          element={<EgovAboutOrganization />}
        />
        <Route path={URL.ABOUT_LOCATION} element={<EgovAboutLocation />} />

        {/* INTRO */}
        <Route path={URL.INTRO} element={<Navigate to={URL.INTRO_WORKS} />} />
        <Route path={URL.INTRO_WORKS} element={<EgovIntroWork />} />
        <Route path={URL.INTRO_SERVICE} element={<EgovIntroService />} />

        {/* SUPPORT */}
        <Route
          path={URL.SUPPORT}
          element={<Navigate to={URL.SUPPORT_DOWNLOAD} />}
        />

        <Route
          path={URL.SUPPORT_DOWNLOAD}
          element={<EgovSupportDownloadList />}
        />
        <Route
          path={URL.SUPPORT_DOWNLOAD_DETAIL}
          element={<EgovSupportDownloadDetail />}
        />
        <Route
          path={URL.SUPPORT_DOWNLOAD_CREATE}
          element={<EgovSupportDownloadCreate />}
        />

        <Route exact path={URL.SUPPORT_QNA} element={<EgovSupportQnaList />} />
        <Route
          exact
          path={URL.SUPPORT_QNA_DETAIL}
          element={<EgovSupportQnaDetail />}
        />

        <Route exact path={URL.SUPPORT_APPLY} element={<EgovSupportApply />} />

        {/* INFORM */}
        <Route path={URL.INFORM} element={<Navigate to={URL.INFORM_DAILY} />} />

        <Route path={URL.INFORM_DAILY} element={<EgovDailyList />} />
        <Route path={URL.INFORM_DAILY_DETAIL} element={<EgovDailyDetail />} />
        <Route path={URL.INFORM_WEEKLY} element={<EgovWeeklyList />} />
        <Route path={URL.INFORM_WEEKLY_DETAIL} element={<EgovDailyDetail />} />

        <Route path={URL.INFORM_NOTICE} element={<EgovNoticeList />} />
        <Route path={URL.INFORM_NOTICE_DETAIL} element={<EgovNoticeDetail />} />
        <Route
          path={URL.INFORM_NOTICE_CREATE}
          element={<EgovNoticeEdit mode={CODE.MODE_CREATE} />}
        />
        <Route
          path={URL.INFORM_NOTICE_MODIFY}
          element={<EgovNoticeEdit mode={CODE.MODE_MODIFY} />}
        />
        <Route
          path={URL.INFORM_NOTICE_REPLY}
          element={<EgovNoticeEdit mode={CODE.MODE_REPLY} />}
        />

        <Route path={URL.INFORM_GALLERY} element={<EgovGalleryList />} />
        <Route
          path={URL.INFORM_GALLERY_DETAIL}
          element={<EgovGalleryDetail />}
        />
        <Route
          path={URL.INFORM_GALLERY_CREATE}
          element={<EgovGalleryEdit mode={CODE.MODE_CREATE} />}
        />
        <Route
          path={URL.INFORM_GALLERY_MODIFY}
          element={<EgovGalleryEdit mode={CODE.MODE_MODIFY} />}
        />
        <Route
          path={URL.INFORM_GALLERY_REPLY}
          element={<EgovGalleryEdit mode={CODE.MODE_REPLY} />}
        />

        {/* ADMIN */}
        <Route
          path={URL.ADMIN}
          element={<Navigate to={URL.ADMIN_SCHEDULE} />}
        />
        <Route path={URL.ADMIN_SCHEDULE} element={<EgovAdminScheduleList />} />
        <Route
          path={URL.ADMIN_SCHEDULE_DETAIL}
          element={<EgovAdminScheduleDetail />}
        />
        <Route
          path={URL.ADMIN_SCHEDULE_CREATE}
          element={<EgovAdminScheduleEdit mode={CODE.MODE_CREATE} />}
        />
        <Route
          path={URL.ADMIN_SCHEDULE_MODIFY}
          element={<EgovAdminScheduleEdit mode={CODE.MODE_MODIFY} />}
        />

        <Route path={URL.ADMIN_BOARD} element={<EgovAdminBoardList />} />
        <Route
          path={URL.ADMIN_BOARD_CREATE}
          element={<EgovAdminBoardEdit mode={CODE.MODE_CREATE} />}
        />
        <Route
          path={URL.ADMIN_BOARD_MODIFY}
          element={<EgovAdminBoardEdit mode={CODE.MODE_MODIFY} />}
        />

        <Route path={URL.ADMIN_USAGE} element={<EgovAdminUsageList />} />
        <Route
          path={URL.ADMIN_USAGE_CREATE}
          element={<EgovAdminUsageEdit mode={CODE.MODE_CREATE} />}
        />
        <Route
          path={URL.ADMIN_USAGE_MODIFY}
          element={<EgovAdminUsageEdit mode={CODE.MODE_MODIFY} />}
        />

        <Route path={URL.ADMIN_NOTICE} element={<EgovAdminNoticeList />} />
        <Route
          path={URL.ADMIN_NOTICE_DETAIL}
          element={<EgovAdminNoticeDetail />}
        />
        <Route
          path={URL.ADMIN_NOTICE_CREATE}
          element={<EgovAdminNoticeEdit mode={CODE.MODE_CREATE} />}
        />
        <Route
          path={URL.ADMIN_NOTICE_MODIFY}
          element={<EgovAdminNoticeEdit mode={CODE.MODE_MODIFY} />}
        />
        <Route
          path={URL.ADMIN_NOTICE_REPLY}
          element={<EgovAdminNoticeEdit mode={CODE.MODE_REPLY} />}
        />

        <Route path={URL.ADMIN_GALLERY} element={<EgovAdminGalleryList />} />
        <Route
          path={URL.ADMIN_GALLERY_DETAIL}
          element={<EgovAdminGalleryDetail />}
        />
        <Route
          path={URL.ADMIN_GALLERY_CREATE}
          element={<EgovAdminGalleryEdit mode={CODE.MODE_CREATE} />}
        />
        <Route
          path={URL.ADMIN_GALLERY_MODIFY}
          element={<EgovAdminGalleryEdit mode={CODE.MODE_MODIFY} />}
        />
        <Route
          path={URL.ADMIN_GALLERY_REPLY}
          element={<EgovAdminGalleryEdit mode={CODE.MODE_REPLY} />}
        />
        {/* 사이트관리자 암호 바꾸기 기능 추가 2023.04.15(토) 김일국 */}
        <Route path={URL.ADMIN_MANAGER} element={<EgovAdminPasswordUpdate />} />
      </Routes>
      <EgovFooter />
      <EgovInfoPopup />
    </>
  );
};

export default RootRoutes;
