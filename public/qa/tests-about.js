suite('Тесты страницы "About"', function() {
    test('Cтраница должна содержать ссылку на страницу контактов', function() {
        assert($('a[href="/contact"]').length);
    });
});