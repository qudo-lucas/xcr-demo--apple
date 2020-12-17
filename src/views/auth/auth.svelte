<script>
import { Components } from "xcr-svelte";

export let components;

$: console.log(components);
</script>

<div class="card">
    <h1>Auth</h1>
    <Components {components} />
</div>
