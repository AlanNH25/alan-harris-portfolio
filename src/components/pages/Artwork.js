import React from 'react';
import '../../App.css';
import Gallery from '../Gallery';

export default function Artwork() {

      return (
        <div class="body">
            <div className = "page-title"> 
                <h1>Artwork</h1>
            </div>
            <section className="card-display">
              <Gallery type="art-piece"/>
            </section>
        </div>
      );
}