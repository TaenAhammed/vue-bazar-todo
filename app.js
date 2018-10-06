new Vue({
    el: "#app",
    data: {
        items: [
            { name: "Rice", price: 23.0 },
            { name: "Wheat", price: 23.5 },
            { name: "Oil", price: 25.0 }
        ],
        newItem: ""
    },
    methods: {
        addItem() {
            this.items.push({ name: this.newItem, price: 0.0 });
            this.newItem = "";
        },
        removeItem(index) {
            this.items.splice(index, 1);
        }
    },
    computed: {
        totalPrice() {
            return this.items.reduce(
                (sum, item) => sum + parseFloat(item.price),
                0
            );
        }
    }
});
