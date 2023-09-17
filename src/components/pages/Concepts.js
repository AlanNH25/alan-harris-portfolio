import React from 'react';
import '../../App.css';
import Gallery from '../Gallery';

export default function Concepts() {

      return (
        <div class="body">
            <div className = "page-title"> 
                <h1>Concept Art</h1>
            </div>
            <section className="card-display">
              <Gallery type="art-concept"/>
            </section>
        </div>
      );
}