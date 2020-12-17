<script>	
import { components } from "shared/service.js";

import { Components } from "xcr-svelte";

console.log({ components : $components })
</script>

<div class="view">
	<Components components={$components} />
</div>
