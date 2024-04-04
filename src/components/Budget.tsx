//source: https://stackblitz.com/edit/canvasjs-react-charts-typescript?file=src%2FApp.tsx 
//source: https://www.npmjs.com/package/@canvasjs/react-charts
// install command: npm install @canvasjs/react-charts 
import {useState} from 'react';
// @ts-ignore
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const Budget = () => {
    const [maxB, setMaxB] = useState('15000');
    const [ffp, setFfp] = useState('50');
    const [fep, setFep] = useState('10');
    const [fp, setFp] = useState('10');
    const [fcgp, setFcgp] = useState('10');
    const [hp, setHp] = useState('20');
    const [bl, setBl] = useState('20');

    /*let maxBString: string = maxB;
    let maxBNumber: number = Number(maxBString);

    let ffpString: string = ffp;
    let ffpNumber: number = Number(ffpString);

    let fepString: string = fep;
    let fepNumber: number = Number(fepString);

    let fpString: string = fp;
    let fpNumber: number = Number(fpString);

    let fcgpString: string = fcgp;
    let fcgpNumber: number = Number(fcgpString);

    let hpString: string = hp;
    let hpNumber: number = Number(hpString);

    let blString: string = bl;
    let blNumber: number = Number(blString);*/

   
      /*  if(ffpNumber + fepNumber + fpNumber + fcgpNumber + hpNumber > 100){
                alert("over")
        }
        if(ffpNumber + fepNumber + fpNumber + fcgpNumber + hpNumber < 100){
            alert("under")
    }*/


    function calcBud(mb: string, p: string) { // runs automatically
        let mbString: string = mb;
            let pString: string = p;

            let mbNumber: number = Number(mbString);
            let pNumber: number = Number(pString);

            let solution = mbNumber * (pNumber / 100)
            return solution;
        
        
      }

      function calcBL(mb: string, ffp: string, fep: string, fp: string, fcgp: string, hp: string) { // runs automatically
            let mbString: string = mb;
            let mbNumber: number = Number(mbString);

            let ffpString: string = ffp;
            let ffpNumber: number = Number(ffpString);

            let fepString: string = fep;
            let fepNumber: number = Number(fepString);

            let fpString: string = fp;
            let fpNumber: number = Number(fpString);

            let fcgpString: string = fcgp;
            let fcgpNumber: number = Number(fcgpString);

            let hpString: string = hp;
            let hpNumber: number = Number(hpString);


            let ffB = mbNumber * (ffpNumber / 100)
            let feB = mbNumber * (fepNumber / 100)
            let fB = mbNumber * (fpNumber / 100)
            let fcgB = mbNumber * (fcgpNumber / 100)
            let hB = mbNumber * (hpNumber / 100)

            let solution = mbNumber - (ffB + feB + fB + fcgB + hB)
            return solution;
        
        
      }

      /*function calcP(mb: string, y: string){
        let mbString: string = mb;
        let yString: string = y;

        let mbNumber: number = Number(mbString);
        let yNumber: number = Number(yString);

        let solution = (yNumber / mbNumber) * 100;
        return solution;
      }*/

    // pie chart 
    const options = {
        title: {
          text: 'Wedding Budget Categories',
        },
        data: [
          {
            type: 'pie',
            startAngle: 45,
			toolTipContent: "<b>{label}</b>: {y}%",
            indexLabel: "{label} - {y}%",
            showInLegend: "true",
            legendText: "{label}",
            dataPoints: [
             /* { label: 'Food + Facility', y: calcBud(maxB,ffp)}, 
              { label: 'Function + Entertainment', y: calcBud(maxB,fep) },
              { label: 'Fashion', y: calcBud(maxB,fp) },
              { label: 'Festivities, Cards, + Gifts', y: calcBud(maxB,fcgp) },
              { label: 'Honeymoon', y: calcBud(maxB,hp) },*/
              { label: 'Food + Facility', y: ffp}, 
              { label: 'Function + Entertainment', y: fep },
              { label: 'Fashion', y: fp },
              { label: 'Festivities, Cards, + Gifts', y: fcgp},
              { label: 'Honeymoon', y: hp },
            ],
          },
        ],
      };
    
    return(

        <div className='budget'>
            <div className="budget-inner">
            <form>
                <div id='container'>
                    <div id='maxBudget'>
                        <span>$</span>
                        <input
                            type='text'
                            required
                            value={maxB}
                            onChange = {(e) => setMaxB(e.target.value)}  // max b is constant for each section (ff, fe, etc.)
                        /><br/>
                        <label id='maxB-label'>Maximum Budget</label>

                    </div>
                    <div className='b-main' id='foodFacility'>
                        <div className='b-main-2'>
                            <div className='color-key' id="ffck"></div>
                        </div>
                        <div className='b-main-2 sec-name'>
                            <div className='section-name'>
                                <p>Food + Facility</p>
                                <sup> 
                                    <input
                                        type='text'
                                        required
                                        value={ffp}
                                        onChange = {(e) => setFfp(e.target.value)}
                                    /><span>%</span>
                                </sup>
                            </div>
                            <div className='cb'>
                                <span>$</span><p>{calcBud(maxB,ffp)}</p>
                            </div>
                        </div>
                    </div>
                    <div className='b-main' id='functionEntertainment'>
                        <div className='b-main-2'>
                            <div className='color-key' id="feck"></div>
                        </div>
                        <div className='b-main-2 sec-name'>
                            <div className='section-name'>
                                <p>Function +  Entertainment</p>
                                <sup> 
                                    <input
                                        type='text'
                                        required
                                        value={fep}
                                        onChange = {(e) => setFep(e.target.value)}
                                    /><span>%</span>
                                </sup>
                            </div>
                            <div className='cb'>
                                <span>$</span><p>{calcBud(maxB,fep)}</p>
                            </div>
                        </div>
                    </div>
                    <div className='b-main' id='fashion'>
                        <div className='b-main-2'>
                            <div className='color-key' id="fck"></div>
                        </div>
                        <div className='b-main-2 sec-name'>
                            <div className='section-name'>
                                <p>Fashion</p>
                                <sup> 
                                    <input
                                        type='text'
                                        required
                                        value={fp}
                                        onChange = {(e) => setFp(e.target.value)}
                                    /><span>%</span>
                                </sup>
                            </div>
                            <div className='cb'>
                                <span>$</span><p>{calcBud(maxB,fp)}</p>
                            </div>
                        </div>
                    </div>
                    <div className='b-main' id='festivitiesCardsGifts'>
                        <div className='b-main-2'>
                            <div className='color-key' id="fcgck"></div>
                        </div>
                        <div className='b-main-2 sec-name'>
                            <div className='section-name'>
                                <p>Festivities, Cards, + Gifts </p>
                                <sup> 
                                    <input
                                        type='text'
                                        required
                                        value={fcgp}
                                        onChange = {(e) => setFcgp(e.target.value)}
                                    /><span>%</span>
                                </sup>
                            </div>
                            <div className='cb'>
                                <span>$</span><p>{calcBud(maxB,fcgp)}</p>
                            </div>
                        </div>
                    </div>
                    <div className='b-main' id='honeymoon'>
                        <div className='b-main-2'>
                            <div className='color-key' id="hck"></div>
                        </div>
                        <div className='b-main-2 sec-name'>
                            <div className='section-name'>
                                <p>Honeymoon </p>
                                <sup> 
                                    <input
                                        type='text'
                                        required
                                        value={hp}
                                        onChange = {(e) => setHp(e.target.value)}
                                    /><span>%</span>
                                </sup>
                            </div>
                            <div className='cb'>
                                <span>$</span><p>{calcBud(maxB,hp)}</p>
                            </div>
                        </div>
                    </div>
                    <div className='b-main' id='budgetleft'>
                        <div className='b-main-2'>
                            <div className='color-key' id="blck"></div>
                        </div>
                        <div className='b-main-2 sec-name'>
                            <div className='section-name'>
                                <p> Budget Left </p>
                            </div>
                            <div className='cb'>
                                <span>$</span><p>{calcBL(maxB,ffp, fep, fp, fcgp, hp)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            </div>
            <div className="budget-inner" id="piechart">
                <CanvasJSChart
                    options={options}
                    /* onRef = {ref => this.chart = ref} */
                />
                <div id="ledger-btn-div">
                    <button id="ledger-btn"> Ledger </button>
                </div>
            </div>
        </div>
    )
}

export default Budget;