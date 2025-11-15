import React from 'react'
import { assets } from '../../assets/assets';
import "./Scroller.css";

const Scroller = () => {

  return (
    <section class="frames">
            <div class="frame1" style={{
              backgroundImage: `url(${assets.banner1})`
            }}>
                

            </div>
            <div class="frame2" style={{
              backgroundImage: `url(${assets.banner2})`
            }}>
                

            </div>
            <div class="frame3" style={{
              backgroundImage: `url(${assets.banner3})`
            }}>
                

            </div>

            <div class="frame4" style={{
              backgroundImage: `url(${assets.banner4})`
            }}>
               
                </div>

        </section>
  )
}

export default Scroller;
