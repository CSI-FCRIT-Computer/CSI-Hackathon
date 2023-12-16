import React from 'react';

function FAQ({ Q, A }) {
  return (
    <div class="accordion-item">
      <h2 class="accordion-header" id={`flush-heading${Q}`}>
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collapse${Q}`}
          aria-expanded="false"
          aria-controls={`flush-collapse${Q}`}
        >
          {Q}
        </button>
      </h2>
      <div
        id={`flush-collapse${Q}`}
        class="accordion-collapse collapse"
        aria-labelledby={`flush-heading${Q}`}
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">{A}</div>
      </div>
    </div>
  );
}

export default FAQ;
