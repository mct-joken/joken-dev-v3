<script lang="ts">
	import '../app.css';
	import { HamburgerIcon, CrossIcon } from 'xyz-icon-set';
	import Icon from '$lib/Icon.svelte';
	let hamburger_open = false;
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href="/icon.svg" />
</svelte:head>

<header>
	<input type="checkbox" id="hamburger-checkbox" class="hidden" bind:checked={hamburger_open} />
	<label for="hamburger-checkbox" class="cursor-pointer" title="メニュー">
		<Icon icon={new HamburgerIcon()} size="1.25rem" />
	</label>
    <a href="/">
		<img src="/logo.svg" class="h-7 -mb-1" alt="松江高専 情報科学研究部" />
	</a>
</header>

<div id="hamburger">
	<label for="hamburger-checkbox" title="閉じる">
		<Icon icon={new CrossIcon()} size="1.25rem" />
	</label>
	<a href="/" on:click={() => {hamburger_open = false;}}>
	    <span>ホーム</span>
	</a>
	<a href="/achievements" on:click={() => {hamburger_open = false;}}>
	    <span>活動実績</span>
	</a>
	<a href="/activity" on:click={() => {hamburger_open = false;}}>
	    <span>活動内容</span>
	</a>
	<a href="/join" on:click={() => {hamburger_open = false;}}>
	    <span>入部案内</span>
	</a>
</div>

<label id="hamburger_cover" for="hamburger-checkbox"></label>

<div class="flex-1 flex-col mt-10">
    <slot />
</div>

<footer>
	<p>&copy;2024 松江高専情報科学研究部</p>
</footer>