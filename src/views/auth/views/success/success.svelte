<style lang="scss">
    @import 'success';
</style>

<h1>Success</h1>
<button on:click={() => service.send("AUTH_RESET")}>Reset</button>

<script>
    import service from "shared/service.js";
</script>