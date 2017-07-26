TextObject = class TextObject {
    constructor(doc) {
        _.extend(this, doc);
    }

    getFontFamily() {
        return this.font && this.font.family ? this.font.family : 'exo2bold';
    }

    getFontSize() {
        return this.font && this.font.size ? `${this.font.size} ${this.font.size} ${this.font.size}` : '10 10 10';
    }

    getFontColor() {
        return this.font && this.font.color ? this.font.color : 'white';
    }
};
