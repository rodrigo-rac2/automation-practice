var actions = {
    
}
var checks = {
    assertPageIsLoaded: function () {
        //TODO
    },
    assertProductAmount: function (number) {
        let text = 'Products'
        if (number === 1)
            text = 'Product'

        return this
            .assert.containsText('@divProductAmount', `${number} ${text}`)
    }
}

module.exports = {
    commands: [actions, checks],
    elements: {
        divProductAmount: '#summary_products_quantity'
    }
}