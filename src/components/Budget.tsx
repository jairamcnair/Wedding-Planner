//source: https://stackblitz.com/edit/canvasjs-react-charts-typescript?file=src%2FApp.tsx 
//source: https://www.npmjs.com/package/@canvasjs/react-charts
// install command: npm install @canvasjs/react-charts 
import {useState} from 'react';
// @ts-ignore
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const Budget = () => {
    const [maxB, setMaxB] = useState('');
    const [ffp, setFfp] = useState('');
    const [fep, setFep] = useState('');
    const [fp, setFp] = useState('');
    const [fcgp, setFcgp] = useState('');

    function calcBud(mb: string, p: string) {
        let mbString: string = mb;
        let pString: string = p;

        let mbNumber: number = Number(mbString);
        let pNumber: number = Number(pString);

        let solution = mbNumber * (pNumber / 100)
        return solution;
      }

    // pie chart 
    const options = {
        title: {
          text: 'Wedding Budget Categories',
        },
        data: [
          {
            type: 'pie',
            indexLabel: "{label} - ${y}",
            dataPoints: [
              { label: 'Food + Facility', y: calcBud(maxB, ffp)},
              { label: 'Function + Entertainment', y: calcBud(maxB,fep) },
              { label: 'Fashion', y: calcBud(maxB,fp) },
              { label: 'Festivities, Cards, + Gifts', y: calcBud(maxB,fcgp) },
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
                </div>
            </form>
            </div>
            <div className="budget-inner">
            <CanvasJSChart
                options={options}
                /* onRef = {ref => this.chart = ref} */
            />
            </div>
        </div>
    )
}

export default Budget;