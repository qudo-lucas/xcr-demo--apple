<div class="auth card">
    <h1>Auth</h1>
    {#each components as { component, props, children } (component.default)}
        <svelte:component this={component.default} components={children} {...props} />
    {/each}
</div>

<script>	
export let components;
</script>