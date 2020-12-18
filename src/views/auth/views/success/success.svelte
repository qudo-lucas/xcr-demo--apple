<style>
.check {
    display: flex;
    justify-content: center;
}
</style>

<div class="success">
    <div class="check">
        <img
            class="check"
            src="check.png"
            alt="success"
            style="width: 200px;
            margin: auto;"
        />
    </div>

    <h3>User Data</h3>
    <p>User: {user.username}</p>
    <p>Password: {user.password}</p>

    <button on:click={reset}>Reset</button>
</div>

<script>
    import service from "shared/service.js";
    
    let user = {};

    service.subscribe((state) => {
        user = state.context.user;
    });

    const reset = () => {
        service.send("AUTH_RESET");
    };
</script>