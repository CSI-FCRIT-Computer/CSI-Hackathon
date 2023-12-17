import React from 'react';

function sanitizeId(str) {
  // Replace spaces and non-alphanumeric characters with dashes
  return str.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-').toLowerCase();
}

function createMarkup(htmlString) {
  return { __html: htmlString };
}

function FAQ({ Q, A, id }) {
  const sanitizedId = sanitizeId(Q);

  // Check if id is 4 and prepare the special link
  const specialLink = id === '4' ? (
    <a href="http://www.ps.com" target="_blank" rel="noopener noreferrer">
      Rulebook.pdf
    </a>
  ) : null;

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`flush-heading-${sanitizedId}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collapse-${sanitizedId}`}
          aria-expanded="false"
          aria-controls={`flush-collapse-${sanitizedId}`}
        >
          {Q}
        </button>
      </h2>
      <div
        id={`flush-collapse-${sanitizedId}`}
        className="accordion-collapse collapse"
        aria-labelledby={`flush-heading-${sanitizedId}`}
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body" dangerouslySetInnerHTML={createMarkup(A)}></div>
        {specialLink && (
          <div className="accordion-body">
            {specialLink}
          </div>
        )}
      </div>
    </div>
  );
}

export default FAQ;
