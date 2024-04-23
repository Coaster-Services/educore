<script lang="ts">
	import Link from "$lib/components/Link.svelte";
import {Button, Input, ItemSpacer} from "@coasterfan5/ui"
</script>

<h2>Welcome Back</h2>
<ItemSpacer>
	<Input name="email" label="Email"/>
</ItemSpacer>
<ItemSpacer>
	<Input name="password" label="Password"/>
</ItemSpacer>
<ItemSpacer>
	<Button value="Log In" variation="outline"/>
</ItemSpacer>
<p>No account? <Link href="/console/register">Get Started</Link></p>
