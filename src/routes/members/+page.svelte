<script lang="ts">
    import { load } from 'js-yaml';
    import members_s from '$lib/members.yaml?raw';
    interface Member {
        name: string;
        icon: string;
        roll: string;
        links: {
            title: string;
            icon: string;
            url: string;
        }[];
    }
    const members = load(members_s) as Member[];
</script>

<main>
    <div class="flex flex-wrap w-fit gap-4 mx-auto">
        {#each members as member}
            <div class="jk_card w-48">
                <div class="flex flex-col gap-4">
                    <img src={member.icon} alt={`${member.name}のアイコン`} class="w-40 rounded-full" />
                    <div>
                        <h4>{member.name}</h4>
                        <p>{member.roll}</p>
                        <div class="flex gap-1 items-stretch">
                            {#each member.links as link}
                                <a href={link.url} class="border-none flex items-center"><img src={link.icon} alt={link.title} class="w-6" /></a>
                            {/each}
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</main>
