// to get current year
function getYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// owl carousel

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 6,
    },
  },
});

// JavaScript for quantity control and price calculation
document.addEventListener("DOMContentLoaded", function () {
    // تعريف المتغيرات مع قيم افتراضية
    let qtyInput = document.getElementById("quantity");
    let quantity = parseInt(qtyInput.value); // تخزين قيمة العدد
    let height = 20; // الارتفاع بالسم
    let width = 80; // العرض بالسم
    let length = 180; // الطول بالسم
    let hasMemoryFoam = false; // حالة وجود طبقة الميموري فوم
    const priceElement = document.querySelector(".product-price"); // العنصر الذي يحمل سعر المنتج

    const increaseButton = document.getElementById("increase");
    const decreaseButton = document.getElementById("decrease");
    const heightInput = document.getElementById("height"); // تأكد أن عندك عنصر input للارتفاع
    const widthInput = document.getElementById("width"); // تأكد أن عندك عنصر input للعرض
    const lengthInput = document.getElementById("length"); // تأكد أن عندك عنصر input للطول
    const memoryFoamCheckbox = document.getElementById("memory-foam"); // تأكد أن عندك checkbox للميموري فوم

    // دالة لطباعة المتغيرات في الكونسول
    function printVariables() {
        console.log(`Quantity: ${quantity}`);
        console.log(`Height: ${height}`);
        console.log(`Width: ${width}`);
        console.log(`Length: ${length}`);
        console.log(`Has Memory Foam: ${hasMemoryFoam}`);
    }

    // دالة لحساب السعر
    function calculatePrice() {
        let pricePerMeter;

        // تحديد سعر المتر بناءً على الارتفاع
        if (height === 20) {
            pricePerMeter = 3100;
        } else if (height === 25) {
            pricePerMeter = 3500;
        } else if (height === 30) {
            pricePerMeter = 4000;
        }

        // حساب السعر الإجمالي
        let totalPrice = (pricePerMeter * (width / 100)) * quantity; // ضرب سعر المتر في العرض بالامتار وفي العدد
        if (hasMemoryFoam) {
            totalPrice += totalPrice * 0.4; // إضافة 40% إذا كانت هناك طبقة ميموري فوم
        }

        // تحديث قيمة السعر في العنصر
        priceElement.textContent = `سعر المرتبة: ${totalPrice.toFixed(2)} جنيهاً`; // عرض السعر مع نقطتين عشريتين
    }

    // استجابة لزيادة العدد
    increaseButton.addEventListener("click", function () {
        quantity += 1; // زيادة العدد بمقدار 1
        qtyInput.value = quantity; // تحديث قيمة الحقل
        calculatePrice(); // حساب السعر
        printVariables(); // طباعة المتغيرات
    });
  
    // استجابة لتقليل العدد
    decreaseButton.addEventListener("click", function () {
        if (quantity > 1) { // التأكد أن العدد لا يقل عن 1
            quantity -= 1; // تقليل العدد بمقدار 1
            qtyInput.value = quantity; // تحديث قيمة الحقل
            calculatePrice(); // حساب السعر
            printVariables(); // طباعة المتغيرات
        }
    });

    // استجابة لتغيير الارتفاع
    heightInput.addEventListener("change", function () {
        height = parseInt(heightInput.value); // تحديث قيمة الارتفاع
        calculatePrice(); // حساب السعر
        printVariables(); // طباعة المتغيرات
    });

    // استجابة لتغيير العرض
    widthInput.addEventListener("change", function () {
        width = parseInt(widthInput.value); // تحديث قيمة العرض
        calculatePrice(); // حساب السعر
        printVariables(); // طباعة المتغيرات
    });

    // استجابة لتغيير الطول
    lengthInput.addEventListener("change", function () {
        length = parseInt(lengthInput.value); // تحديث قيمة الطول
        calculatePrice(); // حساب السعر
        printVariables(); // طباعة المتغيرات
    });

    // استجابة لتغيير حالة الميموري فوم
    memoryFoamCheckbox.addEventListener("change", function () {
        hasMemoryFoam = memoryFoamCheckbox.checked; // تحديث حالة الميموري فوم
        calculatePrice(); // حساب السعر
        printVariables(); // طباعة المتغيرات
    });

    // حساب السعر الابتدائي عند تحميل الصفحة
    calculatePrice();
});
