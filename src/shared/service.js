import router from "xcr";
import { writable } from "svelte/store";
import config from "shared/machines/main.machine.js";

// Init the router
const { service, components } = router(
    config,
    {},
    {
        debug : true,
    }
);

// Whenever the components list updates save off value to store.
const tree = writable([], (set) => {
    components((list) => {
        set(list);
    });
});

export default service;
export {
    tree as components,
};
