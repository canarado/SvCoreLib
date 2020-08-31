class Vector3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this._raw = [this.x, this.y, this.z];
    }

    negate() {
        return new Vector3(
            ...this._raw.map(point => -point)
        );
    }

    static RandomizedVector(multiplier=1, min=0, max=min+1) {
        return new Vector3(
            ...(new Array(3)).map(point => {
                point = (min + Math.random() * (max - min)) * multiplier;
            })
        )
    }

    add(vector) {
        return new Vector3(
            ...this._raw.map((point, index) => {
                point + vector._raw[index];
            })
        )
    }

    subtract(vector) {
        return new Vector3(
            ...this._raw.map((point, index) => {
                point - vector._raw[index];
            })
        )
    }

    multiply(amount) {
        return new Vector3(
            ...this._raw.map(point => point * amount)
        )
    }

    divide(amount) {
        return new Vector3(
            ...this._raw.map(point => point / amount)
        )
    }

    combineWithVector(vector) {
        this.x += vector.x;
        this.y += vector.y;
        this.z += vector.z;

        this._setRaw();

        return this;
    }

    subtractVector(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        this.z -= vector.z;

        this._setRaw();

        return this;
    }

    scalarMultiply(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;

        this._setRaw();

        return this;
    }

    scalarDivide(scalar) {
        this.x /= scalar;
        this.y /= scalar;
        this.z /= scalar;

        this._setRaw();

        return this;
    }

    static dotProduct(vector1, vector2) {
        return (vector1.x * vector2.x) + (vector1.y * vector2.y) + (vector1.z * vector2.z);
    }

    length() {
        return Math.sqrt(this.squaredLength());
    }

    squaredLength() {
        return Vector3.dotProduct(this, this);
    }
    

    _setRaw() {
        this._raw = [this.x, this.y, this.z];
    }
}

module.exports = Vector3;