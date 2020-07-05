/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { LoadingWrapper, SVGWrapper, SVG } from './styles';

interface Props {
  fade: boolean
}

const Loading: React.FC<Props> = ({ fade }: Props): React.ReactElement => {

  const TweenMax: any = (window as any).TweenMax;
  const TimelineMax: any = (window as any).TimelineMax;
  const MorphSVGPlugin: any = (window as any).MorphSVGPlugin;
  const Power2: any = (window as any).Power2;
  const Linear: any = (window as any).Linear;

  const [ element, setElement ] = useState(null)

  const setupLoadingAnimation = () => {
    try {

      TweenMax.set('#circlePath', {
        attr: {
          r: document.querySelector('#mainCircle')?.getAttribute('r')
        }
      })
      MorphSVGPlugin.convertToPath('#circlePath');
      
          
      const select = function(s: any) {
        return document.querySelector(s);
      }

      const mainCircle = select('#mainCircle')
      const mainContainer = select('#mainContainer')
      const plane = select('#plane')
      // const mainSVG = select('.mainSVG')
      const mainCircleRadius = Number(mainCircle.getAttribute('r'))
      //radius = mainCircleRadius,
      const numDots = mainCircleRadius / 2
      const step = 360 / numDots
      const dotMin = 0
      const circlePath = select('#circlePath')
      
      //mainSVG.appendChild(circlePath);
      TweenMax.set('svg', {
        visibility: 'visible'
      })
      TweenMax.set([plane], {
        transformOrigin: '50% 50%'
      })
      
      const circleBezier = MorphSVGPlugin.pathDataToBezier(circlePath.getAttribute('d'), {
        offsetX: -19,
        offsetY: -18
      })
      
      const mainTl = new TimelineMax();
      
      const makeDots = () => {
        let d, angle, tl;
        for (let i = 0; i < numDots; i++) {
    
          d = select('#dot').cloneNode(true);
          mainContainer.appendChild(d);
          angle = step * i;
          TweenMax.set(d, {
            attr: {
              cx: (Math.cos(angle * Math.PI / 180) * mainCircleRadius) + 400,
              cy: (Math.sin(angle * Math.PI / 180) * mainCircleRadius) + 300
            }
          })
      
          tl = new TimelineMax({
              repeat: -1
          });
          tl
          .from(d, 0.2, {
                  attr:{
                  r:dotMin
                  },
                  ease:Power2.easeIn
              })
              .to(d, 1.8, {
              attr: {
              r: dotMin
              },
              ease: Power2.easeOut
          })
        
          mainTl.add(tl, i / (numDots / tl.duration()))
        }
        const planeTl = new TimelineMax({
        repeat: -1
        });
        planeTl.to(plane, tl.duration(), {
        bezier: {
            type: "cubic",
            values: circleBezier,
            autoRotate: true
        },
        ease: Linear.easeNone
        })
        mainTl.add(planeTl, 0.05)
      }
      
      makeDots();
      mainTl.time(20);
      TweenMax.to(mainContainer, 30, {
          rotation: -360,
          svgOrigin: '400 300',
          repeat: -1,
          ease: Linear.easeNone
      })
      mainTl.timeScale(1.6);

      setElement(mainCircle)

    } catch(e) {
        console.log(e)
    }
  }

  useEffect(() => {
    setupLoadingAnimation()
    // eslint-disable-next-line
  }, [element])

  return (
      <LoadingWrapper fade={fade}>

          <SVGWrapper>

              <SVG className="mainSVG"  viewBox="300 150 300 300" xmlns="http://www.w3.org/2000/svg">
                  <defs>   
                      <circle id="dot"  cx="0" cy="0" r="5" fill="#0371ac"/>   
                  </defs>

                  <circle id="mainCircle" fill="none" stroke="none" strokeWidth="2" strokeMiterlimit="10" cx="400" cy="300" r="70"/>
                  <circle id="circlePath" fill="none" stroke="none" strokeWidth="2" strokeMiterlimit="10" cx="400" cy="300" r="80"/>

                  <g id="mainContainer" >
                  <path id="plane" fill="#0371ac" d="M67.6964401960373,34.825465297698976 c0.3553618907928467,-0.3553618907928467 0.5330428361892701,-0.8884047269821167 0.5330428361892701,-1.2437666177749636 s-0.17768094539642335,-1.0660856723785401 -0.5330428361892701,-1.2437666177749636 c-2.13217134475708,-1.7768094539642334 -4.975066471099853,-2.8428951263427735 -7.817961597442627,-2.8428951263427735 l-15.45824224948883,0 L21.677075338363647,0 L14.569837522506713,0 l11.19389955997467,29.31735599040985 l-10.483175778388977,0 c-0.8884047269821167,0 -1.9544903993606568,0.17768094539642335 -2.8428951263427735,0.7107237815856934 L5.508109307289124,19.544903993606567 L0,19.544903993606567 l5.508109307289124,14.036794686317444 L0,47.44081242084503 l5.508109307289124,0 l6.92955687046051,-10.483175778388977 c0.8884047269821167,0.5330428361892701 1.7768094539642334,0.7107237815856934 2.8428951263427735,0.7107237815856934 l10.483175778388977,0 L14.569837522506713,66.9857164144516 h6.92955687046051 l23.098522901535034,-29.31735599040985 l15.45824224948883,0 C62.89905467033386,37.668360424041744 65.5642688512802,36.60227475166321 67.6964401960373,34.825465297698976 "/>      
                  </g>
              </SVG>

          </SVGWrapper>

      </LoadingWrapper>
  );

}

export default Loading;