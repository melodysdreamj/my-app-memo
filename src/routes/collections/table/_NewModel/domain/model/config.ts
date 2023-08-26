

export class NewModelConfig {
    generateDocId() {
        // random string 10
        return Math.random().toString(36).substr(2, 6);
        // return `${Date.now()}`;
        // return 'sample';
    }



}
