class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Triangle extends Shape {
    constructor(x1, y1, x2, y2, x3, y3, color) {
        super(color);
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
    }

    render() {
        return `<polygon points="${this.x1},${this.y1} ${this.x2},${this.y2} ${this.x3},${this.y3}" fill="${this.color}" />`;
    }
}

class Circle extends Shape {
    constructor(cx, cy, r, color) {
        super(color);
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }

    render() {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor(x, y, side, color) {
        super(color);
        this.x = x;
        this.y = y;
        this.side = side;
    }

    render() {
        return `<rect x="${this.x}" y="${this.y}" width="${this.side}" height="${this.side}" fill="${this.color}" />`;
    }
}

module.exports = {
    Triangle,
    Circle,
    Square
};
