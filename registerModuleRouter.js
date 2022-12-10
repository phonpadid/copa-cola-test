import {registerModules} from "./register-modules";
import Company from "@/views/Pages/Company/router.js";
import Event from "@/views/Pages/Event/router.js";
import Activity from "@/views/Pages/Activity/router.js";
import FAQ from "@/views/Pages/FAQ/router.js"

registerModules({
    Company,
    Event,
    Activity,
    FAQ

})
