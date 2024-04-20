<script lang="ts">
    import type { Icon } from "xyz-icon-set";
    export let icon: Icon;
    export let size = "1em";
</script>

{@html icon.toString().replace('width="24px"', `width="${size}"`).replace('height="24px"', `height="${size}"`)}
