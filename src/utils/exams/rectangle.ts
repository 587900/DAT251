class Rectangle {
    private length: number;
    private width: number;

    constructor(length: number, width: number) {
        if (length < 0) throw new Error('Length must be a non-negative number.')
        if (width < 0) throw new Error('Width must be a non-negative number.')

        this.length = length
        this.width = width
    }

    calculateArea(): number {
        return this.length * this.width;
    }

    calculatePerimeter(): number {
        return this.length + this.length + this.width + this.width
    }
}

export default Rectangle
