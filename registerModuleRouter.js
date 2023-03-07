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
import adjustmentSMSRouter from "@/views/pages/settlement/creditAndDebit/adjustmentSMS/router"
import adjustmentVoiceRouter from "@/views/pages/settlement/creditAndDebit/adjustmentVoice/router"
import printCreditAndDebitRouter from "@/views/pages/settlement/creditAndDebit/printCreditAndDebit/router"
// import bankAccountRouter from "@/views/pages/settlement/List/bankAccount/router"
// import currenciesRouter from "@/views/pages/settlement/List/currencies/router"
// import exchangeRateRouter from "@/views/pages/settlement/List/exchangeRate/router"
// import approvedInvoiceRouter from "@/views/pages/settlement/listOfInvoice/approvedInvoice/router"
// import partnerInvoiceRouter from "@/views/pages/settlement/listOfInvoice/partnerInvoice/router"
// import statemtAndInvoiceValidationRouter from "@/views/pages/settlement/listOfInvoice/statemtAndInvoiceValidation/router"
// import viewAndExportInvoice from "@/views/pages/settlement/listOfInvoice/viewAndExportInvoice/router"
// import approvedInvoiceSMSRouter from "@/views/pages/settlement/listOfInvoiceSMS/approvedInvoiceSMS/router"
// import partnerInvoiceSMSRouter from "@/views/pages/settlement/listOfInvoiceSMS/partnerInvoiceSMS/router"
// import viewAndExportInvoiceSMSRouter from "@/views/pages/settlement/listOfInvoiceSMS/viewAndExportInvoiceSMS/router"
// import listOfPaymentSMSRouter from "@/views/pages/settlement/listOfPayment/listOfPaymentSMS/router"
// import listOfPaymentVoiceRouter from "@/views/pages/settlement/listOfPayment/listOfPaymentVoice/router"
// import listOfReceiptSMSRouter from "@/views/pages/settlement/listOfReceipt/listOfReceiptSMS/router";
// import interconnectReportRouter from "@/views/pages/settlement/listOfReceipt/interconnectReport/router";

registerModules({
    office,
    // bankAcountRouter,
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
    autoNumber,
    adjustmentSMSRouter,
    adjustmentVoiceRouter,
    printCreditAndDebitRouter,
    // bankAccountRouter,
    // currenciesRouter,
    // exchangeRateRouter,
    // approvedInvoiceRouter,
    // partnerInvoiceRouter,
    // statemtAndInvoiceValidationRouter,
    // viewAndExportInvoice,
    // approvedInvoiceSMSRouter,
    // partnerInvoiceSMSRouter,
    // viewAndExportInvoiceSMSRouter,
    // listOfPaymentSMSRouter,
    // listOfPaymentVoiceRouter,
    // listOfReceiptSMSRouter,
    // interconnectReportRouter

})
