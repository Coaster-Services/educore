<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import { Button, Input, ItemSpacer } from '@coasterfan5/ui';
</script>

<h2>Welcome!</h2>
<ItemSpacer>
	<Input name="firstName" label="First Name" />
</ItemSpacer>
<ItemSpacer>
	<Input name="lastName" label="Last Name" />
</ItemSpacer>
<ItemSpacer>
	<Input name="email" label="Email" />
</ItemSpacer>
<ItemSpacer>
	<Input name="password" type="password" label="Password" />
</ItemSpacer>
<ItemSpacer>
	<Input name="password2" type="password" label="Confirm Password" />
</ItemSpacer>
<ItemSpacer>
	<Button value="Log In" variation="outline" />
</ItemSpacer>
<p>Returning user? <Link href="/console/login">Log In</Link></p>
