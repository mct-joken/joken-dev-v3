<script lang="ts">
    import { ChevronDownIcon } from "xyz-icon-set";
    import Icon from "$lib/Icon.svelte";
    import { load } from "js-yaml";
    import faq_raw from '$lib/join.yaml?raw';

    interface FAQ {
        q: string;
        a: string;
    }

    const faqs = load(faq_raw) as FAQ[];
</script>

<svelte:head>
    <title>入部案内 | 松江高専 情報科学研究部</title>
</svelte:head>

<main>
    <h2>入部案内</h2>
    <div class="jk_faq_list">
        {#each faqs as faq}
            <div class="jk_faq">
                <label class="jk_faq_summary">
                    <input type="checkbox" class="hidden">
                    <span class="flex items-center w-full">
                        <span class="flex-1">{faq.q}</span>
                        <span class="jk_faq_icon">
                            <Icon icon={new ChevronDownIcon()} />
                        </span>
                    </span>
                </label>
                <p class="whitespace-pre-line jk_faq_content">{faq.a}</p>
            </div>
        {/each}
    </div>
</main>
