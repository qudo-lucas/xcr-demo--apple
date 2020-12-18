<div class="auth card">
    {#each components as { component, props, children } (component.default)}
        <svelte:component this={component.default} components={children} {...props} />
    {/each}
</div>

<script>	
export let components;
</script>