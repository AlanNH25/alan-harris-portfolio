import React from 'react';
import '../../App.css';
import Gallery from '../Gallery';

export default function Drawings() {

      return (
        <div class="body">
            <div className = "page-title"> 
                <h1>Drawings</h1>
            </div>
            <section className="card-display">
              <Gallery type="art-drawings"/>
            </section>
        </div>
      );
}