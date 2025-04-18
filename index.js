const content=[
    {number:"01",title:"Order Online",description:"Share some details here. This is Flexible section where you can share anything you want."},
    {number:"02",title:"Free Shipping",description:"Share some details here. This is Flexible section where you can share anything you want."},
    {number:"03",title:"More Freshness",description:"Share some details here. This is Flexible section where you can share anything you want."},
    {number:"04",title:"Safe Payment",description:"Share some details here. This is Flexible section where you can share anything you want."}
];

var print=content.map(values => `<div class="col-lg-3">
    <div class="border border-danger border-top-0 border-end-0 border-bottom-0 my-lg-5 my-3 ms-3 ps-lg-4 ps-4" >
    <p>${values.number}</p>
    <h2>${values.title}</h2>
    <p style="font-size: 12px;">${values.description}</p></div>
</div>`).join('');

document.getElementById("samecontent").innerHTML=print;

const flowers=[
    {image:"FlowerShop/1.jpg",title:"Custom Floral Designs",original:"$127.00",offer:"$86.00"},
    {image:"FlowerShop/pexels-ti-u-b-o-tr-ng-41366219-7336342.jpg",title:"PeriWinkle Flower",original:"$239.00",offer:"$199.00"},
    {image:"FlowerShop/periwinkleflowerbouquet.jpg",title:"PeriWinkle Flower Bouquet",original:"$79.00",offer:"$56.00"},
    {image:"FlowerShop/pexels-secret-garden-333350-931176.jpg",title:"Rose Flower Bouquet",original:"$210.00",offer:"$199.00"},
    {image:"FlowerShop/pexels-julia-volk-5272964.jpg",title:"Tulip Custom Flower",original:"$159.00",offer:"$129.00"},
    {image:"FlowerShop/pexels-shivm96-31639896.jpg",title:"Tulip Flower",original:"$129.00",offer:"$99.00"},
]

var flowerrate=flowers.map(flowervalue =>`<div class="col-lg-4 col-6" style="position: relative;">
                <img src="${flowervalue.image}" class="img-fluid w-100"  alt="" style="height: 250px; object-fit: cover;">
                <div class="bad" style="position: absolute; top: 25px; left: 35px;">
                    <span class="badge rounded-pill text-bg-light p-2">Sale</span>
                </div>
                <div class="flowrate text-center pt-4">
                    <p class="text-secondary">Flower</p>
                    <h6>${flowervalue.title}</h6>
                    <i class="bi bi-star text-secondary"></i><i class="bi bi-star text-secondary"></i><i class="bi bi-star text-secondary"></i><i class="bi bi-star text-secondary"></i><i class="bi bi-star text-secondary"></i>
                    <div class="rate d-flex align-items-center justify-content-center">
                        <p class="text-secondary" style="text-decoration: line-through; font-weight: 700;">${flowervalue.original}</p>&nbsp;&nbsp;
                        <p class="text-secondary" style="font-weight: 700;">${flowervalue.offer}</p>
                    </div>
                </div>
            </div>`).join('');

document.getElementById("flowers").innerHTML=flowerrate;
document.getElementById("flowers2").innerHTML=flowerrate;

// const flowerContainer = document.getElementById("flowersshop");
//   if (flowerContainer) {
//     flowerContainer.innerHTML = flowerrate(); // or whatever your rendering logic is
//   }
// // document.getElementById("flowersshop").innerHTML=flowerrate;
// // console.log("flowershop");

const testimonial=[
    {image:"FlowerShop/testimonial-skip-01.jpg",feedback:"I've been a loyal customer of Florist for years, and they never cease to amaze me. The flowers are always fresh, the arrangements are stunning, and the service is top-notch.",name:"Steve Smith",role:"Wedding Planner"},
    {image:"FlowerShop/testimonial-skip-01-1.jpg",feedback:"I've been a loyal customer of Florist for years, and they never cease to amaze me. The flowers are always fresh, the arrangements are stunning, and the service is top-notch.",name:"Wade Warren",role:"Designer"},
    {image:"FlowerShop/testimonial-skip-02-1.jpg",feedback:"I've been a loyal customer of Florist for years, and they never cease to amaze me. The flowers are always fresh, the arrangements are stunning, and the service is top-notch.",name:"Mila Kunis",role:"Business Owner"}
]

var testimonials=testimonial.map(testimoini=>`<div class="col-12 col-md-6 col-lg-4 text-center">
            <div class="text-warning pt-3"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></div>
            <p class="pt-3">${testimoini.feedback}</p>
            <div class="d-flex align-items-center justify-content-center">
                <img src="${testimoini.image}" class="rounded-circle" style="height: 1cm;" alt="">
                <div class="d-flex flex-column pt-3 ps-2">
                    <p style="font-size: 15px; margin-bottom: 0px;">${testimoini.name}</p>
                    <p style="font-size: 10px; margin-top: 0px;">${testimoini.role}</p>
                </div>
            </div>
        </div>
    `).join('');

document.getElementById("testimonial").innerHTML=testimonials;