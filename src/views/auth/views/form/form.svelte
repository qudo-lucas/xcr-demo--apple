<style lang="scss">
    @import 'form';
</style>

<h1>Form</h1>
<button on:click={() => service.send("AUTH_SUBMIT")}>Submit</button>

<script>
    import service from "shared/service.js";
</script>