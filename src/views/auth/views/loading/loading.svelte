<style lang="scss">
    @import 'loading';
</style>

<h1>Loading</h1>
<button on:click={() => service.send("AUTH_SUCCESS")}>Success</button>

<script>
    import service from "shared/service.js";
</script>