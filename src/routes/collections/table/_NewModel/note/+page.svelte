<script>

    import {NewModel} from "../domain/model/model.ts";
    import {NewModelDexie} from "../data/source/dexiejs/object.ts";

    const buttons = [
        {
            name: '1',
            onClick: async () => {
                console.log('Button 1 was clicked');

                const objs = await new NewModelDexie().getAll();
                console.log(objs)
            },
        },
        {
            name: '2',
            onClick: async () => {
                console.log('Button 2 was clicked');

                const obj = new NewModel();
                obj.I000 = 1004;
                obj.DocId = "DocId113";

                await new NewModelDexie().upsert(obj);
            },
        },
        {
            name: '3',
            onClick: async () => {
                console.log('Button 3 was clicked');

                const obj = await new NewModelDexie().get("DocId113");
                console.log(obj)
            },
        },
        {
            name: '4',
            onClick: async () => {
                console.log('Button 4 was clicked');

                await new NewModelDexie().delete("DocId113");

                const objs = await new NewModelDexie().getAll();
                console.log(objs)
            },
        },
        {
            name: '5',
            onClick: async () => {
                console.log('Button 5 was clicked');

                await new NewModelDexie().resetTable();
            },
        },
        {
            name: '6',
            onClick: async () => {
                console.log('Button 6 was clicked');

                const obj = await new NewModelDexie().getByI000(1004);
                console.log(obj)
            },
        },
        {
            name: '7',
            onClick: async () => {
                console.log('Button 7 was clicked');
            },
        },
        {
            name: '8',
            onClick: async () => {
                console.log('Button 8 was clicked');
            },
        },
        {
            name: '9',
            onClick: async () => {
                console.log('Button 9 was clicked');
            },
        },
        {
            name: '10',
            onClick: async () => {
                console.log('Button 10 was clicked');
            },
        },
        {
            name: '11',
            onClick: async () => {
                console.log('Button 11 was clicked');
            },
        },
        {
            name: '12',
            onClick: async () => {
                console.log('Button 12 was clicked');
            },
        },
        {
            name: '13',
            onClick: async () => {
                console.log('Button 13 was clicked');
            },
        },
        {
            name: '14',
            onClick: async () => {
                console.log('Button 14 was clicked');
            },
        },
        {
            name: '15',
            onClick: async () => {
                console.log('Button 15 was clicked');
            },
        },
        {
            name: '16',
            onClick: async () => {
                console.log('Button 16 was clicked');
            },
        },
        {
            name: '17',
            onClick: async () => {
                console.log('Button 17 was clicked');
            },
        },
        {
            name: '18',
            onClick: async () => {
                console.log('Button 18 was clicked');
            },
        },
        {
            name: '19',
            onClick: async () => {
                console.log('Button 19 was clicked');
            },
        },
        {
            name: '20',
            onClick: async () => {
                console.log('Button 20 was clicked');
            },
        },
        {
            name: '21',
            onClick: async () => {
                console.log('Button 21 was clicked');
            },
        },
        {
            name: '22',
            onClick: async () => {
                console.log('Button 22 was clicked');
            },
        },
        {
            name: '23',
            onClick: async () => {
                console.log('Button 23 was clicked');
            },
        },
        {
            name: '24',
            onClick: async () => {
                console.log('Button 24 was clicked');
            },
        },
        {
            name: '25',
            onClick: async () => {
                console.log('Button 25 was clicked');
            },
        },
        {
            name: '26',
            onClick: async () => {
                console.log('Button 26 was clicked');
            },
        },
        {
            name: '27',
            onClick: async () => {
                console.log('Button 27 was clicked');
            },
        },
        {
            name: '28',
            onClick: async () => {
                console.log('Button 28 was clicked');
            },
        },
        {
            name: '29',
            onClick: async () => {
                console.log('Button 29 was clicked');
            },
        },
        {
            name: '30',
            onClick: async () => {
                console.log('Button 30 was clicked');
            },
        },
        {
            name: '31',
            onClick: async () => {
                console.log('Button 31 was clicked');
            },
        },
        {
            name: '32',
            onClick: async () => {
                console.log('Button 32 was clicked');
            },
        },
        {
            name: '33',
            onClick: async () => {
                console.log('Button 33 was clicked');
            },
        },
        {
            name: '34',
            onClick: async () => {
                console.log('Button 34 was clicked');
            },
        },
        {
            name: '35',
            onClick: async () => {
                console.log('Button 35 was clicked');
            },
        },
        {
            name: '36',
            onClick: async () => {
                console.log('Button 36 was clicked');
            },
        },
        {
            name: '37',
            onClick: async () => {
                console.log('Button 37 was clicked');
            },
        },
        {
            name: '38',
            onClick: async () => {
                console.log('Button 38 was clicked');
            },
        },
        {
            name: '39',
            onClick: async () => {
                console.log('Button 39 was clicked');
            },
        },
        {
            name: '40',
            onClick: async () => {
                console.log('Button 40 was clicked');
            },
        },
        {
            name: '41',
            onClick: async () => {
                console.log('Button 41 was clicked');
            },
        },
        {
            name: '42',
            onClick: async () => {
                console.log('Button 42 was clicked');
            },
        },
        {
            name: '43',
            onClick: async () => {
                console.log('Button 43 was clicked');
            },
        },
        {
            name: '44',
            onClick: async () => {
                console.log('Button 44 was clicked');
            },
        },
        {
            name: '45',
            onClick: async () => {
                console.log('Button 45 was clicked');
            },
        },
        {
            name: '46',
            onClick: async () => {
                console.log('Button 46 was clicked');
            },
        },
        {
            name: '47',
            onClick: async () => {
                console.log('Button 47 was clicked');
            },
        },
        {
            name: '48',
            onClick: async () => {
                console.log('Button 48 was clicked');
            },
        },
        {
            name: '49',
            onClick: async () => {
                console.log('Button 49 was clicked');
            },
        },
        {
            name: '50',
            onClick: async () => {
                console.log('Button 50 was clicked');
            },
        },
        {
            name: '51',
            onClick: async () => {
                console.log('Button 51 was clicked');
            },
        },
        {
            name: '52',
            onClick: async () => {
                console.log('Button 52 was clicked');
            },
        },
        {
            name: '53',
            onClick: async () => {
                console.log('Button 53 was clicked');
            },
        },
        {
            name: '54',
            onClick: async () => {
                console.log('Button 54 was clicked');
            },
        },
        {
            name: '55',
            onClick: async () => {
                console.log('Button 55 was clicked');
            },
        },
        {
            name: '56',
            onClick: async () => {
                console.log('Button 56 was clicked');
            },
        },
        {
            name: '57',
            onClick: async () => {
                console.log('Button 57 was clicked');
            },
        },
        {
            name: '58',
            onClick: async () => {
                console.log('Button 58 was clicked');
            },
        },
        {
            name: '59',
            onClick: async () => {
                console.log('Button 59 was clicked');
            },
        },
        {
            name: '60',
            onClick: async () => {
                console.log('Button 60 was clicked');
            },
        },
        {
            name: '61',
            onClick: async () => {
                console.log('Button 61 was clicked');
            },
        },
        {
            name: '62',
            onClick: async () => {
                console.log('Button 62 was clicked');
            },
        },
        {
            name: '63',
            onClick: async () => {
                console.log('Button 63 was clicked');
            },
        },
        {
            name: '64',
            onClick: async () => {
                console.log('Button 64 was clicked');
            },
        },
        {
            name: '65',
            onClick: async () => {
                console.log('Button 65 was clicked');
            },
        },
        {
            name: '66',
            onClick: async () => {
                console.log('Button 66 was clicked');
            },
        },
        {
            name: '67',
            onClick: async () => {
                console.log('Button 67 was clicked');
            },
        },
        {
            name: '68',
            onClick: async () => {
                console.log('Button 68 was clicked');
            },
        },
        {
            name: '69',
            onClick: async () => {
                console.log('Button 69 was clicked');
            },
        },
        {
            name: '70',
            onClick: async () => {
                console.log('Button 70 was clicked');
            },
        },
        {
            name: '71',
            onClick: async () => {
                console.log('Button 71 was clicked');
            },
        },
        {
            name: '72',
            onClick: async () => {
                console.log('Button 72 was clicked');
            },
        },
        {
            name: '73',
            onClick: async () => {
                console.log('Button 73 was clicked');
            },
        },
        {
            name: '74',
            onClick: async () => {
                console.log('Button 74 was clicked');
            },
        },
        {
            name: '75',
            onClick: async () => {
                console.log('Button 75 was clicked');
            },
        },
        {
            name: '76',
            onClick: async () => {
                console.log('Button 76 was clicked');
            },
        },
        {
            name: '77',
            onClick: async () => {
                console.log('Button 77 was clicked');
            },
        },
        {
            name: '78',
            onClick: async () => {
                console.log('Button 78 was clicked');
            },
        },
        {
            name: '79',
            onClick: async () => {
                console.log('Button 79 was clicked');
            },
        },
        {
            name: '80',
            onClick: async () => {
                console.log('Button 80 was clicked');
            },
        },
        {
            name: '81',
            onClick: async () => {
                console.log('Button 81 was clicked');
            },
        },
        {
            name: '82',
            onClick: async () => {
                console.log('Button 82 was clicked');
            },
        },
        {
            name: '83',
            onClick: async () => {
                console.log('Button 83 was clicked');
            },
        },
        {
            name: '84',
            onClick: async () => {
                console.log('Button 84 was clicked');
            },
        },
        {
            name: '85',
            onClick: async () => {
                console.log('Button 85 was clicked');
            },
        },
        {
            name: '86',
            onClick: async () => {
                console.log('Button 86 was clicked');
            },
        },
        {
            name: '87',
            onClick: async () => {
                console.log('Button 87 was clicked');
            },
        },
        {
            name: '88',
            onClick: async () => {
                console.log('Button 88 was clicked');
            },
        },
        {
            name: '89',
            onClick: async () => {
                console.log('Button 89 was clicked');
            },
        },
        {
            name: '90',
            onClick: async () => {
                console.log('Button 90 was clicked');
            },
        },
        {
            name: '91',
            onClick: async () => {
                console.log('Button 91 was clicked');
            },
        }
        ,
        {
            name: '92',
            onClick: async () => {
                console.log('Button 92 was clicked');
            },
        },
        {
            name: '93',
            onClick: async () => {
                console.log('Button 93 was clicked');
            },
        },
        {
            name: '94',
            onClick: async () => {
                console.log('Button 94 was clicked');
            },
        },
        {
            name: '95',
            onClick: async () => {
                console.log('Button 95 was clicked');
            },
        },
        {
            name: '96',
            onClick: async () => {
                console.log('Button 96 was clicked');
            },
        },
        {
            name: '97',
            onClick: async () => {
                console.log('Button 97 was clicked');
            },
        },
        {
            name: '98',
            onClick: async () => {
                console.log('Button 98 was clicked');
            },
        },
        {
            name: '99',
            onClick: async () => {
                console.log('Button 99 was clicked');
            },
        }
    ];
</script>

<button
        class="w-1/4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 overflow-hidden whitespace-nowrap text-sm"
        on:click={() => {window.history.back();}}
        style="text-overflow: ellipsis;"
>
    뒤로가기
</button>


<div class="grid grid-cols-3 gap-1 p-1">
    {#each buttons as {name, onClick}}
        <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-1  rounded-lg overflow-hidden whitespace-nowrap text-xs"
                on:click={onClick}
                style="text-overflow: ellipsis;"
        >
            {name}
        </button>
    {/each}
</div>