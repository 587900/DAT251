import Rectangle from '../../exams/rectangle'

describe('Rectangle', () => {
    it('should calculate the area correctly', () => {
        const rectangle = new Rectangle(5, 4)

        const area = rectangle.calculateArea()

        expect(area).toBe(20)
    })

    it('should calculate the perimeter correctly', () => {
        const rectangle = new Rectangle(5, 4)

        const perimeter = rectangle.calculatePerimeter()

        expect(perimeter).toBe(18)
    })

    it('should throw an error for negative dimensions', () => {
        expect(() => new Rectangle(-5, 0)).toThrow(
            'Length must be a non-negative number.'
        )
        expect(() => new Rectangle(0, -4)).toThrow(
            'Width must be a non-negative number.'
        )
    })
})
