<style>
.heading {
    position: fixed;
    top: 10%;
    left: 50%;
    color: white;
    font-size: 5rem;
    opacity: 0.8;
    transform: translateX(-50%);
}
</style>

<div class="view">
	<h1 class="heading">XCR Demo</h1>

	{#each $components as { component, props, children } (component.default)}
		<svelte:component this={component.default} components={children} {...props} />
    {/each}
</div>

<script>	
	import { components } from "shared/service.js";
</script>
