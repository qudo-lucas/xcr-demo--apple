<div class="signup">
    <h1>Signup</h1>
    {#if errorMessage}
        <p>{errorMessage}</p>
    {/if}
    <input bind:value={data.username} placeholder="Username" />
    <input bind:value={data.password} placeholder="Password" />
    <input bind:value={data.confirmPassword} placeholder="Confirm Password" />
    <button on:click={submit}>Submit</button>
</div>

<script>
import service from "shared/service.js";

const data = {
    username        : "",
    password        : "",
    confirmPassword : "",
};

const submit = () => {
    service.send({
        type : "AUTH_SUBMIT",
        data,
    });
};

let errorMessage = "";

service.subscribe((state) => {
    errorMessage = state.context.errorMessage;

    console.log(state.context);
});
</script>