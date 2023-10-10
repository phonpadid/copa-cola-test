import {registerModules} from "./register-modules";
import office from "@/views/pages/system/office/router";
import manageText from "@/views/pages/system/manageText/router";
import match from "@/views/pages/system/match/router";
import matchResultRouter from "@/views/pages/system/matchResult/router";
import userRouter from "@/views/pages/system/user/router";
import textRouter from "@/views/pages/system/Text/router";
import postRouter from "@/views/pages/system/managePost/router";
import textSucceedRouter from "@/views/pages/system/TextSucceed/router";
// import Dashboard from "@/views/pages/system/Dashboard/router";

registerModules({
    office,
    manageText,
    match,
    matchResultRouter,
    userRouter,
    textRouter,
    postRouter,
    textSucceedRouter
    // Dashboard

})
