<script lang="ts">
	type Route = { text: string; href: string };

	const routes: Route[] = [
		{ text: 'Home', href: '/' },
		{ text: 'Profile', href: '/settings/profile' },
		{ text: 'What', href: '/settings/what' }
	];
</script>

<div class="submenu">
	{#each routes as route (route.text)}
		<a href={route.href}>{route.text}</a>
	{/each}
</div>
