import { actions, assign } from "xstate";

import { component } from "xcr";

const { raise } = actions;

const generatePromise = () => new Promise((r) => setTimeout(r, 3000));

export default {
    initial: "auth",

    context : {
        user : {
            username : "",
            password : "",
            confirmPassword : "",
        },

        errorMessage : "",
    },

    states : {
        auth : component(import("views/auth/auth.svelte"), {
            initial : "idle",

            on : {
                AUTH_SUCCESS : ".success",
                AUTH_RESET : ".idle",

                AUTH_SUBMIT : [
                    {
                        cond : (ctx, event) => !event.data.username,

                        target : ".idle",

                        actions : [
                            assign(() => ({
                                errorMessage : "Invalid username.",
                            })),
                        ],
                    },
                    {
                        cond : (ctx, event) => !event.data.password,

                        target : ".idle",

                        actions : [
                            assign(() => ({
                                errorMessage : "Invalid password.",
                            })),
                        ],
                    },
                    {
                        cond : (ctx, event) => event.data.password !== event.data.confirmPassword,

                        target : ".idle",

                        actions : [
                            assign(() => ({
                                errorMessage : "Passwords don't match.",
                            })),
                        ],
                    },
                    {
                        target : ".loading",
    
                        actions : [
                            assign((ctx, event) => ({
                                user : event.data,
                            })),
                        ],
                    },
                ],
            },

            states : {
                idle : component(import("views/auth/views/signup/signup.svelte"), {}),

                loading : component(import("views/auth/views/loading/loading.svelte"), {
                    invoke : {
                        src     : () => generatePromise(),

                        onDone : {
                            actions : raise("AUTH_SUCCESS"),
                        },
                    },
                }),

                success : component(import("views/auth/views/success/success.svelte"), {}),
            },
        }),
    },
};
