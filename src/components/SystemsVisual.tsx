export function SystemsVisual() {
  return (
    <figure className="systems-visual" aria-labelledby="systems-visual-caption">
      <div className="systems-visual-topline">
        <span><i aria-hidden="true" /> CONNECTED CAPABILITIES</span>
        <span className="systems-visual-index">NRE / 01</span>
      </div>
      <svg className="systems-visual-lines" viewBox="0 0 600 500" fill="none" aria-hidden="true">
        <path className="systems-path systems-path-one" d="M300 250 133 118M300 250 467 118M300 250 133 382M300 250 467 382" />
        <circle className="systems-node" cx="133" cy="118" r="4" />
        <circle className="systems-node" cx="467" cy="118" r="4" />
        <circle className="systems-node" cx="133" cy="382" r="4" />
        <circle className="systems-node" cx="467" cy="382" r="4" />
        <circle className="systems-node systems-node-center" cx="300" cy="250" r="5" />
      </svg>
      <div className="systems-core">
        <span className="systems-core-icon" aria-hidden="true"><i /><i /><i /><i /></span>
        <span className="systems-core-label">START WITH THE NEED</span>
        <strong>Business goal</strong>
        <span className="systems-core-caption">A connected solution, shaped around you.</span>
      </div>
      <div className="systems-card systems-card-web">
        <span className="systems-card-icon" aria-hidden="true">01</span>
        <span><small>CREATE</small><strong>Web &amp; apps</strong></span>
        <span className="systems-card-mark" aria-hidden="true">↗</span>
      </div>
      <div className="systems-card systems-card-data">
        <span className="systems-card-icon" aria-hidden="true">02</span>
        <span><small>UNDERSTAND</small><strong>Data &amp; insight</strong></span>
        <span className="systems-card-mark" aria-hidden="true">↗</span>
      </div>
      <div className="systems-card systems-card-commerce">
        <span className="systems-card-icon" aria-hidden="true">03</span>
        <span><small>SELL</small><strong>Commerce</strong></span>
        <span className="systems-card-mark" aria-hidden="true">↗</span>
      </div>
      <div className="systems-card systems-card-workflow">
        <span className="systems-card-icon" aria-hidden="true">04</span>
        <span><small>CONNECT</small><strong>Automation</strong></span>
        <span className="systems-card-mark" aria-hidden="true">↗</span>
      </div>
      <figcaption id="systems-visual-caption">An illustrative map of connected capabilities</figcaption>
    </figure>
  );
}
