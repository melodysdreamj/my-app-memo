import Dexie from 'dexie';
import {NewModel} from "../../../domain/model/model";


export class NewModelDexie {
    private db: Dexie;

    constructor() {
        this.db = new Dexie('NewModel');
        this.db.version(1).stores({
            NewModel:
                `DocId`
                + `,I000`
            // + `,I001`
            // + `,I002`
            // + `,I003`
            // + `,I004`
            // + `,I005`
            // + `,I006`
            // + `,I007`
            // + `,I008`
            // + `,I009`
            // + `,I010`
            // + `,I011`
            // + `,I012`
            // + `,I013`
            // + `,I014`
            // + `,I015`
            // + `,I016`
            // + `,I017`
            // + `,I018`
            // + `,I019`
            // + `,I020`
            // + `,I021`
            // + `,I022`
            // + `,I023`
            // + `,I024`
            // + `,I025`
            // + `,I026`
            // + `,I027`
            // + `,I028`
            // + `,I029`
            // + `,I030`
            // + `,I031`
            // + `,I032`
            // + `,I033`
            // + `,I034`
            // + `,I035`
            // + `,I036`
            // + `,I037`
            // + `,I038`
            // + `,I039`
            // + `,I040`
            // + `,I041`
            // + `,I042`
            // + `,I043`
            // + `,I044`
            // + `,I045`
            // + `,I046`
            // + `,I047`
            // + `,I048`
            // + `,I049`
            // + `,I050`
            // + `,I051`
            // + `,I052`
            // + `,I053`
            // + `,I054`
            // + `,I055`
            // + `,I056`
            // + `,I057`
            // + `,I058`
            // + `,I059`
            // + `,I060`
            // + `,I061`
            // + `,I062`
            // + `,I063`
            // + `,I064`
            // + `,I065`
            // + `,I066`
            // + `,I067`
            // + `,I068`
            // + `,I069`
            // + `,I070`
            // + `,I071`
            // + `,I072`
            // + `,I073`
            // + `,I074`
            // + `,I075`
            // + `,I076`
            // + `,I077`
            // + `,I078`
            // + `,I079`
            // + `,I080`
            // + `,I081`
            // + `,I082`
            // + `,I083`
            // + `,I084`
            // + `,I085`
            // + `,I086`
            // + `,I087`
            // + `,I088`
            // + `,I089`
            // + `,I090`
            // + `,I091`
            // + `,I092`
            // + `,I093`
            // + `,I094`
            // + `,I095`
            // + `,I096`
            // + `,I097`
            // + `,I098`
            // + `,I099`
            // + `,S000`
            // + `,S001`
            // + `,S002`
            // + `,S003`
            // + `,S004`
            // + `,S005`
            // + `,S006`
            // + `,S007`
            // + `,S008`
            // + `,S009`
            // + `,S010`
            // + `,S011`
            // + `,S012`
            // + `,S013`
            // + `,S014`
            // + `,S015`
            // + `,S016`
            // + `,S017`
            // + `,S018`
            // + `,S019`
            // + `,S020`
            // + `,S021`
            // + `,S022`
            // + `,S023`
            // + `,S024`
            // + `,S025`
            // + `,S026`
            // + `,S027`
            // + `,S028`
            // + `,S029`
            // + `,S030`
            // + `,S031`
            // + `,S032`
            // + `,S033`
            // + `,S034`
            // + `,S035`
            // + `,S036`
            // + `,S037`
            // + `,S038`
            // + `,S039`
            // + `,S040`
            // + `,S041`
            // + `,S042`
            // + `,S043`
            // + `,S044`
            // + `,S045`
            // + `,S046`
            // + `,S047`
            // + `,S048`
            // + `,S049`
            // + `,S050`
            // + `,S051`
            // + `,S052`
            // + `,S053`
            // + `,S054`
            // + `,S055`
            // + `,S056`
            // + `,S057`
            // + `,S058`
            // + `,S059`
            // + `,S060`
            // + `,S061`
            // + `,S062`
            // + `,S063`
            // + `,S064`
            // + `,S065`
            // + `,S066`
            // + `,S067`
            // + `,S068`
            // + `,S069`
            // + `,S070`
            // + `,S071`
            // + `,S072`
            // + `,S073`
            // + `,S074`
            // + `,S075`
            // + `,S076`
            // + `,S077`
            // + `,S078`
            // + `,S079`
            // + `,S080`
            // + `,S081`
            // + `,S082`
            // + `,S083`
            // + `,S084`
            // + `,S085`
            // + `,S086`
            // + `,S087`
            // + `,S088`
            // + `,S089`
            // + `,S090`
            // + `,S091`
            // + `,S092`
            // + `,S093`
            // + `,S094`
            // + `,S095`
            // + `,S096`
            // + `,S097`
            // + `,S098`
            // + `,S099`
            // + `,B000`
            // + `,B001`
            // + `,B002`
            // + `,B003`
            // + `,B004`
            // + `,B005`
            // + `,B006`
            // + `,B007`
            // + `,B008`
            // + `,B009`
            // + `,B010`
            // + `,B011`
            // + `,B012`
            // + `,B013`
            // + `,B014`
            // + `,B015`
            // + `,B016`
            // + `,B017`
            // + `,B018`
            // + `,B019`
            // + `,B020`
            // + `,B021`
            // + `,B022`
            // + `,B023`
            // + `,B024`
            // + `,B025`
            // + `,B026`
            // + `,B027`
            // + `,B028`
            // + `,B029`
            // + `,B030`
            // + `,JA000`
            // + `,JA001`
            // + `,JA002`
            // + `,JA003`
            // + `,JA004`
            // + `,JA005`
            // + `,JA006`
            // + `,JA007`
            // + `,JA008`
            // + `,JA009`
            // + `,JA010`
            // + `,JA011`
            // + `,JA012`
            // + `,JA013`
            // + `,JA014`
            // + `,JA015`
            // + `,JA016`
            // + `,JA017`
            // + `,JA018`
            // + `,JA019`
            // + `,JA020`
        });
    }

    async insert(object: NewModel) {
        const json = object.toJSON();
        await this.db.table('NewModel').add(json);
    }

    async insertBulk(objects: NewModel[]) {
        await this.db.transaction('rw', this.db.table('NewModel'), async () => {
            for (const object of objects) {
                await this.insert(object);
            }
        });
    }

    async update(object: NewModel) {
        const json = object.toJSON();
        await this.db.table('NewModel').update(object.DocId, object.toJSON());
    }

    async upsert(object: NewModel) {
        const existingObject = await this.get(object.DocId);
        if (existingObject === null) {
            await this.insert(object);
        } else {
            await this.update(object);
        }
    }

    async delete(docId: string) {
        await this.db.table('NewModel').delete(docId);
    }

    async get(docId: string): Promise<NewModel | null> {
        const row = await this.db.table('NewModel').get(docId);
        return row ? NewModel.fromJSON(row) : null;
    }

    async getAll(): Promise<NewModel[]> {
        const rows = await this.db.table('NewModel').toArray();
        return rows.map(row => NewModel.fromJSON(row));
    }

    async getByI000(value: number): Promise<NewModel | null> {
        const row = await this.db.table('NewModel').where('I000').equals(value).first();
        return row ? NewModel.fromJSON(row) : null;
    }

    async resetTable() {
        await this.db.table('NewModel').clear();
    }
}
