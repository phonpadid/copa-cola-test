import {registerModules} from "./register-modules";
import office from "@/views/pages/system/office/router";
import operator from "@/views/pages/setting/operator/router";
import listRouteVoice from "@/views/pages/setting/listOfRouteVoice/router";
import listRouteSMS from "@/views/pages/setting/listOfRouteSMS/router";
import listRouteCountry from "@/views/pages/setting/listOfRouteCountry/router"
import partnerRouter from "@/views/pages/setting/partner/router";
import currencyRouter from "@/views/pages/configTariff/currency/router";
import incomingRate from "@/views/pages/configTariff/incomingRate/router";
import outGoingRate from "@/views/pages/configTariff/outGoingRate/router";
import incomingRateSMS from "@/views/pages/configTariff/incomingRateSMS/router";
import testClassify from "@/views/pages/configTariff/testClassify/router";
import HURThreshold from "@/views/pages/HURThreshold/router";
import reRunSMS from "@/views/pages/re-run-AllReport/reRunSMS/router";
import reRunVoice from "@/views/pages/re-run-AllReport/reRunVoice/router";
import voiceCDRs from "@/views/pages/CDRsExport/voiceCDRs/router";
import voiceOGCDRs from "@/views/pages/CDRsExport/voiceOGCDRs/router";
import SMSCDRs from "@/views/pages/CDRsExport/SMSCDRs/router";
import reconcileCDRsIC from "@/views/pages/reconcile/reconcileCDRIC/router"
import reconcileCDRsOG from "@/views/pages/reconcile/reconcileCDROG/router"
import user from "@/views/pages/system/user/router"
import autoNumber from "@/views/pages/system/autoNumber/router"

registerModules({
    office,
    operator,
    listRouteVoice,
    listRouteSMS,
    listRouteCountry,
    partnerRouter,
    currencyRouter,
    incomingRate,
    outGoingRate,
    incomingRateSMS,
    testClassify,
    HURThreshold,
    reRunSMS,
    reRunVoice,
    voiceCDRs,
    voiceOGCDRs,
    SMSCDRs,
    reconcileCDRsIC,
    reconcileCDRsOG,
    user,
    autoNumber

})
