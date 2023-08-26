<script>
  // 필요한 로직은 여기에 추가
  import {onMount} from "svelte";
  import {MemoDexie} from "../collections/table/Memo/data/source/dexiejs/object.ts";
  import {goto} from "$app/navigation";
  import {Memo} from "../collections/table/Memo/domain/model/model.ts";

  let title = "";
  let content = "";

  export let data

  let memoObj = null

  onMount(async () => {
    memoObj = await new MemoDexie().get(data.pathname)

    if(memoObj===null){memoObj = new Memo()}

    title= memoObj.Title
    content = memoObj.Contents

  })

  async function editMemo() {
    memoObj.Title = title
    memoObj.Contents = content

    await new MemoDexie().upsert(memoObj)

    goto("/")
  }


</script>

<div class="dark:bg-gray-800 dark:text-white min-h-screen p-6 flex justify-center">
  <div class="max-w-2xl w-full">
    <div class="flex justify-between items-center">
      <input type="text" bind:value={title} class="text-4xl bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="제목을 입력하세요." />

      <button on:click={editMemo} class="border-4 border-white py-2 px-4 rounded-full">Edit</button>
    </div>

    <div class="mt-6">
      <textarea bind:value={content} class="text-xl w-full h-32 bg-transparent border-none focus:ring-0 focus:outline-none" placeholder="내용을 입력하세요."></textarea>
    </div>
  </div>
</div>
