describe("Binary Search", function() {

    it('Найден элемент 1', function() {
        assert.equal(binary_search(array, 1), 1);
    })
    it('Найден элемент 2', function() {
        assert.equal(binary_search(array, 2), 2);
    })
    it('Найден элемент 3', function() {
        assert.equal(binary_search(array, 3), 3);
    })
    it('Найден элемент 324', function() {
        assert.equal(binary_search(array, 324), 324);
    })
    it('Элемент 41 не найден', function() {
        assert.equal(binary_search(array, 41), -1);
    })
    it('Найден элемент 15', function() {
        assert.equal(binary_search(array, 15), 15);
    })
    it('Элемент 16 не найден', function() {
        assert.equal(binary_search(array, 16), -1);
    })

});
