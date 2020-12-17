import { actions } from "xstate";

import { component } from "xcr";

const { raise } = actions;

const fakeFetch = new Promise((r) => setTimeout(r, 2000));

export default {
    initial: "boot",

    on : {
        VIEW_AUTH : ".auth",
    },

    states : {
        boot : {
            invoke : {
                src     : fakeFetch,
                onDone : {
                    actions : raise("VIEW_AUTH"),
                }
            }
        },

        auth : component(import("views/auth/auth.svelte"), {
            initial : "idle",

            on : {
                AUTH_RESET    : ".idle",
                AUTH_SUBMIT : ".loading",
                AUTH_SUCCESS : ".success",
            },

            states : {
                idle : component(import("views/auth/views/form/form.svelte"), {
                    
                }),
                loading : component(import("views/auth/views/loading/loading.svelte"), {
                    
                }),
                success : component(import("views/auth/views/success/success.svelte"), {

                }),
            },
        }),
    },
};
