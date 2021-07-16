import React, {useState} from 'react'
import './Portfolio.css'

import firstImage from "../assets/image.jpg";
import reactImg from "../assets/react.jpg";
import js from "../assets/js.jpg";
import java from "../assets/java.jpg";
import html from "../assets/html.jpg";
import fa from "../assets/fa.jpeg";
import fchat from "../assets/fchat.jpeg";
import ff from "../assets/ff.jpeg";
import fl from "../assets/fl.jpeg";
import fo from "../assets/fo.jpeg";
import fr from "../assets/fr.jpeg";
import frv from "../assets/frv.jpeg";
import fs from "../assets/fs.jpeg";
import fw from "../assets/fw.jpeg";
import ft from "../assets/ft.jpeg";
import s1 from "../assets/s1.jpeg";
import s2 from "../assets/s2.jpeg";
import s3 from "../assets/s3.jpeg";
import s4 from "../assets/s4.jpeg";
import s5 from "../assets/s5.jpeg";
import s6 from "../assets/s6.jpeg";
import sw from "../assets/sw.jpeg";
import st from "../assets/st.jpeg";
import ta from "../assets/ta.jpeg";
import ta1 from "../assets/ta1.jpeg";
import tc from "../assets/tc.jpeg";
import tqr from "../assets/tqr.jpeg";
import tr from "../assets/tr.jpeg";
import trs from "../assets/trs.jpeg";
import tt from "../assets/tt.jpeg";
import cover from "../assets/cover.png";
import a1 from "../assets/amazon-1.PNG"
import a2 from "../assets/amazon-2.PNG"
import a3 from "../assets/amazon-3.PNG"
import a4 from "../assets/amazon-4.PNG"
import a5 from "../assets/amazon-5.PNG"


import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";









export default function Slider() {

    const images = [
        {
          original: cover,
          thumbnail: cover,
        },
        {
          original: a1,
          thumbnail: a1,
        },
        {
          original: a2,
          thumbnail: a1,
        },
        {
          original: a3,
          thumbnail: a1,
        },
        {
          original: a4,
          thumbnail: a1,
        },
        {
          original: a5,
          thumbnail: a1,
        },
        {
          original: sw,
          thumbnail: st,
        },
        {
          original: s5,
          thumbnail: st,
        },
        {
          original: s6,
          thumbnail: st,
        },
        {
          original: s3,
          thumbnail: st,
        },
        {
          original: s2,
          thumbnail: st,
        },
        {
          original: s1,
          thumbnail: st,
        },
        {
          original: s4,
          thumbnail: st,
        },
        {
          original: fw,
          thumbnail: ft,
        },
        {
          original: fl,
          thumbnail: ft,
        },
        {
          original: fs,
          thumbnail: ft,
        },
        {
          original: frv,
          thumbnail: ft,
        },
        {
          original: fo,
          thumbnail: ft,
        },
        {
          original: fchat,
          thumbnail: ft,
        },
        {
          original: fa,
          thumbnail: ft,
        },
        {
          original: ff,
          thumbnail: ft,
        },
        {
          original: fr,
          thumbnail: ft,
        },

        {
          original: trs,
          thumbnail: tt,
        },
        {
          original: tr,
          thumbnail: tt,
        },
        {
          original: tc,
          thumbnail: tt,
        },
        {
          original: tqr,
          thumbnail: tt,
        },
        {
          original: ta,
          thumbnail: tt,
        },
        {
          original: ta1,
          thumbnail: tt,
        },
      ];






    return (
      <div className="portfolio">

        <div className="portfolio__text">
            <h1>Portfolio</h1>
        </div>

        <ImageGallery items={images} />

      </div>
    )
  }
