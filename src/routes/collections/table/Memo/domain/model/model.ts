import {MemoConfig} from "./config";
// import log from "loglevel";



export class Memo {
    constructor() {
        this.DocId = new MemoConfig().generateDocId();
    }


    UpdateMillis: number = 0;
    // I001: number = 0;
    // I002: number = 0;
    // I003: number = 0;
    // I004: number = 0;
    // I005: number = 0;
    // I006: number = 0;
    // I007: number = 0;
    // I008: number = 0;
    // I009: number = 0;
    // I010: number = 0;
    // I011: number = 0;
    // I012: number = 0;
    // I013: number = 0;
    // I014: number = 0;
    // I015: number = 0;
    // I016: number = 0;
    // I017: number = 0;
    // I018: number = 0;
    // I019: number = 0;
    // I020: number = 0;
    // I021: number = 0;
    // I022: number = 0;
    // I023: number = 0;
    // I024: number = 0;
    // I025: number = 0;
    // I026: number = 0;
    // I027: number = 0;
    // I028: number = 0;
    // I029: number = 0;
    // I030: number = 0;
    // I031: number = 0;
    // I032: number = 0;
    // I033: number = 0;
    // I034: number = 0;
    // I035: number = 0;
    // I036: number = 0;
    // I037: number = 0;
    // I038: number = 0;
    // I039: number = 0;
    // I040: number = 0;
    // I041: number = 0;
    // I042: number = 0;
    // I043: number = 0;
    // I044: number = 0;
    // I045: number = 0;
    // I046: number = 0;
    // I047: number = 0;
    // I048: number = 0;
    // I049: number = 0;
    // I050: number = 0;
    // I051: number = 0;
    // I052: number = 0;
    // I053: number = 0;
    // I054: number = 0;
    // I055: number = 0;
    // I056: number = 0;
    // I057: number = 0;
    // I058: number = 0;
    // I059: number = 0;
    // I060: number = 0;
    // I061: number = 0;
    // I062: number = 0;
    // I063: number = 0;
    // I064: number = 0;
    // I065: number = 0;
    // I066: number = 0;
    // I067: number = 0;
    // I068: number = 0;
    // I069: number = 0;
    // I070: number = 0;
    // I071: number = 0;
    // I072: number = 0;
    // I073: number = 0;
    // I074: number = 0;
    // I075: number = 0;
    // I076: number = 0;
    // I077: number = 0;
    // I078: number = 0;
    // I079: number = 0;
    // I080: number = 0;
    // I081: number = 0;
    // I082: number = 0;
    // I083: number = 0;
    // I084: number = 0;
    // I085: number = 0;
    // I086: number = 0;
    // I087: number = 0;
    // I088: number = 0;
    // I089: number = 0;
    // I090: number = 0;
    // I091: number = 0;
    // I092: number = 0;
    // I093: number = 0;
    // I094: number = 0;
    // I095: number = 0;
    // I096: number = 0;
    // I097: number = 0;
    // I098: number = 0;
    // I099: number = 0;
    //
    //
    Title: string = '';
    Contents: string = '';
    // S002: string = '';
    // S003: string = '';
    // S004: string = '';
    // S005: string = '';
    // S006: string = '';
    // S007: string = '';
    // S008: string = '';
    // S009: string = '';
    // S010: string = '';
    // S011: string = '';
    // S012: string = '';
    // S013: string = '';
    // S014: string = '';
    // S015: string = '';
    // S016: string = '';
    // S017: string = '';
    // S018: string = '';
    // S019: string = '';
    // S020: string = '';
    // S021: string = '';
    // S022: string = '';
    // S023: string = '';
    // S024: string = '';
    // S025: string = '';
    // S026: string = '';
    // S027: string = '';
    // S028: string = '';
    // S029: string = '';
    // S030: string = '';
    // S031: string = '';
    // S032: string = '';
    // S033: string = '';
    // S034: string = '';
    // S035: string = '';
    // S036: string = '';
    // S037: string = '';
    // S038: string = '';
    // S039: string = '';
    // S040: string = '';
    // S041: string = '';
    // S042: string = '';
    // S043: string = '';
    // S044: string = '';
    // S045: string = '';
    // S046: string = '';
    // S047: string = '';
    // S048: string = '';
    // S049: string = '';
    // S050: string = '';
    // S051: string = '';
    // S052: string = '';
    // S053: string = '';
    // S054: string = '';
    // S055: string = '';
    // S056: string = '';
    // S057: string = '';
    // S058: string = '';
    // S059: string = '';
    // S060: string = '';
    // S061: string = '';
    // S062: string = '';
    // S063: string = '';
    // S064: string = '';
    // S065: string = '';
    // S066: string = '';
    // S067: string = '';
    // S068: string = '';
    // S069: string = '';
    // S070: string = '';
    // S071: string = '';
    // S072: string = '';
    // S073: string = '';
    // S074: string = '';
    // S075: string = '';
    // S076: string = '';
    // S077: string = '';
    // S078: string = '';
    // S079: string = '';
    // S080: string = '';
    // S081: string = '';
    // S082: string = '';
    // S083: string = '';
    // S084: string = '';
    // S085: string = '';
    // S086: string = '';
    // S087: string = '';
    // S088: string = '';
    // S089: string = '';
    // S090: string = '';
    // S091: string = '';
    // S092: string = '';
    // S093: string = '';
    // S094: string = '';
    // S095: string = '';
    // S096: string = '';
    // S097: string = '';
    // S098: string = '';
    // S099: string = '';
    //
    // B000: boolean = false;
    // B001: boolean = false;
    // B002: boolean = false;
    // B003: boolean = false;
    // B004: boolean = false;
    // B005: boolean = false;
    // B006: boolean = false;
    // B007: boolean = false;
    // B008: boolean = false;
    // B009: boolean = false;
    // B010: boolean = false;
    // B011: boolean = false;
    // B012: boolean = false;
    // B013: boolean = false;
    // B014: boolean = false;
    // B015: boolean = false;
    // B016: boolean = false;
    // B017: boolean = false;
    // B018: boolean = false;
    // B019: boolean = false;
    // B020: boolean = false;
    // B021: boolean = false;
    // B022: boolean = false;
    // B023: boolean = false;
    // B024: boolean = false;
    // B025: boolean = false;
    // B026: boolean = false;
    // B027: boolean = false;
    // B028: boolean = false;
    // B029: boolean = false;
    // B030: boolean = false;


    // JA000 : NewSubModel[] = [];
    // JA001 : NewSubModel[] = [];
    // JA002 : NewSubModel[] = [];
    // JA003 : NewSubModel[] = [];
    // JA004 : NewSubModel[] = [];
    // JA005 : NewSubModel[] = [];
    // JA006 : NewSubModel[] = [];
    // JA007 : NewSubModel[] = [];
    // JA008 : NewSubModel[] = [];
    // JA009 : NewSubModel[] = [];
    // JA010 : NewSubModel[] = [];
    // JA011 : NewSubModel[] = [];
    // JA012 : NewSubModel[] = [];
    // JA013 : NewSubModel[] = [];
    // JA014 : NewSubModel[] = [];
    // JA015 : NewSubModel[] = [];
    // JA016 : NewSubModel[] = [];
    // JA017 : NewSubModel[] = [];
    // JA018 : NewSubModel[] = [];
    // JA019 : NewSubModel[] = [];
    // JA020 : NewSubModel[] = [];


    DocId: string = '';


    // Serialization
    toJSON() {
        return  {
            DocId: this.DocId,

            UpdateMillis: this.UpdateMillis,
            // I001: this.I001,
            // I002: this.I002,
            // I003: this.I003,
            // I004: this.I004,
            // I005: this.I005,
            // I006: this.I006,
            // I007: this.I007,
            // I008: this.I008,
            // I009: this.I009,
            // I010: this.I010,
            // I011: this.I011,
            // I012: this.I012,
            // I013: this.I013,
            // I014: this.I014,
            // I015: this.I015,
            // I016: this.I016,
            // I017: this.I017,
            // I018: this.I018,
            // I019: this.I019,
            // I020: this.I020,
            // I021: this.I021,
            // I022: this.I022,
            // I023: this.I023,
            // I024: this.I024,
            // I025: this.I025,
            // I026: this.I026,
            // I027: this.I027,
            // I028: this.I028,
            // I029: this.I029,
            // I030: this.I030,
            // I031: this.I031,
            // I032: this.I032,
            // I033: this.I033,
            // I034: this.I034,
            // I035: this.I035,
            // I036: this.I036,
            // I037: this.I037,
            // I038: this.I038,
            // I039: this.I039,
            // I040: this.I040,
            // I041: this.I041,
            // I042: this.I042,
            // I043: this.I043,
            // I044: this.I044,
            // I045: this.I045,
            // I046: this.I046,
            // I047: this.I047,
            // I048: this.I048,
            // I049: this.I049,
            // I050: this.I050,
            // I051: this.I051,
            // I052: this.I052,
            // I053: this.I053,
            // I054: this.I054,
            // I055: this.I055,
            // I056: this.I056,
            // I057: this.I057,
            // I058: this.I058,
            // I059: this.I059,
            // I060: this.I060,
            // I061: this.I061,
            // I062: this.I062,
            // I063: this.I063,
            // I064: this.I064,
            // I065: this.I065,
            // I066: this.I066,
            // I067: this.I067,
            // I068: this.I068,
            // I069: this.I069,
            // I070: this.I070,
            // I071: this.I071,
            // I072: this.I072,
            // I073: this.I073,
            // I074: this.I074,
            // I075: this.I075,
            // I076: this.I076,
            // I077: this.I077,
            // I078: this.I078,
            // I079: this.I079,
            // I080: this.I080,
            // I081: this.I081,
            // I082: this.I082,
            // I083: this.I083,
            // I084: this.I084,
            // I085: this.I085,
            // I086: this.I086,
            // I087: this.I087,
            // I088: this.I088,
            // I089: this.I089,
            // I090: this.I090,
            // I091: this.I091,
            // I092: this.I092,
            // I093: this.I093,
            // I094: this.I094,
            // I095: this.I095,
            // I096: this.I096,
            // I097: this.I097,
            // I098: this.I098,
            // I099: this.I099,
            Title: this.Title,
            Contents: this.Contents,
            // S002: this.S002,
            // S003: this.S003,
            // S004: this.S004,
            // S005: this.S005,
            // S006: this.S006,
            // S007: this.S007,
            // S008: this.S008,
            // S009: this.S009,
            // S010: this.S010,
            // S011: this.S011,
            // S012: this.S012,
            // S013: this.S013,
            // S014: this.S014,
            // S015: this.S015,
            // S016: this.S016,
            // S017: this.S017,
            // S018: this.S018,
            // S019: this.S019,
            // S020: this.S020,
            // S021: this.S021,
            // S022: this.S022,
            // S023: this.S023,
            // S024: this.S024,
            // S025: this.S025,
            // S026: this.S026,
            // S027: this.S027,
            // S028: this.S028,
            // S029: this.S029,
            // S030: this.S030,
            // S031: this.S031,
            // S032: this.S032,
            // S033: this.S033,
            // S034: this.S034,
            // S035: this.S035,
            // S036: this.S036,
            // S037: this.S037,
            // S038: this.S038,
            // S039: this.S039,
            // S040: this.S040,
            // S041: this.S041,
            // S042: this.S042,
            // S043: this.S043,
            // S044: this.S044,
            // S045: this.S045,
            // S046: this.S046,
            // S047: this.S047,
            // S048: this.S048,
            // S049: this.S049,
            // S050: this.S050,
            // S051: this.S051,
            // S052: this.S052,
            // S053: this.S053,
            // S054: this.S054,
            // S055: this.S055,
            // S056: this.S056,
            // S057: this.S057,
            // S058: this.S058,
            // S059: this.S059,
            // S060: this.S060,
            // S061: this.S061,
            // S062: this.S062,
            // S063: this.S063,
            // S064: this.S064,
            // S065: this.S065,
            // S066: this.S066,
            // S067: this.S067,
            // S068: this.S068,
            // S069: this.S069,
            // S070: this.S070,
            // S071: this.S071,
            // S072: this.S072,
            // S073: this.S073,
            // S074: this.S074,
            // S075: this.S075,
            // S076: this.S076,
            // S077: this.S077,
            // S078: this.S078,
            // S079: this.S079,
            // S080: this.S080,
            // S081: this.S081,
            // S082: this.S082,
            // S083: this.S083,
            // S084: this.S084,
            // S085: this.S085,
            // S086: this.S086,
            // S087: this.S087,
            // S088: this.S088,
            // S089: this.S089,
            // S090: this.S090,
            // S091: this.S091,
            // S092: this.S092,
            // S093: this.S093,
            // S094: this.S094,
            // S095: this.S095,
            // S096: this.S096,
            // S097: this.S097,
            // S098: this.S098,
            // S099: this.S099,
            // B000: this.B000 ? 1 : 0,
            // B001: this.B001 ? 1 : 0,
            // B002: this.B002 ? 1 : 0,
            // B003: this.B003 ? 1 : 0,
            // B004: this.B004 ? 1 : 0,
            // B005: this.B005 ? 1 : 0,
            // B006: this.B006 ? 1 : 0,
            // B007: this.B007 ? 1 : 0,
            // B008: this.B008 ? 1 : 0,
            // B009: this.B009 ? 1 : 0,
            // B010: this.B010 ? 1 : 0,
            // B011: this.B011 ? 1 : 0,
            // B012: this.B012 ? 1 : 0,
            // B013: this.B013 ? 1 : 0,
            // B014: this.B014 ? 1 : 0,
            // B015: this.B015 ? 1 : 0,
            // B016: this.B016 ? 1 : 0,
            // B017: this.B017 ? 1 : 0,
            // B018: this.B018 ? 1 : 0,
            // B019: this.B019 ? 1 : 0,
            // B020: this.B020 ? 1 : 0,
            // B021: this.B021 ? 1 : 0,
            // B022: this.B022 ? 1 : 0,
            // B023: this.B023 ? 1 : 0,
            // B024: this.B024 ? 1 : 0,
            // B025: this.B025 ? 1 : 0,
            // B026: this.B026 ? 1 : 0,
            // B027: this.B027 ? 1 : 0,
            // B028: this.B028 ? 1 : 0,
            // B029: this.B029 ? 1 : 0,
            // B030: this.B030 ? 1 : 0,

            // JA000: JSON.stringify(this.JA000.map(child => NewSubModel.toJSONString(child))),
            // JA001: JSON.stringify(this.JA001.map(child => NewSubModel.toJSONString(child))),
            // JA002: JSON.stringify(this.JA002.map(child => NewSubModel.toJSONString(child))),
            // JA003: JSON.stringify(this.JA003.map(child => NewSubModel.toJSONString(child))),
            // JA004: JSON.stringify(this.JA004.map(child => NewSubModel.toJSONString(child))),
            // JA005: JSON.stringify(this.JA005.map(child => NewSubModel.toJSONString(child))),
            // JA006: JSON.stringify(this.JA006.map(child => NewSubModel.toJSONString(child))),
            // JA007: JSON.stringify(this.JA007.map(child => NewSubModel.toJSONString(child))),
            // JA008: JSON.stringify(this.JA008.map(child => NewSubModel.toJSONString(child))),
            // JA009: JSON.stringify(this.JA009.map(child => NewSubModel.toJSONString(child))),
            // JA010: JSON.stringify(this.JA010.map(child => NewSubModel.toJSONString(child))),
            // JA011: JSON.stringify(this.JA011.map(child => NewSubModel.toJSONString(child))),
            // JA012: JSON.stringify(this.JA012.map(child => NewSubModel.toJSONString(child))),
            // JA013: JSON.stringify(this.JA013.map(child => NewSubModel.toJSONString(child))),
            // JA014: JSON.stringify(this.JA014.map(child => NewSubModel.toJSONString(child))),
            // JA015: JSON.stringify(this.JA015.map(child => NewSubModel.toJSONString(child))),
            // JA016: JSON.stringify(this.JA016.map(child => NewSubModel.toJSONString(child))),
            // JA017: JSON.stringify(this.JA017.map(child => NewSubModel.toJSONString(child))),
            // JA018: JSON.stringify(this.JA018.map(child => NewSubModel.toJSONString(child))),
            // JA019: JSON.stringify(this.JA019.map(child => NewSubModel.toJSONString(child))),
            // JA020: JSON.stringify(this.JA020.map(child => NewSubModel.toJSONString(child))),


        };
    }

    // Deserialization
    static fromJSON(json: any): Memo {

        const object = new Memo();

        object.DocId = json['DocId'];

        object.UpdateMillis = json['UpdateMillis'] ?? 0;
        // object.I001 = json['I001'] ?? 0;
        // object.I002 = json['I002'] ?? 0;
        // object.I003 = json['I003'] ?? 0;
        // object.I004 = json['I004'] ?? 0;
        // object.I005 = json['I005'] ?? 0;
        // object.I006 = json['I006'] ?? 0;
        // object.I007 = json['I007'] ?? 0;
        // object.I008 = json['I008'] ?? 0;
        // object.I009 = json['I009'] ?? 0;
        // object.I010 = json['I010'] ?? 0;
        // object.I011 = json['I011'] ?? 0;
        // object.I012 = json['I012'] ?? 0;
        // object.I013 = json['I013'] ?? 0;
        // object.I014 = json['I014'] ?? 0;
        // object.I015 = json['I015'] ?? 0;
        // object.I016 = json['I016'] ?? 0;
        // object.I017 = json['I017'] ?? 0;
        // object.I018 = json['I018'] ?? 0;
        // object.I019 = json['I019'] ?? 0;
        // object.I020 = json['I020'] ?? 0;
        // object.I021 = json['I021'] ?? 0;
        // object.I022 = json['I022'] ?? 0;
        // object.I023 = json['I023'] ?? 0;
        // object.I024 = json['I024'] ?? 0;
        // object.I025 = json['I025'] ?? 0;
        // object.I026 = json['I026'] ?? 0;
        // object.I027 = json['I027'] ?? 0;
        // object.I028 = json['I028'] ?? 0;
        // object.I029 = json['I029'] ?? 0;
        // object.I030 = json['I030'] ?? 0;
        // object.I031 = json['I031'] ?? 0;
        // object.I032 = json['I032'] ?? 0;
        // object.I033 = json['I033'] ?? 0;
        // object.I034 = json['I034'] ?? 0;
        // object.I035 = json['I035'] ?? 0;
        // object.I036 = json['I036'] ?? 0;
        // object.I037 = json['I037'] ?? 0;
        // object.I038 = json['I038'] ?? 0;
        // object.I039 = json['I039'] ?? 0;
        // object.I040 = json['I040'] ?? 0;
        // object.I041 = json['I041'] ?? 0;
        // object.I042 = json['I042'] ?? 0;
        // object.I043 = json['I043'] ?? 0;
        // object.I044 = json['I044'] ?? 0;
        // object.I045 = json['I045'] ?? 0;
        // object.I046 = json['I046'] ?? 0;
        // object.I047 = json['I047'] ?? 0;
        // object.I048 = json['I048'] ?? 0;
        // object.I049 = json['I049'] ?? 0;
        // object.I050 = json['I050'] ?? 0;
        // object.I051 = json['I051'] ?? 0;
        // object.I052 = json['I052'] ?? 0;
        // object.I053 = json['I053'] ?? 0;
        // object.I054 = json['I054'] ?? 0;
        // object.I055 = json['I055'] ?? 0;
        // object.I056 = json['I056'] ?? 0;
        // object.I057 = json['I057'] ?? 0;
        // object.I058 = json['I058'] ?? 0;
        // object.I059 = json['I059'] ?? 0;
        // object.I060 = json['I060'] ?? 0;
        // object.I061 = json['I061'] ?? 0;
        // object.I062 = json['I062'] ?? 0;
        // object.I063 = json['I063'] ?? 0;
        // object.I064 = json['I064'] ?? 0;
        // object.I065 = json['I065'] ?? 0;
        // object.I066 = json['I066'] ?? 0;
        // object.I067 = json['I067'] ?? 0;
        // object.I068 = json['I068'] ?? 0;
        // object.I069 = json['I069'] ?? 0;
        // object.I070 = json['I070'] ?? 0;
        // object.I071 = json['I071'] ?? 0;
        // object.I072 = json['I072'] ?? 0;
        // object.I073 = json['I073'] ?? 0;
        // object.I074 = json['I074'] ?? 0;
        // object.I075 = json['I075'] ?? 0;
        // object.I076 = json['I076'] ?? 0;
        // object.I077 = json['I077'] ?? 0;
        // object.I078 = json['I078'] ?? 0;
        // object.I079 = json['I079'] ?? 0;
        // object.I080 = json['I080'] ?? 0;
        // object.I081 = json['I081'] ?? 0;
        // object.I082 = json['I082'] ?? 0;
        // object.I083 = json['I083'] ?? 0;
        // object.I084 = json['I084'] ?? 0;
        // object.I085 = json['I085'] ?? 0;
        // object.I086 = json['I086'] ?? 0;
        // object.I087 = json['I087'] ?? 0;
        // object.I088 = json['I088'] ?? 0;
        // object.I089 = json['I089'] ?? 0;
        // object.I090 = json['I090'] ?? 0;
        // object.I091 = json['I091'] ?? 0;
        // object.I092 = json['I092'] ?? 0;
        // object.I093 = json['I093'] ?? 0;
        // object.I094 = json['I094'] ?? 0;
        // object.I095 = json['I095'] ?? 0;
        // object.I096 = json['I096'] ?? 0;
        // object.I097 = json['I097'] ?? 0;
        // object.I098 = json['I098'] ?? 0;
        // object.I099 = json['I099'] ?? 0;
        //
        object.Title = json['Title'] ?? '';
        object.Contents = json['Contents'] ?? '';
        // object.S002 = json['S002'] ?? '';
        // object.S003 = json['S003'] ?? '';
        // object.S004 = json['S004'] ?? '';
        // object.S005 = json['S005'] ?? '';
        // object.S006 = json['S006'] ?? '';
        // object.S007 = json['S007'] ?? '';
        // object.S008 = json['S008'] ?? '';
        // object.S009 = json['S009'] ?? '';
        // object.S010 = json['S010'] ?? '';
        // object.S011 = json['S011'] ?? '';
        // object.S012 = json['S012'] ?? '';
        // object.S013 = json['S013'] ?? '';
        // object.S014 = json['S014'] ?? '';
        // object.S015 = json['S015'] ?? '';
        // object.S016 = json['S016'] ?? '';
        // object.S017 = json['S017'] ?? '';
        // object.S018 = json['S018'] ?? '';
        // object.S019 = json['S019'] ?? '';
        // object.S020 = json['S020'] ?? '';
        // object.S021 = json['S021'] ?? '';
        // object.S022 = json['S022'] ?? '';
        // object.S023 = json['S023'] ?? '';
        // object.S024 = json['S024'] ?? '';
        // object.S025 = json['S025'] ?? '';
        // object.S026 = json['S026'] ?? '';
        // object.S027 = json['S027'] ?? '';
        // object.S028 = json['S028'] ?? '';
        // object.S029 = json['S029'] ?? '';
        // object.S030 = json['S030'] ?? '';
        // object.S031 = json['S031'] ?? '';
        // object.S032 = json['S032'] ?? '';
        // object.S033 = json['S033'] ?? '';
        // object.S034 = json['S034'] ?? '';
        // object.S035 = json['S035'] ?? '';
        // object.S036 = json['S036'] ?? '';
        // object.S037 = json['S037'] ?? '';
        // object.S038 = json['S038'] ?? '';
        // object.S039 = json['S039'] ?? '';
        // object.S040 = json['S040'] ?? '';
        // object.S041 = json['S041'] ?? '';
        // object.S042 = json['S042'] ?? '';
        // object.S043 = json['S043'] ?? '';
        // object.S044 = json['S044'] ?? '';
        // object.S045 = json['S045'] ?? '';
        // object.S046 = json['S046'] ?? '';
        // object.S047 = json['S047'] ?? '';
        // object.S048 = json['S048'] ?? '';
        // object.S049 = json['S049'] ?? '';
        // object.S050 = json['S050'] ?? '';
        // object.S051 = json['S051'] ?? '';
        // object.S052 = json['S052'] ?? '';
        // object.S053 = json['S053'] ?? '';
        // object.S054 = json['S054'] ?? '';
        // object.S055 = json['S055'] ?? '';
        // object.S056 = json['S056'] ?? '';
        // object.S057 = json['S057'] ?? '';
        // object.S058 = json['S058'] ?? '';
        // object.S059 = json['S059'] ?? '';
        // object.S060 = json['S060'] ?? '';
        // object.S061 = json['S061'] ?? '';
        // object.S062 = json['S062'] ?? '';
        // object.S063 = json['S063'] ?? '';
        // object.S064 = json['S064'] ?? '';
        // object.S065 = json['S065'] ?? '';
        // object.S066 = json['S066'] ?? '';
        // object.S067 = json['S067'] ?? '';
        // object.S068 = json['S068'] ?? '';
        // object.S069 = json['S069'] ?? '';
        // object.S070 = json['S070'] ?? '';
        // object.S071 = json['S071'] ?? '';
        // object.S072 = json['S072'] ?? '';
        // object.S073 = json['S073'] ?? '';
        // object.S074 = json['S074'] ?? '';
        // object.S075 = json['S075'] ?? '';
        // object.S076 = json['S076'] ?? '';
        // object.S077 = json['S077'] ?? '';
        // object.S078 = json['S078'] ?? '';
        // object.S079 = json['S079'] ?? '';
        // object.S080 = json['S080'] ?? '';
        // object.S081 = json['S081'] ?? '';
        // object.S082 = json['S082'] ?? '';
        // object.S083 = json['S083'] ?? '';
        // object.S084 = json['S084'] ?? '';
        // object.S085 = json['S085'] ?? '';
        // object.S086 = json['S086'] ?? '';
        // object.S087 = json['S087'] ?? '';
        // object.S088 = json['S088'] ?? '';
        // object.S089 = json['S089'] ?? '';
        // object.S090 = json['S090'] ?? '';
        // object.S091 = json['S091'] ?? '';
        // object.S092 = json['S092'] ?? '';
        // object.S093 = json['S093'] ?? '';
        // object.S094 = json['S094'] ?? '';
        // object.S095 = json['S095'] ?? '';
        // object.S096 = json['S096'] ?? '';
        // object.S097 = json['S097'] ?? '';
        // object.S098 = json['S098'] ?? '';
        // object.S099 = json['S099'] ?? '';
        //
        // object.B000 = json['B000'] ?? false;
        // object.B001 = json['B001'] ?? false;
        // object.B002 = json['B002'] ?? false;
        // object.B003 = json['B003'] ?? false;
        // object.B004 = json['B004'] ?? false;
        // object.B005 = json['B005'] ?? false;
        // object.B006 = json['B006'] ?? false;
        // object.B007 = json['B007'] ?? false;
        // object.B008 = json['B008'] ?? false;
        // object.B009 = json['B009'] ?? false;
        // object.B010 = json['B010'] ?? false;
        // object.B011 = json['B011'] ?? false;
        // object.B012 = json['B012'] ?? false;
        // object.B013 = json['B013'] ?? false;
        // object.B014 = json['B014'] ?? false;
        // object.B015 = json['B015'] ?? false;
        // object.B016 = json['B016'] ?? false;
        // object.B017 = json['B017'] ?? false;
        // object.B018 = json['B018'] ?? false;
        // object.B019 = json['B019'] ?? false;
        // object.B020 = json['B020'] ?? false;
        // object.B021 = json['B021'] ?? false;
        // object.B022 = json['B022'] ?? false;
        // object.B023 = json['B023'] ?? false;
        // object.B024 = json['B024'] ?? false;
        // object.B025 = json['B025'] ?? false;
        // object.B026 = json['B026'] ?? false;
        // object.B027 = json['B027'] ?? false;
        // object.B028 = json['B028'] ?? false;
        // object.B029 = json['B029'] ?? false;
        // object.B030 = json['B030'] ?? false;

        // object.JA000 = JSON.parse(json['JA000']).map(NewSubModel.fromJSONString)
        // object.JA001 = JSON.parse(json['JA001']).map(NewSubModel.fromJSONString)
        // object.JA002 = JSON.parse(json['JA002']).map(NewSubModel.fromJSONString)
        // object.JA003 = JSON.parse(json['JA003']).map(NewSubModel.fromJSONString)
        // object.JA004 = JSON.parse(json['JA004']).map(NewSubModel.fromJSONString)
        // object.JA005 = JSON.parse(json['JA005']).map(NewSubModel.fromJSONString)
        // object.JA006 = JSON.parse(json['JA006']).map(NewSubModel.fromJSONString)
        // object.JA007 = JSON.parse(json['JA007']).map(NewSubModel.fromJSONString)
        // object.JA008 = JSON.parse(json['JA008']).map(NewSubModel.fromJSONString)
        // object.JA009 = JSON.parse(json['JA009']).map(NewSubModel.fromJSONString)
        // object.JA010 = JSON.parse(json['JA010']).map(NewSubModel.fromJSONString)
        // object.JA011 = JSON.parse(json['JA011']).map(NewSubModel.fromJSONString)
        // object.JA012 = JSON.parse(json['JA012']).map(NewSubModel.fromJSONString)
        // object.JA013 = JSON.parse(json['JA013']).map(NewSubModel.fromJSONString)
        // object.JA014 = JSON.parse(json['JA014']).map(NewSubModel.fromJSONString)
        // object.JA015 = JSON.parse(json['JA015']).map(NewSubModel.fromJSONString)
        // object.JA016 = JSON.parse(json['JA016']).map(NewSubModel.fromJSONString)
        // object.JA017 = JSON.parse(json['JA017']).map(NewSubModel.fromJSONString)
        // object.JA018 = JSON.parse(json['JA018']).map(NewSubModel.fromJSONString)
        // object.JA019 = JSON.parse(json['JA019']).map(NewSubModel.fromJSONString)
        // object.JA020 = JSON.parse(json['JA020']).map(NewSubModel.fromJSONString)

        return object;
    }

    toJSONString() : string {
        return JSON.stringify(this.toJSON())
    }

    static fromJSONString(jsonString : string) : Memo {
        if(typeof jsonString === 'string'){
            return Memo.fromJSON(JSON.parse(jsonString));
        }else{
            return Memo.fromJSON(jsonString);
        }

    }


    //_Memo 배열 자체를 직렬화/역직렬화 해야할때, -> get_all 등을 할때 사용
    static toJSONArrayString(array : Memo[]) : string {
        return JSON.stringify(array.map(obj => obj.toJSON()));
    }

    static fromJSONArrayString(jsonString : any) : Memo[] {
        if(typeof jsonString === 'string'){
            return JSON.parse(jsonString).map(Memo.fromJSON);
        }else{
            return jsonString.map(Memo.fromJSON);
        }

    }
}
