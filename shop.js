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

document.getElementById("flowersshop").innerHTML=flowerrate;