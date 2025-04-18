const employees=[
    {img:"FlowerShop/team-skip-01.jpg",name:"Elizabeth B.",role:"owner"},
    {img:"FlowerShop/team-skip-02.jpg",name:"Amelia M.",role:"Co-Founder"},
    {img:"FlowerShop/team-skip-03.jpg",name:"Victoria D.",role:"Marketing Manager"},
    {img:"FlowerShop/team-skip-04.jpg",name:"Audrey S.",role:"Florist"},
];

var print=employees.map(values => `<div class="col-6 col-lg-3 p-4">
            <img src="${values.img}" class="img-fluid rounded-pill rounded-bottom-0">
            <div class="d-flex flex-column text-center">
                <Strong>${values.name}</Strong>
                <small>${values.role}</small>
            </div>
        </div>`).join('');

document.getElementById("employees").innerHTML=print;