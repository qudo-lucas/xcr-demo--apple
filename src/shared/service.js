import router from "xcr";
import { writable } from "svelte/store";
import config from "shared/machines/main.machine.js";

const routes =  {
    auth          : "auth",
    "auth/info"   : "auth.info",
    "auth/signin" : "auth.signin",
    home          : "home",
};

// Init the router
const { service, components } = router(
    config,
    routes,
    {
        debug : __dev__,
    }
);

// Whenever the components list updates save off value to store.
const tree = writable([], (set) => {
    components((list) => {
        set(list);

        console.log("list", list);
    });
});

export default service;
export {
    tree as components,
};
