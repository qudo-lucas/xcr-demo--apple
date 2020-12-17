<style lang="scss">
    @import 'auth';
</style>

<h1>Auth</h1>
{#each components as { component, props, children } (component.default)}
    <svelte:component this={component.default} components={children} {...props} />
{/each}

<script>	
export let components;
</script>