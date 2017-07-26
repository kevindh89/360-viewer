TextObject = class TextObject {
    constructor(doc) {
        _.extend(this, doc);
    }

    getFontFamily() {
        return this.font && this.font.family ? this.font.family : 'exo2bold';
    }

    getFontColor() {
        return this.font && this.font.color ? this.font.color : 'white';
    }

    getFontSize() {
        return this.font && this.font.size ? this.font.size : 15;
    }

    getTextScale() {
        return `${this.getFontSize()} ${this.getFontSize()} ${this.getFontSize()}`;
    }

    getBackgroundWidth() {
        return this.background && this.background.width ? this.background.width : 15;
    }

    getBackgroundHeight() {
        return this.background && this.background.height ? this.background.height : 5;
    }

    getBackgroundColor() {
        return this.background && this.background.color ? this.background.color : undefined;
    }

    getBackgroundOpacity() {
        if (this.background && this.background.opacity) {
            return this.background.opacity;
        }

        return this.background && this.background.color ? 1 : 0;
    }
};
