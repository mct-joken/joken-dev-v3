<script lang="ts">
    import { load } from "js-yaml";
    import faq_raw from '$lib/join.yaml?raw';

    interface FAQ {
        q: string;
        a: string;
    }

    const faqs = load(faq_raw) as FAQ[];
</script>

<main>
    <h2>入部案内</h2>
    <div class="details_list">
        {#each faqs as faq}
            <details>
                <summary>{faq.q}</summary>
                <span class="whitespace-pre-line">{faq.a}</span>
            </details>
        {/each}
    </div>
</main>
