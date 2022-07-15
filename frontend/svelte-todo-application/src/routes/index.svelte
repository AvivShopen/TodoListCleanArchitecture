<script>
	import { generateRandomUser } from '../utils/mock.utils';

	let counter = 0;
</script>

<h1>Welcome, {generateRandomUser()}</h1>
<h1>{counter}</h1>
<button on:click={() => ++counter}>Click Me</button>
