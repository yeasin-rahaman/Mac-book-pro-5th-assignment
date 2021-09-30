// total output 
const totalPrice = document.getElementById('total-price');
const totalAmount = document.getElementById('total-amount');

// price Update function
function updateComponent(component, price) {
    const upgrade = document.getElementById(component + '-price');
    const upgradePrice = price;
    upgrade.innerText = upgradePrice;
    updateTotal();
};

//Update total function 
function updateTotal() {
    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const ExtraMemoryPrice = parseInt(document.getElementById('memory-price').innerText);
    const ExtraStoragePrice = parseInt(document.getElementById('storage-price').innerText);
    const deliveryCharge = parseInt(document.getElementById('delivery-price').innerText);
    const total = bestPrice + ExtraMemoryPrice + ExtraStoragePrice + deliveryCharge;
    totalPrice.innerText = total;
    totalAmount.innerText = total;
};

// event handler

//memory price
document.getElementById('memory-8gb').addEventListener('click', function () {
    updateComponent('memory', 0);
});
document.getElementById('memory-16gb').addEventListener('click', function () {
    updateComponent('memory', 180);
});
//storage price
document.getElementById('storage-256GB').addEventListener('click', function () {
    updateComponent('storage', 0)
});
document.getElementById('storage-512GB').addEventListener('click', function () {
    updateComponent('storage', 100)
});
document.getElementById('storage-1TB').addEventListener('click', function () {
    updateComponent('storage', 180)
});
//delivery price
document.getElementById('free-delivery').addEventListener('click', function () {
    updateComponent('delivery', 0)
});
document.getElementById('paid-delivery').addEventListener('click', function () {
    updateComponent('delivery', 20)
});

// promo input 
const givenPromo = document.getElementById('promo-input');

// promo code function 
function discountPromo(promoCode, discountPercentage) {
    document.getElementById('promo-submit').addEventListener('click', function () {
        document.getElementById('promo-submit').classList.add('disabled')
        if (givenPromo.value == promoCode) {
            const oldPrice = Number(totalAmount.innerText);
            const promoDiscount = (oldPrice / 100) * discountPercentage;
            const afterDiscount = oldPrice - promoDiscount;
            totalPrice.innerText = afterDiscount;
            totalAmount.innerText = afterDiscount;
            givenPromo.value = "";
        };

    });
};

// if you want to change promo code and percentage discount for future upgrade

// promo Code
const promoCode = "stevekaku";
// discount Percentage
const discountPercentage = parseInt(20);
// update to discount function
const discountUpdate = discountPromo(promoCode, discountPercentage);

