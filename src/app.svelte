<div class="view">
	{#each $components as { component, props, children } (component.default)}
		<svelte:component this={component.default} components={children} {...props} />
    {/each}
</div>

<script>	
	import { components } from "shared/service.js";
</script>
