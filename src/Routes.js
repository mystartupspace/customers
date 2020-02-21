import React from "react";
const PrivateDesk = React.lazy(() =>
  import("./components/Forms/PrivateDesk/PrivateDesk")
);
const SharedDesk = React.lazy(() =>
  import("./components/Forms/SharedDesk/SharedDesk")
);
const DedicatedOffice = React.lazy(() =>
  import("./components/Forms/DedicatedOffice/DedicatedOffice")
);
const SessionRoom = React.lazy(() =>
  import("./components/Forms/SessionRoom/SessionRoom")
);
const PartnerShip = React.lazy(() =>
  import("./components/Forms/PartnerShip/PartnerShip")
);
const Security = React.lazy(() => import("./components/Security/Security"));
const MyRequests = React.lazy(() =>
  import("./components/MyPage/MyRequests/MyRequests")
);
const OfferList = React.lazy(() =>
  import("./components/MyPage/OfferList/OfferList")
);
const PartnerProfile = React.lazy(() =>
  import("./components/PartnerProfile/PartnerProfile")
);
const NotFound = React.lazy(() =>
  import("./components/Auth/NotFound/NotFound")
);
const InternalError = React.lazy(() =>
  import("./components/Auth/InternalError/InternalError")
);
const PartnerPanelLogin = React.lazy(() =>
  import("./components/PartnerPanel/PartnerLogin/PartnerLogin")
);
const ComingSoon = React.lazy(() => import("./components/DefaultInnerLinks"));
const routes = [
  {
    path: "/:lang?",
    exact: true,
    name: "Home",
    component: PartnerPanelLogin,
    navTransform: false,
    navStatus: true
  },
  {
    path: "/:lang?/p/:slug",
    name: "partner profile",
    exact: true,
    component: PartnerProfile,
    navStatus: true
  },
  {
    path: "/:lang?/comingsoon",
    exact: true,
    name: "Coming Soon",
    component: ComingSoon,
    navTransform: true,
    navStatus: true
  },
  {
    path: "/:lang?/apply/sessionroom",
    name: "Session Room",
    exact: true,
    component: SessionRoom,
    navStatus: true
  },
  {
    path: "/:lang?/apply/dedicatedoffice",
    name: "Dedicated Office",
    component: DedicatedOffice,
    navStatus: true
  },
  {
    path: "/:lang?/apply/privatedesk",
    name: "Private Desk",
    component: PrivateDesk,
    navStatus: true
  },
  {
    path: "/:lang?/apply/shareddesk",
    name: "Shared Desk",
    exact: true,
    component: SharedDesk,
    navStatus: true
  },

  {
    path: "/:lang?/partnership",
    exact: true,
    name: "Partner Ship",
    component: PartnerShip,
    navStatus: true
  },
  {
    path: "/:lang?/user/myrequests",
    exact: true,
    name: "My Requests",
    component: MyRequests,
    auth: ["user"],
    navStatus: true
  },
  {
    path: "/:lang?/user/offerlist",
    name: "Offer List",
    component: OfferList,
    auth: ["user"],
    navStatus: true
  },
  //Notice: 404 page have to defined as the last child of Route object
  {
    component: NotFound,
    navStatus: false
  }
];

export default routes;
