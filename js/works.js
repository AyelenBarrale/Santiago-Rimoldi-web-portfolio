let worksList = [
    {
        id: 1,
        nombre: "Vineyard Dreams",
        tipo: "Retouching Work",
        img: "./../img/P_Vineyard-1.jpg",
        url: "./../views/works/vineyard.html",
        alt: "Photo manipulation work about a vineyard"
    },
    {
        id: 2,
        nombre: "Plan V",
        tipo: "Branding Design",
        img: "./../img/P_PlanV_01.jpg",
        url: "./../views/works/planv.html",
        alt: "Branding work about travel concept"
    },
    {
        id: 3,
        nombre: "Lighthouse",
        tipo: "Retouching Work",
        img: "./../img/Lighthouse_Portada_Home.jpg",
        url: "./../views/works/lighthouse.html",
        alt: "Photo manipulation work that represent a fantasy dream about fishes and a lighthouse"
    },
    {
        id: 4,
        nombre: "Sun's Race. Enduro Event",
        tipo: "Branding Design",
        img: "./../img/P_SunsRace03.jpg",
        url: "./../views/works/sunsrace.html",
        alt: "Branding work for Sun's Race Argentinian Enduro Race"
    },
    {
        id: 5,
        nombre: "Welcome to Utah",
        tipo: "Retouching Work",
        img: "./../img/Utah_Portada_Home.jpg",
        url: "./../views/works/utah.html",
        alt: "Photo manipulation work where I create a landscape showing a vast desert"
    },
    {
        id: 6,
        nombre: "Logos Design",
        tipo: "Branding Design",
        img: "./../img/P_Logo_02.jpg",
        url: "./../views/works/logos.html",
        alt: "Branding work where show a selection of logos created since 2011"
    },
    {
        id: 7,
        nombre: "Forest Encounter",
        tipo: "Retouching Work",
        img: "./../img/P_Forest.jpg",
        url: "./../views/works/forest.html",
        alt: "Photo manipulation work about a forest environment"
    },
    {
        id: 8,
        nombre: "MUT Arquitects",
        tipo: "Branding Design",
        img: "./../img/P_Mut-1.jpg",
        url: "./../views/works/mut.html",
        alt: "Branding work. Argentinian Arquitect Studio MUT"
    },
    {
        id: 9,
        nombre: "Deep blue fears",
        tipo: "Retouching Work",
        img: "./../img/Shark_Portada_Home.jpg",
        url: "./../views/works/shark.html",
        alt: "Photo manipulation work about another animal encounter image but in this case with a more dynamic approach"
    }
];

/////// Versión Vanilla JS ///////
/* const contenedorWorks = document.getElementById("workGrid");

mostrarWorks(worksList);


function mostrarWorks (array , filter ) {
    contenedorWorks.innerHTML = "";

    if (!filter) {
        array.forEach((work) => {
            let div = document.createElement("div")
            div.classList.add("workItem-container")
            div.innerHTML = `
                <a class="workItem" href="${work.url}">
                    <div class="text">
                        <h2>${work.nombre}</h2>
                        <p>${work.tipo}</p>
                    </div>
                    <img src="${work.img}" alt="${work.alt}">
                </a>
            `
            contenedorWorks.appendChild(div)
        })
    } else {
        const worksArray = array.filter(work => work.tipo === filter)
        worksArray.forEach((work) => {
            let div = document.createElement("div")
            div.classList.add("workItem-container")
            div.innerHTML = `
                <a class="workItem" href="${work.url}">
                    <div class="text">
                        <h2>${work.nombre}</h2>
                        <p>${work.tipo}</p>
                    </div>
                    <img src="${work.img}" alt="${work.alt}">
                </a>
            `
            contenedorWorks.appendChild(div)
        });   
    
    }

}

console.log(worksList)

const filtro = document.getElementById("All")
const filtro1 = document.getElementById("Branding-Design")
const filtro2 = document.getElementById("Retouching-Work")

filtro.addEventListener("click" , () => {
    mostrarWorks(worksList)
})

filtro1.addEventListener("click" , () => {
    mostrarWorks(worksList , "Branding Design")
})

filtro2.addEventListener("click" , () => {
    mostrarWorks(worksList , "Retouching Work")
}) */


////// Versión JQUERY //////

const contenedorWorks = $("#workGrid"); 

mostrarWorks(worksList);

function mostrarWorks (array , filter ) {
    $(".workItem-container").remove();

    if (!filter) {
        for(const work of array){
            contenedorWorks.prepend(`
                <div class="workItem-container">
                    <a class="workItem" href="${work.url}">
                        <div class="text">
                            <h2>${work.nombre}</h2>
                            <p>${work.tipo}</p>
                        </div>
                        <img src="${work.img}" alt="${work.alt}">
                    </a>
                </div>
            `)
        } 
    } else {
        const worksArray = array.filter(work => work.tipo === filter)
        for(const work of worksArray){
            contenedorWorks.prepend(`
                <div class="workItem-container">
                    <a class="workItem" href="${work.url}">
                        <div class="text">
                            <h2>${work.nombre}</h2>
                            <p>${work.tipo}</p>
                        </div>
                        <img src="${work.img}" alt="${work.alt}">
                    </a>
                </div>
            `)
        }
    }
}


console.log(worksList)


$("ul li").on( "click" , function() {
    const id = this.id
    console.log(id)

    if (id === "Branding-Design") {
        mostrarWorks(worksList , "Branding Design")
    } else if (id === "Retouching-Work") {
        mostrarWorks(worksList , "Retouching Work")
    } else {
        mostrarWorks(worksList)
    }

})