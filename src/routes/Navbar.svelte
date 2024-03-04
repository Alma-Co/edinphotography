<script>
	import { page } from '$app/stores';
</script>



<nav>
	<ul>
		<li aria-current={$page.url.pathname === '/colors-and-shapes' ? 'page' : undefined}>
			<a href="/colors-and-shapes">Colors and shapes</a>
		</li>
		<li aria-current={$page.url.pathname === '/places-and-moments' ? 'page' : undefined}>
			<a href="/places-and-moments">Places and moments</a>
		</li>
		<li aria-current={$page.url.pathname === '/analog' ? 'page' : undefined}>
			<a href="/analog">Analog</a>
		</li>
	</ul>
</nav>


<style>

    nav {
		margin-block:30px;
	}

	ul {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 40px;
	}
	
	li {
		font-size: 2rem;
	}
</style>
