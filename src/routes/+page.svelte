<script>
    import {onMount} from "svelte";
    import {MemoDexie} from "./collections/table/Memo/data/source/dexiejs/object.ts";
    import {Memo} from "./collections/table/Memo/domain/model/model.ts";
    import {goto} from "$app/navigation";

    let notes = [];

    onMount(async () => {
        notes = await new MemoDexie().getAllOrderByUpdateMillis()

        if (notes === null) notes = [];
    });

    async function addMemo() {
        let obj = new Memo();
        goto("/" + obj.DocId);
    }
</script>

<div class="bg-gray-800 text-white min-h-screen">
    <div class="container mx-auto py-8">
        <div class="flex justify-between items-center">
            <h1 class="text-5xl font-bold flex items-center">
                Junes Note
                <button on:click={addMemo}
                        class="ml-4 text-lg bg-white text-gray-800 p-2 rounded-full w-10 h-10 flex items-center justify-center">
                    +
                </button>
            </h1>
        </div>

        <p class="opacity-60 pt-4 text-2xl">Taking notes while we learn.</p>

        <ul class="mt-8 space-y-2">
            {#each notes as note}
                <li>
                    <a href={"/" + note.DocId}>
                        {note.Title}
                    </a>
                </li>
            {/each}
        </ul>

    </div>
</div>
