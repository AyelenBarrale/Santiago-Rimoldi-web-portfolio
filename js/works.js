let worksList = [
    {
        id: 1,
        nombre: "Vineyard Dreams",
        tipo: "Retouching Work",
        img: "./../img/P_Vineyard-1.jpg",
        url: "",
        alt: "Photo manipulation work about a vineyard"
    },
    {
        id: 2,
        nombre: "Plan V",
        tipo: "Branding Design",
        img: "./../img/P_PlanV_01.jpg",
        url: "",
        alt: "Branding word about travel concept"
    },
    {
        id: 3,
        nombre: "Road to Kilimanjaro",
        tipo: "Retouching Work",
        img: "./../img/P_Kilimanjaro.jpg",
        url: "",
        alt: "Experimental photo manipulation work. African trip."
    },
    {
        id: 4,
        nombre: "Sun's Race. Enduro Event",
        tipo: "Branding Design",
        img: "./../img/P_SunsRace03.jpg",
        url: "./../views/works/sunsrace.html",
        alt: "Branding word for Sun's Race Argentinian Enduro Race"
    },
    {
        id: 5,
        nombre: "MUT Arquitects",
        tipo: "Branding Design",
        img: "./../img/P_Mut-1.jpg",
        url: "",
        alt: "Branding word. Argentinian Arquitect Studio MUT"
    },
    {
        id: 6,
        nombre: "Centro Empresario Tartagal",
        tipo: "Branding Design",
        img: "./../img/P_CET_2.jpg",
        url: "",
        alt: "Branding word for Centro Empresario Tartagal"
    },
    {
        id: 7,
        nombre: "Rimoldi: Personal Brand",
        tipo: "Branding Design",
        img: "./../img/P_Logo_02.jpg",
        url: "",
        alt: "Branding word for personal brand"
    },
    {
        id: 8,
        nombre: "Forest Encounter",
        tipo: "Retouching Work",
        img: "./../img/P_Forest.jpg",
        url: "",
        alt: "Photo manipulation work about a forest environment"
    }
];


const contenedorWorks = document.getElementById("workGrid");

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
})