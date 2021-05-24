import {data} from './data.js'
import {data2} from './data2.js'

export default (testimoniesSm, testimoniesLg)=>{
    testimoniesSm.innerHTML = data2.map((item)=>{
        return`
            <article class="single-testimony">
                        <div class="image-container">
                            <img src="${item.image}" alt="Patient Image" class="patient-image">
                        </div>
                        <p class="patient-testimony">${item.testimony}</p>
                        <p class="patient-name">${item.name}</p> 
                    </article>
        `
    }).join('');
    testimoniesLg.innerHTML = data.map((item)=>{
        return`
            <article class="single-testimony">
                        <div class="image-container">
                            <img src="${item.image}" alt="Patient Image" class="patient-image">
                        </div>
                        <p class="patient-testimony">${item.testimony}</p>
                        <p class="patient-name">${item.name}</p> 
                    </article>
        `
    }).join('');
}